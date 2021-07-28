import {
  createRouter,
  createWebHashHistory,
  RouterOptions,
  RouterView,
} from 'vue-router';
import Index from '@/views/index.vue';
import BookMark from '@/views/bookmark.vue';

const routerOption: RouterOptions = {
  history: createWebHashHistory(),
  routes: [
    {
      name: 'index',
      path: '/',
      component: Index,
      redirect: { path: '/bookmark/index' },
      children: [
        {
          name: 'bookmark',
          path: '/bookmark',
          component: RouterView,
          redirect: { path: '/bookmark/index' },
          children: [
            {
              name: 'bookmark_detail',
              path: ':key',
              component: BookMark,
            },
          ],
        },
      ],
    },
  ],
};

const router = createRouter(routerOption);

export default router;
