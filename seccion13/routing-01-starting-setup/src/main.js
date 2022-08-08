import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamsMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue'
import UserFooter from './components/users/UserFooter.vue'

const router = createRouter({
  routes: [
    {
      path: '/',
      redirect: '/teams',
    },
    {
      path: '/teams',
      name: 'teams',
      components: {default: TeamsList, footer:TeamsFooter},
      children: [
        {name:'team-members',
          path: ':teamId',
          component: TeamsMembers,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      components: {default:UsersList, footer:UserFooter}
    },

    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
  linkActiveClass: 'active',
  history: createWebHistory(),
});
const app = createApp(App);

app.use(router);
app.mount('#app');
