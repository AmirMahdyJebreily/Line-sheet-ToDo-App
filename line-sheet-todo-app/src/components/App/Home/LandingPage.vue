<script setup>
import TopbarIcon from '../../icons/TopbarIcon.vue';
</script>

<template>
    <TopbarIcon />
    <div class="text-sm text-center py-1 px-6 text-gray-400">
        <!-- H1 tag -->
        <div class="sm:text-xl text-lg text-gray-300">
            <span class="select-none pr-2">&lt;<span class="text-teal-600">h1</span>&gt;</span>
            <h1 class="inline-block"> Line sheet todo app </h1>
            <span class="select-none pl-2">&lt;/<span class="text-teal-600">h1</span>&gt;</span>
        </div>
        <!-- H2 tag -->
        <div class="text-xs text-gray-400 italic hidden sm:block">
            <span class="select-none pr-2">&lt;<span class="text-teal-600">h2</span>&gt;</span>
            <h2 class="inline-block"> Here your tasks are nothing but a simple line to which you add more things </h2>
            <span class="select-none pl-2">&lt;/<span class="text-teal-600">h2</span>&gt;</span>
        </div>
    </div>
</template>