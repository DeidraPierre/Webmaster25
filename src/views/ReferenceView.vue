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
    <h1 id = "letter">Reference and Documentation</h1>
    <h3 id = "cite">Images on 'About Us' and 'Home' recieved from Vecteezy.com</h3>
    <div class = "content5">
        <iframe class ="documentation" src = "src\assets\FORMS_APPENDIX.pdf"></iframe>
        <iframe class ="documentation" src = "src\assets\WorkLog.pdf"></iframe>
    </div>
  </body>
  <Footer color="#CC7711" />
</template>

<style>
    #letter
    {
        text-align: center;
    }
    #cite
    {
        text-align: center;
    }
    .documentation
    {
        width: 800px;
        height: 500px;
    }
    .content5
    {
        text-align: center;
    }
</style>
