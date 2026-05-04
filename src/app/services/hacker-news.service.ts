import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable, of, tap } from 'rxjs';
import { HackerNewsStory } from '../models/hacker-news-story';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {
  private readonly baseUrl = 'https://hacker-news.firebaseio.com/v0';
  private storyIdsCache: number[] | null = null;
  private storiesCache = new Map<number, HackerNewsStory>();

  constructor(private http: HttpClient) {}

  getNewStoryIds(): Observable<number[]> {
    if (this.storyIdsCache) {
      return of(this.storyIdsCache);
    }

    return this.http.get<number[]>(`${this.baseUrl}/newstories.json`).pipe(
      tap(ids => this.storyIdsCache = ids)
    );
  }

  getStoryById(id: number): Observable<HackerNewsStory> {
    const cachedStory = this.storiesCache.get(id);

    if (cachedStory) {
      return of(cachedStory);
    }

    return this.http.get<HackerNewsStory>(`${this.baseUrl}/item/${id}.json`).pipe(
      tap(story => this.storiesCache.set(id, story))
    );
  }

  getStoriesByIds(ids: number[]): Observable<HackerNewsStory[]> {
    return forkJoin(ids.map(id => this.getStoryById(id))).pipe(
      map(stories => stories.filter(story => story && story.type === 'story' && story.title))
    );
  }
}