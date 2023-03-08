<script setup>
import TopbarIcon from '../../icons/TopbarIcon.vue';
</script>

<template>
    <TopbarIcon />
    <div class="text-sm text-center py-1 px-6 text-gray-400">
        <h1 class="sm:text-xl text-lg text-gray-300">
            &lt;<span class="text-rose-400">h1</span>&gt;
            Line sheet todo app <span class="text-gray-600">>_</span>
            &lt;/<span class="text-rose-400">h1</span>&gt;
            <br />
        </h1>
        <h2 class="text-xs text-gray-400 italic hidden sm:block">
            &lt;<span class="text-rose-400">h2</span>&gt;
            Here your tasks are nothing but a simple line to which you add more things...
            &lt;/<span class="text-rose-400">h2</span>&gt;
        </h2>
    </div>
</template>