import { mount } from '@vue/test-utils';
import MyList from '../atoms/MyList.vue';

test('[MyList] render list', () => {
  const posts = [
    {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
  ];
  const wrapper = mount(MyList, {
    slots: {
      default: `<template v-slot="{index, item}">  {{ index + 1 }}. {{ item.title }}</template>`,
    },
    props: { list: posts },
  });
  const [first] = posts;
  const list = wrapper.findAll('li');
  const firstEl = list.at(0);
  expect(firstEl.html()).toContain(`1. ${first.title}`);
  expect(list.length).toBe(2);
});
