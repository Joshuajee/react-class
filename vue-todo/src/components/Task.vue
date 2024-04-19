<script setup>

defineProps({
    name: String,
    index: Number
})

</script>

<template>

    <div class="task">

        <h3>{{name}}</h3>

        <button @click="$emit('onDelete', index)">Delete</button>


    </div>

</template>

<style scoped>

.task {
    border: 1px solid gray;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
}

</style>