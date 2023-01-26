<script setup>
import Tabs from '../components/App/Home/Tabs.vue';
import Checkbox from '../components/App/Home/TodoLines/Utils/Checkbox.vue';


</script>

<template>
  <main class="w-full h-full flex flex-col gap-0 items-start justify-center p-4 pb-28">
    <div class="w-full bg-gradient-to-tr from-main to-white/5 via-main/20 h-full flex justify-center items-stretch rounded-lg m-auto shadow-sm shadow-gray-50/10 overflow-hidden p-2 gap-2">
      <Tabs />
      <section class="flex-1 bg-gray-900/20 border border-white/10 rounded-lg font-mono text-gray-300/80 overflow-hidden">

        <div class="flex items-stretch justify-start text-sm">

          <div class="bg-black/20 flex items-center justify-start h-full pl-2 py-0.5">
            <Checkbox />
            <span class="opacity-50 pl-4 pr-2 w-[65.59px]">1</span>
          </div>

          <div class="flex items-center bg-gray-500/5 opacity-90 w-full">
            <input type="text" class="bg-transparent outline-none border-none w-full h-full px-3"/>
          </div>

        </div>

        <div class="flex items-stretch justify-start text-sm">

          <div class="bg-black/20 flex items-center justify-start h-full pl-2 py-0.5">
            <Checkbox />
            <span class="opacity-50 pl-4 pr-2 w-[65.59px]">2</span>
          </div>

          <div class="flex items-center bg-gray-500/5 opacity-90 w-full">
            <input type="text" class="bg-transparent outline-none border-none w-full h-full px-3"/>
          </div>

        </div>


        <div class="flex items-stretch justify-start text-sm">

          <div class="bg-black/20 flex items-center justify-start h-full pl-2 py-0.5">
            <Checkbox />
            <span class="opacity-50 pl-4 pr-2 w-[65.59px]">3</span>
          </div>

          <div class="flex items-center bg-gray-500/5 opacity-90 w-full">
            <input type="text" class="bg-transparent outline-none border-none w-full h-full px-3"/>
          </div>

        </div>

      </section>
    </div>
  </main>
</template>
