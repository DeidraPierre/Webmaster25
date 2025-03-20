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
    <!-- Mission -->
    <h1>Our Mission</h1>
    <p>Deeper description on methods and vegetarianism</p>
    <p>Will scan and embed documentation in here</p>
  </body>
  <Footer color="#B60" />
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

</style>
