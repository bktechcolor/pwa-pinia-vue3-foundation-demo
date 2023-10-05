<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
  </div>
  <MealLayout v-if="meals" :meals="meals" />
</template>

<script setup>
import MealLayout from '../components/MealLayout.vue'
import { useTaskStore } from '../stores/index'
import { ref, onMounted,computed } from 'vue'
const meals = computed(()=>taskStore.getMeals)
const taskStore = useTaskStore()
onMounted(async ()=>{
  await taskStore.getAll()
})
</script>