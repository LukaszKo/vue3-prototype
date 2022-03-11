<script setup lang="ts">
import MyInput from '@/components/atoms/MyInput.vue';
import MyList from '@/components/atoms/MyList.vue';
import { storeToRefs } from 'pinia';
import { onMounted, reactive, ref } from 'vue';
import { usePostsStore } from '@/stores/posts';
import usePosts from '@/composables/usePosts';
import useFilters from '@/composables/useFilters';

const form = reactive({
  title: '',
  body: '',
});

const postId = ref('');

// import usePosts from '@/composables/usePosts'

// const { limitedPosts, fetchPosts } = usePosts();
const { setOptions, filters, getOptions, onChange, onSelect } = useFilters();

const store = usePostsStore();

const { limitedPosts } = storeToRefs(store);

async function search() {
  // await fetchPosts(filters.value);
}

async function submit() {
  await store.createPost({
    title: form.title,
    body: form.body,
    id: 0,
    userId: 1,
  });
  form.title = '';
  form.body = '';
}

async function removePostHandler() {
  await store.removePost(+postId.value);
  postId.value = '';
}

async function updatePostHandler() {
  try {
    await store.updatePost(1, { title: 's', id: 1, body: '', userId: 0 });
  } catch (error) {
    alert('component' + error);
  }
}

onMounted(() => {
  store.fetchPosts();
  // fetchPosts();
  setOptions(["new", "old"]);
});
</script>

<template>
  <div>
    <h2 data-cy="homePage">Home page</h2>
    <div class="container">
      <div class="post-form">
        <h2>Create new post</h2>
        <form v-on:submit.prevent="submit">
          <div>
            <MyInput v-model="form.title" label="Title"></MyInput>
          </div>
          <div>
            <MyInput v-model="form.body" label="Body"></MyInput>
          </div>
          <button type="submit" data-cy="createPostButton">Submit</button>
        </form>
      </div>
      <div class="post-form">
        <h2>Remove post</h2>
        <form v-on:submit.prevent="removePostHandler">
          <div>
            <MyInput v-model="postId" label="Post id"></MyInput>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div class="post-form">
        <h2>Failed request</h2>
        <button @click="updatePostHandler">Send</button>
      </div>
    </div>

    <div class="post-header">
      <h2>Posts</h2>
      <div class="filters">
        <input
          type="text"
          @change.prevent="(event: any) => onChange(event.target.value)"
        />
        <select @change="onSelect">
          <option :value="option" v-for="option in getOptions" :key="option">
            {{ option }}
          </option>
        </select>
        <button @click="search">Search</button>
      </div>
    </div>
    <MyList :list="limitedPosts" #default="{ item, index }">
      {{ index + 1 }}. {{ item.title }}
    </MyList>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/tokens.scss';

.post-form {
  margin: $margin-lg 0;
}

.container {
  width: 100%;
  display: flex;
}

.filters select,
input {
  width: $size-md;
  margin-right: $margin-md;
}
</style>
