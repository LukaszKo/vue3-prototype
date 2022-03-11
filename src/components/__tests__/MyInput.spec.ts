import { mount } from '@vue/test-utils';
import MyInput from '../atoms/MyInput.vue';

test('[MyInput] sets props', () => {
  const wrapper = mount(MyInput, {
    props: { modelValue: 'email@gmail.com', label: 'Email' },
  });
  const input = wrapper.find('input');

  expect(input.element.value).toBe('email@gmail.com');
  expect(wrapper.html()).toContain('Email');
});
