<script setup>
import { defineProps, ref, watch, computed } from 'vue';
import Sheeticon from '../../../icons/Sheeticon.vue';
import DeleteSheeticon from '../../../icons/DeleteSheetIcon.vue';
import IconButtonsm from '../../Utils/IconButtonsm.vue';
import { useRouter, useRoute } from 'vue-router'
import { setSelectedTab } from '../../../../scripts/LinesManager'

const router = useRouter()
const route = useRoute()
const props = defineProps({
    tabId: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});

const mainTagClasses = computed(() => {
    if (activity.value) {
        return "bg-blue-100/5 flex items-center justify-center pr-3 pl-2 py-3 gap-2 hover:bg-gray-400/20 w-full"
    }
    else {
        return "flex items-center justify-center pr-3 pl-2 py-3 font-thin gap-2 bg-zinc-900/50 text-gray-400 hover:text-gray-300 hover:bg-gray-400/20 transition-colors duration-200 w-full"
    }
})

const activity = ref(parseInt(route.params.id) === props.tabId);

function onClick() {
    setSelectedTab(props.tabId);
    router.replace({ name: 'home', params: { id: props.tabId + '' } })
}

watch(route.params.id, (newVal) => {
    activity.value = parseInt(route.params.id) === props.tabId 
})

</script>

<template>
    <div @click="onClick()" :title="props.title" :class="mainTagClasses" class="select-none">
        <div class="flex justify-center items-center gap-1">
            <span
                :class="(activity.value) ? 'h-5 w-1 bg-gray-200/80 rounded-full m-auto' : 'h-5 w-1 bg-zinc-900/10 rounded-full m-auto'"></span>
            <Sheeticon />
        </div>
        <div class="flex items-center justify-between gap-4 w-full">
            <span class="line-clamp-1 break-all">
                {{ props.title }}
            </span>
            <IconButtonsm title="Delete this linesheet">
                <DeleteSheeticon />
            </IconButtonsm>
        </div>
    </div>
</template>