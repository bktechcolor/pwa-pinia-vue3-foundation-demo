<template>
    <div class="bg-white shadow-lg rounded-xl hover:scale-105 transition-all">
      <div>
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="rounded-t-xl w-full h-48 object-cover"
        />
      </div>
      <div class="p-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4">
          {{ $filters.truncateWords(meal.strInstructions, 20) }}
        </p> 
        <div class="flex items-center justify-between">
        <Button @click="handleDelete(meal.idMeal)" class="px-3 py-2 bg-amber-500 text-white rounded-md">
          Delete Meal
        </Button>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import {ref} from 'vue'
  import { useTaskStore } from '../stores/index'
  const taskStore = useTaskStore()
  const props  = defineProps({
    meal: {
      required: true,
      type: Object
    }
  })
  const meal = ref(props.meal)
  const handleDelete = async (id)=>{
     await taskStore.deleteMeal(id)
  }
  </script>
  