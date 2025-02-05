export interface NewsItem {
  _id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  imageUrl: string;
  author: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface NewsResponse {
  news: NewsItem[];
  total: number;
  page: number;
  totalPages: number;
}
