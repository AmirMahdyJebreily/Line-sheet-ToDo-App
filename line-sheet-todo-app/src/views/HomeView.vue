<script setup>
import Tabs from '../components/App/Home/Tabs.vue';
import Checkbox from '../components/App/Home/TodoLines/Utils/Checkbox.vue';


</script>

<template>
  <main class="w-full h-full flex flex-col gap-0 items-start justify-center p-4 pb-28">
    <div
      class="w-full bg-gradient-to-tr from-main to-white/5 via-main/20 h-full flex justify-center items-stretch rounded-lg m-auto shadow-sm shadow-gray-50/10 overflow-hidden p-2 gap-2">
      <Tabs />
      <section
        class="flex-1 bg-gray-900/20 border border-white/10 rounded-lg font-mono text-gray-300/80 overflow-hidden py-2">

        <!-- lines list -->
        <div class="flex flex-col items-start justify-start pb-2">

          <div class="flex items-center justify-start text px-4">

            <Checkbox />
            <span class="opacity-50 pl-4 pr-2 w-[65.59px]">1</span>
            <p class="bg-transparent outline-none border-none w-full h-full px-3 opacity-75"> Do something....</p>
          </div>
        </div>

        <div class="w-full h-full flex items-start justify-start text px-4 bg-black/20">
          <input class="bg-transparent outline-none border-none w-full align-middle px-3 opacity-75" type="text" />
        </div>


      </section>
    </div>
  </main>
</template>
