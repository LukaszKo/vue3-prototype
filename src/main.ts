import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import '@/assets/scss/base.scss';
import App from './App.vue';
import router from './router';
import locales from 'translations';

const i18n = createI18n({
	locale: 'en',
	fallbackLocale: 'en',
	messages: locales,
});

const app = createApp(App);

app.use(i18n);
app.use(createPinia());
app.use(router);
app.mount('#app');
