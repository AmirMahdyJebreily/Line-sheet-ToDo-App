<script setup>
import { useSlots, useAttrs } from 'vue'


const slot = useSlots()
const props = defineProps({
    title: {
        default: '%notit%',
        type: String,
        required: false
    }

});

</script>

<template>
    <div class="hover-badget hover-badget-bottom-right">
        <h3 v-if="props.title != '%notit%'" class="text-amber-400 text-base pb-1 not-italic flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <span>{{ props.title }}</span>
        </h3>
        <p :class="((props.title != '%notit%') ? 'pl-2 pr-1 w-56' : '') + ''">
            <slot />
        </p>
    </div>
</template>