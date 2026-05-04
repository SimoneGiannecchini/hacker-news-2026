export interface HackerNewsStory {
  id: number;
  title: string;
  url?: string;
  time: number;
  by?: string;
  score?: number;
  type: string;
}