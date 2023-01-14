<script setup>
import Hoverbadget from './IconButton.vue';
</script>

<template>
    <button class="flex items-center justify-center bg-gray-900/30 border border-gray-400/30 rounded-lg p-2 hover:border-gray-400/50 hover:bg-gray-800/40 transition-colors duration-200 relative">
        <slot />
    </button>
    <div class="hover-badget hover-badget-bottom-right">
        <p>
            
        </p>
    </div>
</template>