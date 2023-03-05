<script setup>
import { reactive } from 'vue'

const checkBoxStateLogicManager = reactive({
    state: 'deactive',
    changeState() {
        this.state = (this.state === 'deactive')? 'active' : 'deactive'
    },
    
})
</script>

<template>
    <button class="justify-center items-center flex-none bg-black/30 w-[1.4rem] h-[1.4rem] max-h-[1.4rem] inline-flex rounded-sm border border-white/10 select-none hover:bg-zinc-900 transition-colors duration-300" @click="checkBoxStateLogicManager.changeState()">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 opacity-95" v-show="checkBoxStateLogicManager.state === 'active'">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
    </button>
</template>