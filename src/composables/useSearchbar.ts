import { computed, ref } from 'vue';

export default function useSearchbar() {
  const searchValue = ref('');

  function onChange(value: string) {
    searchValue.value = value;
  }

  return {
    getSearchValue: computed(() =>
      searchValue.value.trim().toLocaleLowerCase()
    ),
    onChange,
  };
}
