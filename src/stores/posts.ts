import { defineStore } from 'pinia';
import type { Post } from '@/api/services/posts/Model';
import { fetch, create, remove, update } from '@/api/services/posts/PostsServiceFn';
import PostServiceClass from '@/api/services/posts/PostServiceClass';


export const usePostsStore = defineStore({
  id: 'posts',
  state: () => ({
    posts: [] as Post[],
  }),
  getters: {
    limitedPosts: (state) =>
      state.posts.slice(state.posts.length - 10, state.posts.length),
  },
  actions: {
    async fetchPosts() {
      try {
        // const { data } = await fetch();
        const { data } = await PostServiceClass.fetch();
        this.posts = data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async createPost(post: Post) {
      try {
        const { data } = await create(post);
        // const { data } = await PostServiceClass.create(post);

        this.posts.push(data);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async removePost(postId: number) {
      try {
        await remove(postId);
        // const { data } = await PostServiceClass.create(post);
        this.posts = this.posts.filter((post: Post) => post.id !== postId);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async updatePost(postId: number, payload: Post) {
      // try {
        await update(postId, payload);
        // const { data } = await PostServiceClass.update(postId, post);
      // } catch (error) {
      //   alert('local' + error);
      //   throw error;
      // }
    },
  },
});
