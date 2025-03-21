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
    <h1 id = "letter">References and Documentation</h1>
    <p class = "thanks">Thank you so much for your time and consideration.</p>
    <br><p class = "thanks">This website was creted as a submission to the 2025 TSA Missouri State Conference. All content was created by our team and any relation to places or people are purely coincidental.</p>
    <br><p class = "thanks">This page contains information we need to share in relation to our submission, and is not directly related to the restaurant theme</p>
    <h3 class = "cite">Images</h3>
    <a class = "links" href = "https://unsplash.com/license">Unsplash license</a>
    <a class = "links" href = "https://www.pexels.com/license/">Pexels license</a>
    <div class = "unsplash">
        <p>-Paggiaro, Francesco. "closeup photo of fire during night time" Pexels, 7, Jul. 2018</p>
        <p>-Cagle, Brooke. "selective focus photography of vegetables in basket" Unsplash, 1, Sept. 2015</p>
        <p>-Haych, Jaye. "a group of baby dolls" Unsplash, 20, Jun. 2022</p>
        <p>-Deeyo, Chelsea. "blue solar panel" Unsplash, 21, May 2019</p>
        <p>-Yukawa, Katt. "person showing both hands with make a change note and coins" Unsplash, 26, Jul. 2018</p>
    </div>
    <h3 class = "cite">Font</h3>
    <a class = "links" href = "https://fonts.google.com/specimen/Inknut+Antiqua/license">Google Fonts license</a>
    <p class = "unsplash1">Sorenson, Claus. "Inknut Antiqua." Google Fonts, Google</p>
    <h3 class = "cite">Tools Used</h3>
    <div class = "tool">
        <ul id = "tools">
            <li>Visual Studio Code</li>
            <li>Github</li>
            <li>Vue</li>
            <li>Canva</li>
            <li>Figma</li>
        </ul>
    </div>
    <h1 class = "cite">Documents</h1>
    <div class = "content5">
        <a href = "https://drive.google.com/file/d/1t1Vh9QvCf1wjQr_34mF_vkM_uCjqlmbU/view?usp=sharing" target = "_blank">Student Copyright Checklist</a>
        <br><a href = "https://drive.google.com/file/d/1GyBbmiXIRxXkVqR3BzD383EmTu3Zs5j0/view?usp=sharing" target = "_blank">Work Log</a>
    </div>
  </body>
  <Footer color="#CC7711" />
</template>

<style>
    #letter
    {
        text-align: center;
        text-decoration: underline;
    }
    .cite
    {
        text-align: center;
        text-decoration: underline;
    }
    .content5
    {
        text-align: center;
    }
    .thanks
    {
        width: 60%;
        margin:auto;
        text-align: center;
    }
    .links
    {
        display: block;
        text-align: center;
        margin: auto;
    }
    .unsplash
    {
        width: 50%;
        margin: auto;
    }
    .unsplash1
    {
        text-align: center;
    }
    .tool
    {
        text-align: center;
    }
    #tools
    {
        text-align:left;
        display: inline-block;
    }
</style>
