import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import auth from '../views/auth.vue'
import store from '../store';
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { Auth: true },


  },
  {
    path: '/auth',
    name: 'auth',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: auth , meta: { Unauth: true } ,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(function(to, _, next) {
  store.dispatch("tryLogin")
  console.log("auth rout",store.getters.isAuthenticated)
  if (to.meta.Auth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.Unauth && store.getters.isAuthenticated) {
    next('/');
  } else {
    next();
  }
});
export default router
