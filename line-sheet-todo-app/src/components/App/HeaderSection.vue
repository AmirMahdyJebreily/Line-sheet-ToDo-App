<script setup>
import TopbarIcon from '../icons/TopbarIcon.vue'
</script>

<template>
    <div class="flex justify-between px-6 py-2 w-full bg-gray-100/5">
        <div class="flex justify-start items-center gap-2">
            <TopbarIcon />
            <div class="flex flex-col justify-center items-start gap-0">
                <h1 class="text-xl text-gray-300">
                    Line sheet todo app <span class="">>_</span>
                </h1>
                <h2 class="text-xs text-gray-400 italic">.:: Here your tasks are nothing but a <span class="text-gray-500">simple line</span> to which you add more things...</h2>
            </div>
        </div>
    </div>
</template>