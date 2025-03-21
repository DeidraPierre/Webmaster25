<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { ref } from 'vue';

import lunchPdf from '@/assets/lunch_vegan.pdf';
import dinnerPdf from '@/assets/vegannnnnnnnn.pdf';

// menu choice
const menuIndex = ref(0);

function setMenuIndex(index: number) {
    menuIndex.value = index;
}
</script>

<template>
  <header>
    <nav>
      <Header color="#FFECB3" />
    </nav>
  </header>
  <body>
    <!-- TO-DO: Make it so the buttons alternate which pdf shows up -->
    <!-- Menu Buttons -->
    <h1 id = "menus">Our Menus</h1>
    <hr>
    <p id = "menud">
      Take a look at our incredible cuisine and healthy vegan options! Each menu is divided into sections of their most dominant elements
      to showcase our commitment to the planet.
    </p>
    <hr>
    <div class = "button-container">
      <button type = "button" @click = "setMenuIndex(0)">Lunch Menu</button>
      <button type = "button" @click = "setMenuIndex(1)">Dinner Menu</button>
    </div>
    <br>
    <embed
      :src="lunchPdf"
      width="640" height="480" allow="autoplay"
      v-show = "menuIndex == 0"
    />
    <embed
      :src="dinnerPdf"
      width="640" height="480" allow="autoplay"
      v-show = "menuIndex == 1"
    />
  </body>
  <Footer color="#CC7711" />
</template>

<style>
#menus{
  text-align: center;
  font-size: 50px;
  font-weight: 400;
}
#menud
{
  width: 40%;
  text-align:center;
  margin: auto;
}
hr{
  width: 50%;
  margin-bottom: 20px;
}
.button-container
{
  display:flex;
  gap: 200px;
  justify-content: center;
}
button
{
  padding: 10px 20px;
  background-color: #FFECB3;
  color: #B60;
  cursor: pointer;
  font-size: 20px;
  font-family: Inknut Antiqua;
}

button:hover
{
  background-color: #4a4a4a;
  color: white;
}
embed
{
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
</style>
