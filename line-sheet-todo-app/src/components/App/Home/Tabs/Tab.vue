<script setup>
import { defineProps, reactive } from 'vue';
import Sheeticon from '../../../icons/Sheeticon.vue';
import DeleteSheeticon from '../../../icons/DeleteSheetIcon.vue';
import IconButtonsm from '../../Utils/IconButtonsm.vue';
import { useRouter, useRoute, RouterLink } from 'vue-router'

const router = useRouter()
const route = useRoute()
const props = defineProps({
    tabId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});


const activity = reactive({ active: route.params.id == props.tabId });

</script>

<template>
    <template v-if="(activity.active == true)">
        <RouterLink :to="(('/') + props.tabId)" :title="props.title">
            <div
                class="bg-blue-100/5 flex items-center justify-center pr-3 pl-2 py-3 gap-2 hover:bg-gray-400/20 w-full">
                <div class=" flex justify-center items-center gap-1">
                    <span class="h-5 w-1 bg-gray-200/80 rounded-full m-auto"></span>
                    <Sheeticon />
                </div>
                <div class="flex items-center justify-between gap-4 w-full">
                    <span class="line-clamp-1 break-all">
                        {{props.title}}
                    </span>
                    <IconButtonsm title="Delete this linesheet">
                        <DeleteSheeticon />
                    </IconButtonsm>
                </div>
            </div>
        </RouterLink>
    </template>
    <template v-else>
        <RouterLink :to="(('/') + props.tabId)" :title="props.title">
            <div
                class="flex items-center justify-center pr-3 pl-2 py-3 font-thin gap-2 bg-zinc-900/50 text-gray-400 hover:text-gray-300 hover:bg-gray-400/20 transition-colors duration-200 h-full">
                <div class=" flex justify-center items-center gap-1">
                    <span class="h-5 w-1 bg-zinc-900/10 rounded-full m-auto"></span>
                    <Sheeticon />
                </div>
                <div class="items-center justify-between gap-4 flex w-full">
                    <span class="line-clamp-1 break-all">
                        {{props.title}}
                    </span>
                    <IconButtonsm title="Delete this linesheet">
                        <DeleteSheeticon />
                    </IconButtonsm>
                </div>
            </div>
        </RouterLink>
    </template>
</template>