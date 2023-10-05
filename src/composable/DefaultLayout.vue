<template>
  <NavbarLayout />
  <main>
    <div class="max-w-[1200px] mx-auto">
      <router-view />
    </div>
  </main>
  <BottomLayout/>
</template>

<script setup>
import NavbarLayout from "../composable/NavbarLayout.vue";
import BottomLayout from "./BottomLayout.vue";
</script>