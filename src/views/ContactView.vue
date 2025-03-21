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
    <h1 id="contact">Contact</h1>
    <p id="contactd">
      Take a moment to let us know how we’re doing or make reservations. We are open to any feedback
      or consultations.
    </p>
    <form>
      <label for = "name">Name</label><br/>
      <input type = "text" id="name" placeholder = "Your Name" name = "name"/><br />
      <label for = "email">Email</label><br />
      <input type = "email" id="email" placeholder="Email Address" name="email" /><br />
      <label for = "content">Message</label><br />
      <input type = "text" id="content" placeholder="Enter your message" name="content" /><br />
      <input type = "submit" value="Submit" id="submit" />
    </form>
  </body><br>
  <Footer color="#CC7711" />
</template>


<style>
#contact
{
  text-align: center;
  text-decoration: underline;
  font-weight: 400;
}
#contactd
{
  margin: auto;
  text-align: center;
  width: 50%;
  margin-bottom: 40px;
}
form{
  background-color:#ffecb3;
  width: 50%;
  text-align: center;
  margin: auto;
  border-radius: 10px;
}
input
{
  width: 80%;
  border: none;
  border-radius: 5px;
  padding: 10px;
}
label
{
  float: left;
  padding-left: 40px;
}
#submit
{
  background-color:#2c2c2c;
  color:white;
  border-radius: 5px;
  border:none;
  margin-top:20px;
  margin-bottom: 20px;
}
</style>
