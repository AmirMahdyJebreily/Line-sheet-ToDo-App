<script setup>
import Tab from './Tabs/Tab.vue';
import { ref } from 'vue';
import { GetAllLineSheets } from '../../../scripts/LinesManager';

const componentKey = ref(0);

function forceRerender() {
    if (componentKey.value == 0) {
        componentKey.value += 1;
    }
    else {
        componentKey.value = 0;
    }
};

const linesheets = GetAllLineSheets();

</script>

<template>
    <div class="flex flex-col items-stretch justify-start scroll-py-4 h-full overflow-y-auto scroll-bar w-72 bg-gray-900/20 divide-y divide-white/5 border border-white/10 rounded-lg"
        @click="forceRerender()">
        <Tab v-for="lineSheet in linesheets" :tabId="lineSheet.id" :title="lineSheet.name" :key="componentKey" />
    </div>
</template>