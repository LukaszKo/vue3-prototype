<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { usePostsStore } from '@/stores/posts';

const state = usePostsStore();

const form = reactive({
  title: '',
  body: '',
});

function submit() {
  state.createPost({ title: form.title, body: form.body, id: 0, userId: 1 });
}
</script>
<template>
  <div>
    <h1>Create new post</h1>
    <form v-on:submit.prevent="submit">
      <div>
        <label for="name">Title</label>
        <input id="name" v-model="form.title" type="text" />
      </div>
      <div>
        <label for="name">Body</label>
        <input id="name" v-model="form.body" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
