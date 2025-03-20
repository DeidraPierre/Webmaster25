<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

// scrolling
const info = useTemplateRef<HTMLDivElement>('info');

function scrollToInfo() {
    info.value?.scrollIntoView({ behavior: 'smooth' });
}

// hero carousel
const carouselIndex = ref(0);

function incrementCarouselIndex() {
    carouselIndex.value = (carouselIndex.value + 1) % 2;
}

function decrementCarouselIndex() {
    carouselIndex.value = (carouselIndex.value - 1 + 2) % 2;
}

</script>

<template>
  <header>
    <nav>
      <Header color="#FFECB3" />
    </nav>
  </header>
  <body>
    <!-- Hero Image Carousel -->
    <div class = "hero-section">
      <div id = "hero-image-container">
        <button id = "hero-image-left-arrow" @click = "decrementCarouselIndex()"></button>
        <Transition>
          <img v-if = "carouselIndex == 0" id = "hero-image" src = "@/assets/hero-fire.png">
          <img v-else-if = "carouselIndex == 1" id = "hero-image" src = "@/assets/hero-water.jpeg">
        </Transition>
        <button id = "hero-image-right-arrow" @click = "incrementCarouselIndex()"></button>
      </div>
      <button id = "content-arrow" class = "fa fa-arrow-down" @click = "scrollToInfo()"></button>
    </div>

    <!-- Information Section -->
    <div class = "info" ref = "info">
      <h3>An Unforgettable Experience Awaits</h3>
      <p id = "descript">Every dish is a unique celebration of the four elements, blending fire, water, earth, and air to create flavors that ignite the senses. The experience is truly transformative, where each bite feels like a journey through nature's most powerful forces, leaving you both satisfied and inspired.</p>
      <h3>Customer Reviews</h3>

      <!-- Reviews -->
      <div class = "container">
        <div class = "review1">
          <p>"Elemental Eatery redefines fine dining! Each dish is an artful blend of flavors and textures. Truly a next-level vegan experience!" </p>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
        </div>
        <div class = "review1">
          <p>"A luxurious dining experience with impeccable service and exquisite plant-based dishes. Every bite was a delight. Worth every penny!"</p>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
        </div>
        <div class = "review1">
          <p>"The perfect spot for a special occasion! From the ambiance to the innovative menu, Elemental Eatery takes vegan cuisine to a new level."</p>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
        </div>
      </div>
    </div>
  </body>
  <Footer color="#B60" />
</template>

<style>
body
{
    background-color: #B60;
    font-family: "Inknut Antiqua";
}

/* hero-image */
.hero-section
{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    margin-top: 15px;
    height: 950px;
}

#hero-image-container
{
  width: 1500px;

  display: flex;
  flex-direction: row;
  justify-content: center;
}

#hero-image
{
  width: 1400px;
}

@keyframes bouncing {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(20px);
  }
}

#content-arrow
{
  font-size: 48px;
  animation: 0.5s ease-in-out 0s infinite alternate bouncing;

  /* properties to negate change in styling from the <button> tag */
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	cursor: pointer;
	outline: inherit;
}

.info
{
    background-color: #FFECB3;
}

.info h3
{
    color:black;
    font-size:32px;
    font-weight:400;
    word-wrap: break-word;
    text-align:center;
    padding-top: 40px;
}

#descript
{
    color: var(--Colors-Neutral-Black, black);
    font-size: 20px;
    font-family: "Inknut Antiqua";
    font-weight: 400;
    line-height: 51.60px;
    word-wrap: break-word;
    width: 75%;
    text-align:center;
    margin:auto;
}

.container
{
    display: flex;
    justify-content: space-between;
}
.container .review1{
    width: 30%;
    padding: 10px;
    text-align:center;
    box-shadow: 10px 10px 5px 10px;
}

.location
{
    width: 50%;
}
.hours
{
    text-align:left;
    width: 35%;
}
</style>
