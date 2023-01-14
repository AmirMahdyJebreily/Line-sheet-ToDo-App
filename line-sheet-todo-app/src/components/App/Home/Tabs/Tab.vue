<script setup>
import { defineProps,reactive } from 'vue';
import Sheeticon from '../../../icons/Sheeticon.vue';
import CloseSheeticon from '../../../icons/CloseSheeticon.vue';
import { useRouter, useRoute, RouterLink } from 'vue-router'

const router = useRouter()
const route = useRoute()
const props = defineProps({
    tabId: {
        type: String,
        required: true
    }
});

const activity = reactive({active : route.params.id == props.tabId });

</script>

<template>
    <template v-if="(activity.active == true)">
        <RouterLink :to="(('/') + props.tabId)">
            <div
                class="bg-main flex items-center justify-center px-3 py-2 text-sm font-thin gap-2 hover:bg-gray-400/20 transition-colors duration-200 border-t border-gray-50/10 h-full">
                <Sheeticon />
                <div class="flex items-center justify-center gap-4">
                    <span class="line-clamp-1 break-all min-w-[2.5rem]">
                        <slot />
                    </span>
                    <button
                        class="p-[1px] rounded-full bg-gray-100/10 hover:bg-gray-100/5 transition-colors duration-300">
                        <CloseSheeticon />
                    </button>
                </div>
            </div>
        </RouterLink>
    </template>
    <template v-else>
        <RouterLink :to="(('/') + props.tabId)">
            <div 
                class="flex items-center justify-center px-3 py-2 text-sm font-thin gap-2 text-gray-400 hover:text-gray-300 hover:bg-gray-400/20 transition-colors duration-200 h-full">
                <Sheeticon />
                <div class="items-center justify-center gap-4 sm:flex hidden">
                    <span class="line-clamp-1 break-all min-w-[2.49rem]">
                        <slot />
                    </span>
                    <button
                        class="p-[1px] rounded-full bg-gray-100/10 hover:bg-gray-100/5 transition-colors duration-300">
                        <CloseSheeticon />
                    </button>
                </div>
            </div>
        </RouterLink>
    </template>
</template>