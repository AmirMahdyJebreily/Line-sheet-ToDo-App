<script setup>
import Tabs from '../components/App/Home/Tabs.vue';


</script>

<template>
  <main class="w-full h-full flex flex-col gap-0 items-start justify-center p-4 pb-28">
    <div class="w-full bg-gradient-to-tr from-main to-white/5 via-main/20 h-full flex justify-center items-stretch rounded-lg m-auto shadow-sm shadow-gray-50/10 overflow-hidden p-2 gap-2">
      <Tabs />
      <section class="p-2 flex-1 bg-gray-900/20 border border-white/10 rounded-lg">
        <p class="text-gray-300/80 px-4 text-sm">some lines to do</p>
      </section>
    </div>
  </main>
</template>
