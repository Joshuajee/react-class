<script setup>
import { ref } from 'vue';

const username = ref("")
const password = ref("")



</script>

<template>

    <p>{{ username }}</p>

    <p> {{password}} </p>

    <input v-model="username" />

    <input v-model="password" />

    

</template>

<style scoped>
input {
    display: block;
}
</style>
