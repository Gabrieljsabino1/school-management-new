import { createRouter, createWebHistory } from 'vue-router';
import Students from '@/components/Students.vue';
import Subjects from '@/components/Subjects.vue';
import Exams from '@/components/Exams.vue';
import StudentDetails from '@/components/StudentDetails.vue';

const routes = [
  { path: '/', component: Students },
  { path: '/subjects', component: Subjects },
  { path: '/exams', component: Exams },
  {
    path: '/student/:id',
    component: StudentDetails,
    name: 'StudentDetails',
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
