<script setup>
import { ref } from 'vue'

const list =  ["Apple", "Orange", "Banana", "Mango"]

</script>

<template>  

    <button v-on:mouseenter="console.log('enter')" @mouseleave="console.log('leave')">
        My Button
    </button>

</template>

<style scoped>
  .active {
    background-color: blue;
  }

  .has-error {
    background-color: red;
  }

</style>
