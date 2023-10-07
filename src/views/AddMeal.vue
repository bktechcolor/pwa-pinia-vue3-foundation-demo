<template>
  <div class="max-w-[800px] mx-auto h-[calc(100vh-185px)] flex flex-col justify-center bg-white px-8 py-4 rounded-lg relative">
    <h2 class="text-amber-500 my-2 uppercase mt-8">
      <strong>Adding new meal for your order list</strong>
    </h2>
    <div
      id="message"
      v-bind="message ? handleError() :''"
      class=""
    />
    <form
      class="mt4 mb-8"
      @submit.prevent="handleSubmit"
    >
      <ion-input
        label="Meal Name(*)" 
        label-placement="floating" 
        :counter="true" 
        maxlength="200"
        :value="mealName"
        :style="`--highlight-color-focused: var(--ion-color-new)`"
        @input="event=> mealName = event.target.value"
      />

      <ion-input
        id="custom-input"
        label="Categories(*)"
        label-placement="floating"
        :counter="true"
        maxlength="200"
        :counter-formatter="customFormatter"
        :style="`--highlight-color-focused: var(--ion-color-new)`"
        :value="mealCategory"
        @input="handleMealCategories($event)"
      />
      <div
        v-if="mealCategories.length"
        class="categories-input "
      >
        <ul>
          <li
            v-for="(item,index) of mealCategories"
            :key="index"
            class="category-item inline-block px-2 py-1 bg-gray-500 text-white rounded-md text-sm mx-1 my-1"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <ion-input
        label="Thumb url(*)" 
        label-placement="floating" 
        :counter="true"
        :value="thumbUrl"
        maxlength="500"
        :style="`--highlight-color-focused: var(--ion-color-new)`"
        @input="handleThumbUrl($event)"
      />
      <div class="upload-meal-image w-full right align-end mb-4">
        <img
          :src="displayThumb"
          alt=""
          class="max-h-[250px]"
        >
      </div>

      <ion-textarea
        label="Instructions(*)" 
        label-placement="floating" 
        fill="solid" 
        placeholder="How to cook"
        :value="mealInstruction"
        :style="`--highlight-color-focused: var(--ion-color-new)`"
        @input="event => mealInstruction = event.target.value"
      />

      <ion-button
        type="submit"
        class="mt-4"
      >
        <ion-icon :icon="star" />
        Submit
      </ion-button>
    </form>
  </div>
</template>

<script setup>
import { useTaskStore } from '../stores/index';
import { ref } from 'vue'
import { IonButton, IonIcon, IonTextarea, IonInput } from '@ionic/vue';
const taskStore = useTaskStore()
const displayThumb = ref('')
// data input
const thumbUrl = ref('')
const mealCategories = ref([])
const mealCategory = ref('')
const mealName = ref('')
const mealInstruction = ref('')
const message = ref('')
const handleError = ()=>{
    var messageBtn = document.getElementById('message')
    if(message.value ==='error'){
        messageBtn.classList.add('error');
        messageBtn.innerText = `These field ares required`
        messageBtn.style.opacity = '1'
        messageBtn.style.transition = 'all 0.2s ease-in'
        setTimeout(()=>{
            messageBtn.classList.remove('error');
            message.value='';
            messageBtn.innerText = ``
        },1300);
    }else{
        messageBtn.classList.add('success');
        messageBtn.innerText = `The new meal was added successfully`
        messageBtn.style.opacity = '1'
        messageBtn.style.transition = 'all 0.2s ease-in'
        setTimeout(()=>{
            messageBtn.classList.remove('success');
            messageBtn.innerText = ``
            message.value='';
        },1300);
    }
    
    
}
const handleMealCategories = ((event)=>{
    mealCategory.value = event.target.value
    console.log(mealCategory.value)
    if(event.target.value.length >0 && event.target.value.includes(',')){
        mealCategories.value.push(event.target.value.slice(0, -1))
        console.log(event.target.value)
        mealCategory.value = '';
        return
    }
    if( event.target.length >0 && event.keyCode === 13){
        mealCategories.value.push(event.target.value.slice(0, -1))
        console.log(event.target.value)
        mealCategory.value = '';
        return
    }
})
const handleThumbUrl = ((event)=>{
    if(event.target.value.match('^(http|https|www)'))
    {
        thumbUrl.value = event.target.value
        setTimeout(()=>{
            displayThumb.value = thumbUrl.value
        },1000)
    }
})
const customFormatter = (inputLength, maxLength) => {
  return `${maxLength - inputLength} characters remaining`;
};
const handleSubmit = async()=>{
    if( !mealInstruction.value || mealCategories.value.length === 0 || !mealName.value || !thumbUrl.value){
        console.log('instruction' + mealInstruction.value)
        console.log('mealcategory' + mealCategories.value.length)
        console.log('mealName' + mealName.value)
        console.log('thumb url' + displayThumb.value)
        console.log('error happened')
        message.value = 'error'
        return null
    }
    var d = new Date();
    var day = d.getDay();
    var hr = d.getHours();
    var min = d.getMinutes();
    if (min < 10) {
        min = "0" + min;
    }
    var ampm = "am";
    if( hr > 12 ) {
        hr -= 12;
        ampm = "pm";
    }
    var date = d.getDate();
    var month = d.getMonth()+1;
    var year = d.getFullYear();
    const newMeal = {
        idMeal:Math.floor(Math.random()* 1000),
        strInstructions: mealInstruction.value,
        strCategories: mealCategories.value,
        strMeal:mealName.value,
        strMealThumb: thumbUrl.value,
        strTime:  hr + ":" + min + ampm + " " + date + "/" + month + "/" + year
    }
     await taskStore.addMealAsync(newMeal)
     message.value='success'
     console.log(message.value)
}
</script>

<style scoped>
#message{
    visibility: hidden;
}
#message.error{
    height: 50px;
    width: auto;
    padding: 10px 3px;
    opacity: 0.5;
    text-align: center;
    color: white;
    margin-left: 10px;
    margin-right: 10px;
    background-color: #EE4546;
    visibility: visible;
    display: absolute;
    top: 0;
    left: 0;
}
#message.success{
    height: 50px;
    width: auto;
    padding: 10px 3px;
    opacity: 0.5;
    text-align: center;
    visibility: visible;
    color: white;
    margin-left: 10px;
    margin-right: 10px;
    background-color: #16A34A;
    display: absolute;
    top: 0;
    left: 0;
}
:host(.button-solid){
--background:#fb8c00 !important;
--color:var(--ion-color-primary-contrast,#fff) !important;
}
</style>