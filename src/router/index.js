
import { useAuthStore } from '@/stores/auth'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})


router.beforeEach((to, from, next) => {

  const authenticated = useAuthStore().isAuthenticated;

  if (to.meta.requiresAuth && !authenticated) {
    next({ name: "home" });
    return;
  }

  if (to.meta.requiresGuest && authenticated) {
    next({ name: "home" });
    return;
  }

  next();
});
export default router
