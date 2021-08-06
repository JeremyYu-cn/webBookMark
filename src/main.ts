import { createApp } from 'vue';
import { VueErrorPlugin } from 'check-code-js';
import App from './App.vue';
import router from '@/router/index';
import store from '@/store/index';

console.log(import.meta.env.BASE_URL);

const app = createApp(App);

app.use(VueErrorPlugin as any);
app.use(router);
app.use(store);

app.mount('#app');
