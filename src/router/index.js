import { createRouter, createWebHistory } from 'vue-router'
import CoachDetails from '../pages/coaches/CoachDetails.vue';
import CoachesList from '../pages/coaches/CoachesList.vue';
import CoachRegistration from '../pages/coaches/CoachRegistration.vue';
import RequestRecieved from '../pages/requests/RequestRecieved.vue';
import ContactCoach from '../pages/requests/ContactCoach.vue';
import NotFound from '../pages/NotFound.vue';

const routes = [
  { path: '/', redirect: '/coaches' },
  { path: '/coaches', component: CoachesList },
  { path: '/coaches/:id', component: CoachDetails, props: true, children: [{ path: 'contact', component: ContactCoach }] },
  { path: '/register', component: CoachRegistration },
  { path: '/requests', component: RequestRecieved },
  { path: '/:notFound(.*)', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
