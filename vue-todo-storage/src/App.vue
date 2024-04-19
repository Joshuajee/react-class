<script setup>
import { ref } from "vue"
import Task from "./components/Task.vue"

const initalValue = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []

const todos = ref(initalValue)
const textInput = ref("")

const addTodo = () => {
  const value = textInput.value

  if (value.length < 3) {
    alert("Text should have atleast 3 characters")
    return
  }
  todos.value.push(value) 
  localStorage.setItem("todos", JSON.stringify(todos.value))
  textInput.value = ""
}

const onDelete = (index) => {
  todos.value.splice(index, 1)
  localStorage.setItem("todos", JSON.stringify(todos.value))
}

</script>

<template>

  <main>

    <h1>My Todo App</h1>

    <div class="input">
      <input v-model="textInput" placeholder="Enter Todo" /> 
      <button @click="addTodo">Add Todo</button>
    </div>

    <div class="task">
      <Task v-for="task, index in todos" :key="index" :name="task" :index="index" @onDelete="onDelete" />
    </div>

  </main>

</template>

<style scoped>

main {
  margin-top: 80px;
  background-color: white;
  color: grey;
  border-radius: 24px;
  width: 100%;
  min-width: 400px;
  padding: 20px;
}

h1 {
  text-align: center;
}

.input {
  display: flex;
  margin: 20px 0;
}

.input button {
  flex-basis: 30%;
  height: 44px;
}

input {
  height: 44px;
  flex-basis: 70%;
}



</style>
