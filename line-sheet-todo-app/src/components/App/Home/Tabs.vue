<script setup>
import Tab from './Tabs/Tab.vue';
import { ref } from 'vue';
const componentKey = ref(0);

const forceRerender = () => {
    if (componentKey.value == 0) {
        componentKey.value += 1;
    }
    else {
        componentKey.value = 0;
    }
};

</script>

<template>
    <div class="flex items-stretch justify-start scroll-px-4 w-full overflow-x-auto scroll-bar-horiz h-[3.1rem] bg-black/20 divide-x divide-black/20"
        @click="forceRerender()">
        <Tab tabId="1" :key="componentKey">
            tab1
        </Tab>
        <Tab tabId="2" :key="componentKey">
            tab2
        </Tab>
        <Tab tabId="3" :key="componentKey">
            tab3
        </Tab>
        <Tab tabId="4" :key="componentKey">
            tab4
        </Tab>
    </div>
</template>