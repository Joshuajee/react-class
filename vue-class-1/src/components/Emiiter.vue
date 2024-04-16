<script setup>
import { ref } from 'vue'

defineProps({
    ten: Number
})

const text = ref("")

</script>

<template>  

    <button @click="$emit('favour')">
        Emit Event {{ ten }}
    </button>

    <input v-model="text" />

    <button @click="$emit('submit', text)">Submit</button>


</template>

<style scoped>

* {
    display: block;
}


</style>
