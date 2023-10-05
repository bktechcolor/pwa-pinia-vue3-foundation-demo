<template>
    <div class="w-max-2xl">
        <img :src="displayThumb" alt="" >
        <form @submit.prevent="handleSubmit" class="mt4 mb-8">
            <ion-input label="Meal Name" 
            label-placement="floating" 
            :counter="true" 
            maxlength="200"
            :value="mealName"
            @input="event=> mealName = event.target.value"
            :style="`--highlight-color-focused: var(--ion-color-new)`"
            >
            </ion-input>

            <ion-input
                id="custom-input"
                label="Categories"
                label-placement="floating"
                :counter="true"
                maxlength="200"
                :counter-formatter="customFormatter"
                :style="`--highlight-color-focused: var(--ion-color-new)`"
                :value="mealCategories"
                @input="event=>mealCategories = event.target.value"
            >
            </ion-input>

            <ion-input label="Thumb url" 
            label-placement="floating" 
            :counter="true"
            :value="thumbUrl"
            @input="handleThumbUrl($event)"
            maxlength="500"
            :style="`--highlight-color-focused: var(--ion-color-new)`">
            </ion-input>

            <ion-textarea label="Instructions" 
                labelPlacement="floating" 
                fill="solid" 
                placeholder="How to cook"
                :value="mealInstruction"
                @input="event => mealInstruction = event.target.value"
                :style="`--highlight-color-focused: var(--ion-color-new)`"
            >
            </ion-textarea>

            <ion-button type="submit">
            <ion-icon :icon="star"></ion-icon>
                Submit
            </ion-button>
        </form>
    </div>
</template>

<script setup>
import { useTaskStore } from '../stores/index';
import { ref } from 'vue'
import { IonButton, IonIcon, IonTextarea, IonInput } from '@ionic/vue';
import { connectFirestoreEmulator } from 'firebase/firestore';
const taskStore = useTaskStore()
const displayThumb = ref('')
// data input
const thumbUrl = ref('')
const mealCategories = ref([])
const mealName = ref('')
const mealInstruction = ref('')
const error = ref('')
const handleThumbUrl = ((event)=>{
    if(event.target.value.match('^(http|https|www).*.'))
    {
        thumbUrl.value = event.target.value
        setTimeout(()=>{
            displayThumb.value = thumbUrl.value
        },2000)
    }
})
const customFormatter = (inputLength, maxLength) => {
  return `${maxLength - inputLength} characters remaining`;
};
const handleSubmit = async()=>{
    const newMeal = {
        idMeal:Math.floor(Math.random()* 1000),
        strInstructions: mealInstruction.value,
        strCategories: mealCategories.value,
        strMeal:mealName.value,
        strMealThumb: thumbUrl.value
    }
     await taskStore.addMeal(newMeal).then(res=> {
        console.log(res)
     })
     console.log(error.value)
}
</script>

<style scoped>
:host(.button-solid){
    --background: #f59e0b ;
}
</style>