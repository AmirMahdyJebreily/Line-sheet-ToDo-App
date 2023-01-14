<script setup>
import { RouterView } from "vue-router";
import HeaderSection from './components/App/HeaderSection.vue'
import { provide, inject, onMounted } from "vue";


const storageKey = inject("STORAGE_KEY");

let data;


onMounted(() => {
  if (localStorage.getItem(storageKey) !== null) {
    data = JSON.parse(localStorage.getItem(storageKey))
  }
  else {
    localStorage.setItem(storageKey, JSON.stringify({
      'lineSheets': {
        '0': {
          name:'lineSheet1',
          Todos: [
            {
              id: 0,
              title: 'Some works to do...',
              checked: false,
              addonAttrs: [
                {
                  name: 'details',
                  details: 'this is test...'
                }
              ]
            }
          ]
        }
      }
    }));
    data = JSON.parse(localStorage.getItem(storageKey));
  }
});

provide('STORAGE_DATA', data);


</script>

<template>
  <header>
    <HeaderSection />
  </header>

  <RouterView />

  {{ data }}
</template>
