export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface PostFilters {
  q: string;
  type: string | null;
}
