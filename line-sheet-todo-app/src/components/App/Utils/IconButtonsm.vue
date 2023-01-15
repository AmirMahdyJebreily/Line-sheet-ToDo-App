<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: String
})

</script>

<template>
    <button
        class="flex items-center justify-center bg-stone-900/20 border border-gray-400/30 rounded-md p-1 hover:border-gray-400/50 hover:bg-stone-800/40 transition-colors duration-200 relative"
        :title="props.title"
        >
        <slot />
    </button>
</template>