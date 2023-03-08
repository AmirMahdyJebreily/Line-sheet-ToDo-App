<script setup>
import { ref } from 'vue';
import Checkbox from './Utils/Checkbox.vue';


const props = defineProps({
    Id: Number,
    Value: String,
    Chacked: Boolean
})

const inputText = ref(props.Value);

</script>

<template>
    <div class="flex items-stretch justify-start font-mono w-full px-4">
        <Checkbox :Checked="props.Chacked"/>
        <span class="opacity-50 pl-4 pr-2 w-[65.59px]">{{props.Id}}</span>
        <input v-model="inputText" class="bg-transparent outline-none border-none w-full h-full px-3 opacity-75" type="text"
            @keypress.enter="$emit('enter', inputText.value)" />
    </div>
</template>