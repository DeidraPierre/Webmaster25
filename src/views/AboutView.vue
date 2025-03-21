<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <header>
    <nav>
      <Header color="#FFECB3" />
    </nav>
  </header>
  <body>
    <!-- TO-DO: Change photos to stock photos that Raymond Found and upload documentation -->
    <!-- Mission -->
    <h1 id = "mission">Our Mission</h1>
    <p id = "descrip1">Elemental Eatery was born from a desire to merge the beauty of nature with a transformative dining experience. Inspired by the four classical elements—Fire, Water, Earth, and Air—our founders envisioned a space where culinary artistry would meet environmental consciousness. </p>
    <p id = "descrip2">As a fully vegan restaurant, we are committed to showing that plant-based dining can be bold, creative, and deeply satisfying. Every dish is crafted using fresh, organic ingredients without compromising on flavor or texture.</p>
    <br><div class = "green">
      <h2>Our Commitment to Sustainability</h2>
      <p>At Elemental Eatery, we believe in protecting the planet as fiercely as we pursue culinary excellence. Our sustainability efforts are woven into every aspect of our operation.</p>
    </div>

    <div class = "section1">
      <div class = "text1">
        <h1>Farm to Table</h1>
        <p> We partner with local, organic farms to ensure our ingredients are fresh, seasonal, and sourced responsibly.</p>
      </div>
      <div class = "image1">
        <img src = "@/assets/hero-fire.png">
      </div>
    </div>
    <div class = "section2">
      <div class = "text2">
        <h1>Zero-Waste Initiative</h1>
        <p>Kitchen scraps are repurposed into flavorful broths, sauces, and pickled garnishes. Any remaining waste is composted to minimize landfill contributions.</p>
      </div>
      <div class = "image2">
        <img src = "@/assets/hero-fire.png">
      </div>
    </div>
    <div class = "section1">
      <div class = "text1">
        <h1>Eco-Friendly Practices</h1>
        <p>From biodegradable takeout containers to rainwater irrigation in our local garden, we strive to align our dining experience with environmentally conscious values.</p>
      </div>
      <div class = "image1">
        <img src = "@/assets/hero-fire.png">
      </div>
    </div>
    <div class = "section2">
      <div class = "text2">
        <h1>Giving Back</h1>
        <p>We believe positive change starts with community. A portion of our proceeds is donated to a non-profit organization that supports local sustainability projects, food security initiatives, and environmental education.</p>
      </div>
      <div class = "image2">
        <img src = "@/assets/hero-fire.png">
      </div>
    </div>
  </body>
  <Footer color="#CC7711" />
</template>

<style>
  #mission
  {
    text-align: center;
    text-decoration: underline;
  }

  #descrip1, #descrip2
  {
    margin:auto;
    width: 80%;
  }

  .green
  {
    background-color:#81a43f;
    width: 80%;
    margin:auto;
    border-radius: 15px;
    padding: 15px;
  }
  .green h2
  {
    text-align: center;
    text-decoration: underline;
  }
  .green p
  {
    text-align: center;
  }
  /* Alternating sections */

  .section1
  {
    display: flex;
    align-items:center;
    justify-content: center;
    padding: 50px;
  }
  .text1
  {
    flex: 1;
    padding: 20px;
  }
  .text2
  {
    text-align: right;
    padding: 20px;
  }
  .image1
  {
    flex: 1;
  }
  .image1 img
  {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .image2 img
  {
    max-width: 100%;
    height: auto;
    display: block;
  }
  .section2
  {
    flex-direction: row-reverse;
    display: flex;
    padding: 50px;
  }
</style>
