<template>
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white-500 mb-3 shadow-lg">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <router-link :to="{name:'HomePage'}" class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-amber-500" href="#pablo">
          <img :src="'/public/img/logo.png'" alt="logo-pwa-foundation-project" class="h-6 w-16">
        </router-link>
        <button @click="toggleNavbar" class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-amber-500 block lg:hidden outline-none focus:outline-none" type="button">
          <span class="block relative w-6 h-px rounded-sm bg-white"></span>
          <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        </button>
      </div>
      <div v-if="showMenu" class="lg:flex flex-grow items-center" style="transition: all 0.5;" id="example-navbar-warning">
        <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li class="nav-item">
            <router-link :to="{name:'WorkerList'}" class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-amber-500 hover:opacity-75" href="#pablo">
              <i class="text-lg mr-2 fa-solid fa-user"></i> 
              About app
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name:'AddMeal' }" class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-amber-500 hover:opacity-75" href="#pablo">
              <i class="text-lg fa-solid fa-plus"></i>
              <span class="ml-2">Add Meal</span>
            </router-link>
          </li>
          
        </ul>
        
        <div class="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto">
          <div class="flex">
            <span class="font-normal leading-snug flex text-center white-space-no-wrap border border-solid hover:border-amber-500 border-amber-600 rounded-full text-sm bg-white-100 items-center rounded-r-none pl-2 py-1 text-amber-600 border-r-0 placeholder-white-300">
              <i class="fas fa-search"></i>
            </span>
          </div>
          <input type="text" class="px-2 py-1 h-8 border border-solid  border-amber-600 rounded-full text-sm leading-snug  shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 " placeholder="Search white" />
        </div>
      </div>
    </div>
  </nav>
  </template>
  <script setup>
  import { ref, onMounted } from 'vue'
    const logoUrl = ref(process.env.ASSET_URL + "/logo.png")
    const showMenu = ref(true)
    const toggleNavbar = ()=>{
      showMenu.value = !showMenu.value;
    }
    onMounted(()=>{
      console.log(logoUrl.value)
    })
  </script>
  <style scoped>
  .toggle__button {
    vertical-align: middle;
    user-select: none;
    cursor: pointer;
}
.toggle__button input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    width: 1px;
    height: 1px;
}
.toggle__button .toggle__switch {
    display:inline-block;
    height:12px;
    border-radius:6px;
    width:40px;
    background: #BFCBD9;
    box-shadow: inset 0 0 1px #BFCBD9;
    position:relative;
    margin-left: 10px;
    transition: all .25s;
}

.toggle__button .toggle__switch::after, 
.toggle__button .toggle__switch::before {
    content: "";
    position: absolute;
    display: block;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    left: 0;
    top: -3px;
    transform: translateX(0);
    transition: all .25s cubic-bezier(.5, -.6, .5, 1.6);
}
.toggle__button .toggle__switch::after {
    background: #4D4D4D;
    box-shadow: 0 0 1px #666;
}
.toggle__button .toggle__switch::before {
    background: #4D4D4D;
    box-shadow: 0 0 0 3px rgba(0,0,0,0.1);
    opacity:0;
}
  </style>