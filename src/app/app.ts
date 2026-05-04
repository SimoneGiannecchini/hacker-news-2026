import { Component, OnInit, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HackerNewsService } from './services/hacker-news.service';
import { HackerNewsStory } from './models/hacker-news-story';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = 'Hacker News Latest';
  protected readonly stories = signal<HackerNewsStory[]>([]);
  protected readonly loading = signal(false);
  protected readonly error = signal('');
  protected readonly hasMore = signal(true);

  private storyIds: number[] = [];
  private currentIndex = 0;
  private readonly pageSize = 10;

  constructor(private hackerNewsService: HackerNewsService) {}

  ngOnInit(): void {
    this.loadInitialStories();
  }

  protected loadMore(): void {
    if (this.loading() || !this.hasMore()) {
      return;
    }

    const nextIds = this.storyIds.slice(this.currentIndex, this.currentIndex + this.pageSize);

    if (!nextIds.length) {
      this.hasMore.set(false);
      return;
    }

    this.loading.set(true);

    this.hackerNewsService.getStoriesByIds(nextIds).subscribe({
      next: stories => {
        this.stories.update(current => [...current, ...stories]);
        this.currentIndex += this.pageSize;
        this.hasMore.set(this.currentIndex < this.storyIds.length);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }

  protected getStoryLink(story: HackerNewsStory): string {
    return story.url || `https://news.ycombinator.com/item?id=${story.id}`;
  }

  private loadInitialStories(): void {
    this.loading.set(true);
    this.error.set('');

    this.hackerNewsService.getNewStoryIds().subscribe({
      next: ids => {
        this.storyIds = ids;
        this.loading.set(false);
        this.loadMore();
      },
      error: () => {
        this.error.set('Non è stato possibile recuperare la lista delle ultime news.');
        this.loading.set(false);
      }
    });
  }
}
// update
