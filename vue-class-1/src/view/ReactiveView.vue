<script setup>
import { reactive } from 'vue';

const store = reactive({
    password: "",
    username: ""
})



</script>

<template>

    <p>{{ store.username }}</p>

    <p> {{store.password}} </p>

    <input v-model="store.username" />

    <input v-model="store.password" />
    

</template>

<style scoped>
input {
    display: block;
}
</style>
