<script setup>
import TopbarIcon from '../icons/TopbarIcon.vue'
import IconButton from './Utils/IconButton.vue'
</script>

<template>
    <div class="flex justify-between items-stretch px-6 py-2 w-full bg-gray-100/5">
        <div class="flex justify-start items-center gap-2">
            <TopbarIcon />
            <div class="flex flex-col justify-center items-start gap-0">
                <h1 class="sm:text-xl text-lg text-gray-300">
                    Line sheet todo app <span class="">>_</span>
                </h1>
                <h2 class="text-xs text-gray-400 italic hidden sm:block">.:: Here your tasks are nothing but a <span
                        class="text-gray-400/80">simple line</span> to which you add more things...</h2>
            </div>
        </div>
        <div class="flex justify-center items-center gap-2">
            <IconButton title="Save">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                </svg>
            </IconButton>
        </div>
    </div>
</template>