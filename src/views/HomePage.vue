<template>
  <div class="p-8 pb-0 text-orange-500 mb-8">
    <h1 class="text-4xl font-bold mb-4">
      Random Meals
    </h1>
  </div>
  <MealLayout
    v-if="meals"
    :meals="meals"
  />
</template>
<script setup>
import MealLayout from '../components/MealLayout.vue'
import MealsDataService from '@/services/MealsDataService';
import { onMounted,ref } from 'vue'
const meals = ref(null);
onMounted(async ()=>{
  await MealsDataService.getAllMealAsync().then(res => meals.value = res)
})
</script>