import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Post from './components/Post.vue';
import About from './components/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/posts',
      name: 'posts',
      component: Post
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path : '/about',
        name : 'about',
        component :About
    }
  ]
});
