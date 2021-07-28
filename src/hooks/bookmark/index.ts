import { NavigationGuard } from 'vue-router';

export const bookmarkRouteUpdate: NavigationGuard = (to, from, next) => {
  next();
};
