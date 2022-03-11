import { computed } from 'vue';
import useSearchbar from './useSearchbar';
import useSelect from './useSelect';

export default function useFilters() {
  const { getSearchValue, onChange } = useSearchbar();
  const { getSelectedValue, setOptions, getOptions, onSelect } = useSelect();

  const filters = computed(() => ({
    q: getSearchValue.value,
    type: getSelectedValue.value,
  }));

  function clear() {
    onChange('');
    onSelect(null);
  }

  return {
    filters,
    getOptions,
    clear,
    setOptions,
    onSelect,
    onChange
  };
}
