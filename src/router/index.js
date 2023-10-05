import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../composable/DefaultLayout.vue'
import HomePage from '../views/HomePage.vue'
import WorkerList  from '../components/WorkerlList.vue'
import GuestLayout  from '../components/GuestLayout.vue'
import AddMeal  from '../views/AddMeal.vue'
const routes = [
    {
      path: '/',
      component: DefaultLayout ,
      children: [
        {
          path: "/",
          name: "HomePage",
          component: HomePage,
        },
        {
            path: "/worker-list",
            name: "WorkerList",
            component: WorkerList 
        },
        {
            path: '/add-meal',
            name: 'AddMeal',
            component: AddMeal
        }
      ]
    },
    {
      path: '/guest',
      component: GuestLayout
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;