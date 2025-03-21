<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = defineProps<{
  color: string
}>()

const color = props.color;
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
      <RouterLink to = "/reference">Reference Page</RouterLink>
    </div>
  </div>
</template>

<style>
.navbar
{
    background-color: v-bind(color);
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

.buttons a
{
    float:left;
    display:block;
    text-align:center;
    color:#B60;
    font-size:32px;
    font-family: Inknut Antiqua;
    font-weight: 400;
    text-decoration: underline;
    line-height: 48px;
    word-wrap: break-word;
    padding: 20px 15px;
    margin-left: 20px;
}

.buttons a:hover{
    color:rgba(209, 115, 21, 0.342);
}
</style>
