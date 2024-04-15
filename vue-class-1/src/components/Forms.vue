<script setup>
import { ref } from 'vue'

const text = ref("")
const password = ref("")
const selected = ref("")
const checked = ref(false)


</script>

<template>

  <input v-model="text" />

  <input type="password" v-model="password" />

  <input type="checkbox" v-model="checked" />

  <div>Selected: {{ selected }}</div>

    <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    </select>

  <button @click="console.log(text, password, checked, selected)">Show</button>

</template>

<style scoped>
  .active {
    background-color: blue;
  }

  .has-error {
    background-color: red;
  }

</style>
