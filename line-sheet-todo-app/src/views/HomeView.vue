<script setup>
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import Tabs from '../components/App/Home/Tabs.vue';
import Line from '../components/App/Home/TodoLines/Line.vue';
import { getAllToDoLines, currentLineSheet, setSelectedTab } from '../scripts/LinesManager';
import TopbarIcon from "../components/icons/TopbarIcon.vue"
import LandingPage from '../components/App/Home/LandingPage.vue';

const route = useRoute();

const Lines = ref([]);
const uiKey = ref(0)

if (currentLineSheet.value === -1) {
  setSelectedTab(route.params.id)
}

watch(currentLineSheet, () => {

  Lines.value = getAllToDoLines(currentLineSheet.value);;
  refUI()
})

function enterHandel(args) {
  console.log("enter was pressed and get value : " + args);
}

function refUI() {
  uiKey.value = (uiKey.value == 0) ? 1 : 0
}

</script>

<template>
  <main class="w-full h-full flex flex-col gap-0 items-start justify-center p-4 pb-28">
    <div
      class="w-full bg-gradient-to-tr from-main to-white/5 via-main/20 h-full flex justify-center items-stretch rounded-lg m-auto shadow-sm shadow-gray-50/10 overflow-hidden p-2 gap-2">
      <Tabs />
      <section
        class="flex-1 bg-gray-900/20 border border-white/10 rounded-lg font-mono text-gray-300/80 overflow-hidden py-2"
        :key="uiKey">

        <!-- lines list -->
        <div v-if="Lines.length > 0" class="flex flex-col items-start justify-start pb-2">
          <Line v-for="line in Lines" :Id="line.id" :Value="line.title" :Chacked="line.checked" @enter="enterHandel" />
        </div>

        <div v-else class="flex flex-col justify-center items-center w-full h-full p-4">
          <LandingPage />
        </div>

        <!-- <div class="w-full h-full flex items-start justify-start text px-4 bg-black/20">
                    <input class="bg-transparent outline-none border-none w-full align-middle px-3 opacity-75" type="text" />
                  </div> -->

      </section>
    </div>
  </main>
</template>
