import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue';
import MenuView from '@/views/MenuView.vue';
import OrderView from '@/views/OrderView.vue';

// declare our modified meta type
declare module 'vue-router' {
  interface RouteMeta {
    /** The website title that is assigned to document.title when visiting this route */
    title: string;
  }
}

// declare our router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: 'Elemental' },
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      meta: { title: 'About' },
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      meta: { title: 'Contact'},
      component: ContactView
    },
    {
      path: '/menu',
      name: 'menu',
      meta: { title: 'Menu' },
      component: MenuView
    },
    {
      path: '/order',
      name: 'order',
      meta: { title: 'Order' },
      component: OrderView
    }
  ],
})

// before we load any route, set the document title to reflect it
router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = to.meta.title;
  next();
});

export default router
