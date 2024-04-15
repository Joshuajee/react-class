<script setup>
import { ref } from 'vue'

const isActive = ref(false)
const hasError = ref(false)

const awesome = ref(false)


</script>

<template>

  <h1 @click="isActive = !isActive" :class="{ active: isActive }"> Active </h1>

  <h1 @click="hasError = !hasError" :class="{ 'has-error': hasError }"> hasError </h1>

  <button @click="awesome = !awesome">Toggle</button>

  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>


</template>

<style scoped>
  .active {
    background-color: blue;
  }

  .has-error {
    background-color: red;
  }

</style>
