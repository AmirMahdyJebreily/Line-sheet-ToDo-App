<script setup>
import { RouterView } from "vue-router";
import HeaderSection from './components/App/HeaderSection.vue'
import { inject, onMounted } from "vue";


const storageKey = inject("STORAGE_KEY");


onMounted(() => {
  if (localStorage.getItem(storageKey) === null) {
    localStorage.setItem(storageKey, JSON.stringify({
      'lineSheets': [
        {
          id: 0,
          name: 'lineSheet1',
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
        },
        {
          id: 1,
          name: 'lineSheet2',
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
      ]
    }));
  }
});



</script>

<template>
  <header>
    <HeaderSection />
  </header>

  <RouterView />
</template>
