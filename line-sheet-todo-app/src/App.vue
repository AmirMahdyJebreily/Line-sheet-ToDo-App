<script setup>
import { RouterView } from "vue-router";
import HeaderSection from './components/App/HeaderSection.vue'
import { onMounted } from "vue";
import { StartStoring } from "./scripts/LinesManager"

onMounted(() => {
  StartStoring();
});



</script>

<template>
  <header class="px-4 pt-4">
    <HeaderSection />
  </header>

  <RouterView />
</template>
