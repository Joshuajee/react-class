<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

</script>

<template>

    <h1>Home Page</h1>

    <button @click="router.push('/about')">Go About</button>
   

</template>