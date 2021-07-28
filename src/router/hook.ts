import {
  NavigationGuardNext,
  NavigationGuardWithThis,
  RouteLocationNormalized,
  Router,
} from 'vue-router';

/**
 * 全局路由钩子
 * @param router
 */
export function routerHook(router: Router): void {
  router.beforeEach((to, from, next) => {
    next();
  });
}

export const bookmarkHook: NavigationGuardWithThis<unknown> = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void => {
  next();
};
