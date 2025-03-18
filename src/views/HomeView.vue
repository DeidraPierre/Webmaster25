<script setup lang="ts">
</script>

<template>
  <!-- Hero Image Carousel -->
  <div class = "hero-image">
    <img style = "width: 1000px;" src = "@/assets/image.png">
  </div>

  <!-- Information Section -->
  <div class = "info">
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
</template>

<style>
body
{
    margin:0px;
    font-family: "Inknut Antiqua";
}

.buttons a
{
    float:left;
    display:block;
    text-align:center;
    color:#B60;
    font-size:32px;
    font-family: "Inknut Antiqua";
    font-weight: 400;
    text-decoration: underline;
    line-height: 48px;
    word-wrap: break-word;
    padding: 20px 15px;
    margin-left: 20px;
}

.buttons a:hover{
    color:rgba(209, 143, 21, 0.342);
}
/* hero-image */
.hero-image
{
    text-align: center;
    margin-top:15px;
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
