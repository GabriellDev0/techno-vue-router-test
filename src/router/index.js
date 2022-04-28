import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ContatoView from '@/views/ContatoView.vue';
import CursosView from '@/views/CursosView.vue';
import CursoView from '@/views/CursoView.vue';
import AulaView from '@/views/AulaView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/contato',
    name: 'Contato',
    component: ContatoView,
  },
  {
    path: '/cursos',
    name: 'Cursos',
    component: CursosView,
  },
  {
    path: '/cursos/:curso',
    name: 'Curso',
    component: CursoView,
    props: true,
    children:[
      {
        path: ":aula",
        name: "Aula",
        component: AulaView,
        props: true,
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
