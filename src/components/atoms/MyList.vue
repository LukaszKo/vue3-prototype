<script setup lang="ts">
defineProps({
  list: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <ul>
    <li v-for="(item, index) in list" :key="index" :data-cy="index">
      <slot :item="item" :index="index"></slot>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
@import '@/assets/scss/tokens.scss';

ul {
  margin: $margin-md 0;
  list-style-type: none;
  padding: 0;
}
</style>
