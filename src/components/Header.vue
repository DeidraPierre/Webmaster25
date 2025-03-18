<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class = "navbar">
    <div class = "logo-image">
      <RouterLink to = "/">
        <img id = "logo" src = '@/assets/logo1.png' />
      </RouterLink>
      <RouterLink to = "/">
        <img id = "logo2" src = "@/assets/logo2.png"/>
      </RouterLink>
    </div>
    <div class = "buttons">
      <RouterLink to = "/menu">Menu</RouterLink>
      <RouterLink to = "/contact">Contact Us</RouterLink>
      <RouterLink to = "/about">About Us</RouterLink>
      <RouterLink to = "/order">Order</RouterLink>
    </div>
  </div>
</template>

<style>
.navbar
{
    background-color:#FFECB3;
    position: relative;
    overflow: hidden;
}

.logo-image
{
    display:block;
    overflow: visible;
    float:left;
    padding-top:10px;
    padding-left:10px;
}
</style>
