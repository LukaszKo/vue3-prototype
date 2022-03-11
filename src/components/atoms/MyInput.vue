<script setup lang="ts">
defineProps<{
  label: string;
  modelValue: string;
}>();

defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();
</script>
<template>
  <div class="my-input">
    <label :for="label">{{ label }}</label>
    <input
      :id="label"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/tokens.scss';
.my-input {
  margin: $margin-sm 0;
  display: flex;
  justify-content: space-between;

  label {
    margin-right: $margin-sm;
  }
}
</style>
