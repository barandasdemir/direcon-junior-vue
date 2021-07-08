import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to) => {
  const user = localStorage.getItem('user');

  if (user && to.name === 'Register') {
    return {
      path: '/',
    };
  }

  return true;
});

export default router;
