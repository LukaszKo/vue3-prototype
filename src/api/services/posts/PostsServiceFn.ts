import httpClient from '../../httpClient';
import type { Post, PostFilters } from './Model';

const POSTS_URL = `${import.meta.env.VITE_API_URL}/posts`;

export const fetch = (filters?: PostFilters) =>
  <Promise<{ data: Post[] }>>httpClient.get(POSTS_URL, { params: filters });

export const create = (body: Post) =>
  <Promise<{ data: Post }>>httpClient.post(POSTS_URL, body);

export const remove = (postId: number) =>
  httpClient.delete(`${POSTS_URL}/${postId}`);

export const update = (postId: number, payload: Post) =>
  httpClient.patch(`${POSTS_URL}/`, payload);
