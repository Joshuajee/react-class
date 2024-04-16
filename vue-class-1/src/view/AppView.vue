<script setup>
import { ref } from 'vue';
import HelloWorld from '../components/HelloWorld.vue'
import MyComponent from '../components/MyComponent.vue'
import Forms from '../components/Forms.vue'
import Emiiter from '../components/Emiiter.vue'
const ten =  ref(10)

const sub = (value) => {
  console.log(value)
}
</script>

<template>
  <Emiiter :ten="ten" @favour="ten++" @submit="sub" />
  <Forms />
  <HelloWorld msg="Hello, World!" :head="10" />
  <MyComponent />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
