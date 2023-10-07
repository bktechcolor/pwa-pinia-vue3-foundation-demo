import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../composable/DefaultLayout.vue'
import HomePage from '../views/HomePage.vue'
import WorkerList  from '../components/WorkerlList.vue'
import GuestLayout  from '../components/GuestLayout.vue'
import AddMeal  from '../views/AddMeal.vue'
import AboutPage  from '../views/AboutPage.vue'
import MealById  from '../views/MealById.vue'
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
          path:"/about-app",
          name:"AboutPage",
          component: AboutPage
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
        },
        {
            path: '/meal-by-id/:id?',
            name: 'MealById',
            component: MealById
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