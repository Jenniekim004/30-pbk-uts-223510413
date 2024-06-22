import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layout/MainLayout.vue';
import TodoApp from '../views/TodoApp.vue';
import Posts from '../views/Posts.vue';
import Albums from '../views/Albums.vue';
import AlbumView from '../views/AlbumView.vue';

const routes = [
  {
    path: '/', redirect:'todos',
    component: MainLayout,
    children: [
      { path: 'todos', component: TodoApp },
      { path: 'posts', component: Posts },
      { path: 'albums', component: Albums },
      { path: 'albums/:photoId', component: AlbumView, props: true },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
