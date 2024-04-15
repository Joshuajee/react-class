<script setup>
import { ref } from 'vue'

const list =  ["Apple", "Orange", "Banana", "Mango"]

</script>

<template>  

    <ul>
        <li v-for="item in list" :key="item">
            {{item}}
        </li>
    </ul>

</template>

<style scoped>
  .active {
    background-color: blue;
  }

  .has-error {
    background-color: red;
  }

</style>
