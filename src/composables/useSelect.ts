import { computed, ref } from 'vue';

export default function useSelect() {
  const selectedValue = ref(null);
  const options = ref<any[]>([]);

  function setOptions(selectOptions: any[]) {
    options.value = selectOptions;
  }

  function onSelect(value: any) {
    selectedValue.value = value;
  }

  return {
    getSelectedValue: computed(() => selectedValue.value),
    getOptions: computed(() => options.value),
    setOptions,
    onSelect,
  };
}
