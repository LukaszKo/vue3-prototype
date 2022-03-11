import httpClient from '../../httpClient';
import type { Post } from './Model';

class PostService {
  url = '';

  constructor(url: string) {
    this.url = url;
  }

  async fetch(filters?: { userId: number }) {
    return <Promise<{ data: Post[] }>>(
      httpClient.get(this.url, { params: filters })
    );
  }

  async create(body: Post) {
    return <Promise<{ data: Post }>>httpClient.post(this.url, body);
  }

  async delete(postId: number) {
    return <Promise<null>>httpClient.delete(`${this.url}/${postId}`);
  }

  async update(postId: number, payload: Post) {
    return <Promise<Post>>httpClient.patch(`${this.url}/${postId}`, payload);
  }
}

export default new PostService(`${import.meta.env.VITE_API_URL}/posts`);
