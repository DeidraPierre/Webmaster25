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
    <!-- Menu Buttons -->
    <h1>Menu</h1>
    <button>Dinner Menu</button>
    <button>Lunch Menu</button>
  </body>
  <Footer color="#B60" />
</template>
