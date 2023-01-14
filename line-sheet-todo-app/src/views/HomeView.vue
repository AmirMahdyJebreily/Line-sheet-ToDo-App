<script setup>
import Tabs from '../components/App/Home/Tabs.vue';


</script>

<template>
  <main class="w-full h-full flex flex-col gap-0 items-start justify-center p-4 pb-20">
    <div class="w-full bg-main h-full rounded-lg m-auto shadow-sm shadow-gray-50/10 overflow-hidden">
      <Tabs />
      <section class="p-2">
        <p class="text-gray-300/80 px-4 text-sm">some lines to do</p>
      </section>
    </div>
  </main>
</template>
