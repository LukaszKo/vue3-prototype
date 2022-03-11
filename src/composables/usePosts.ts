import { computed, onMounted, reactive } from 'vue';
import { fetch, create } from '@/api/services/posts/PostsServiceFn';
import PostServiceClass from '@/api/services/posts/PostServiceClass';
import type { PostFilters } from '@/api/services/posts/Model';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function usePosts() {
  const state = reactive({
    posts: [] as Post[],
    loading: false,
  });

  function findPostById(postId: number) {
    return state.posts.find((post: Post) => post.id === postId);
  }

  async function fetchPosts(filters?: PostFilters) {
    try {
      state.loading = true;
      // const { data } = await PostServiceClass.fetch();
      const { data } = await fetch(filters);
      state.posts = data;
    } catch (error) {
      console.error(error);
    } finally {
      state.loading = false;
    }
  }

  async function createPost(post: Post) {
    try {
      const { data } = await create(post);
      // const { data } = await PostServiceClass.create(post);
      state.posts.push(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return {
    posts: computed(() => state.posts),
    limitedPosts: computed(() => state.posts.slice(0, 10)),
    fetchPosts,
    createPost,
    findPostById,
  };
}
