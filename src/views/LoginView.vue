<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const { push } = useRouter();

const email = ref('');
const password = ref('');
function login() {
  push('/');
}
</script>

<template>
  <div class="login-form">
    <form v-on:submit.prevent="login">
      <div>
        <label for="email">email</label>
        <input id="email" v-model="email" type="text" data-cy="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          data-cy="password"
        />
      </div>
      <button type="submit" data-cy="submit">Submit</button>
    </form>
  </div>
</template>
<style>
.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
