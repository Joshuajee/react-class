<script setup>
import { RouterView, RouterLink } from  "vue-router"

</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> 
    <RouterLink to="/about">About</RouterLink> 
    <RouterLink to="/contact">Contact</RouterLink> 
    <RouterLink to="/user/Favour">User</RouterLink> 
    <RouterLink to="/app">App</RouterLink> 
    <router-link to="/ref">Ref</router-link>
    <router-link to="/reactive">Reactive</router-link>


  </nav>
  <RouterView />
</template>


<style scoped>
  nav {
    display: flex;
    gap: 20px;
  }
</style>
