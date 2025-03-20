<template>
  <!-- TO-DO: Make it so the buttons alternate which pdf shows up -->
  <!-- Menu Buttons -->
  <h1 id = "menus">Our Menus</h1>
  <hr>
  <p id = "menud">Take a look at our incredible cuisine and healthy vegan options! Each menu is divided into sections of their most dominant elements 
to showcase our commitment to the planet.</p>
<hr>
<div class = "button-container">
  <button type = "button">Lunch Menu</button>
  <button type = "button">Dinner Menu</button>
</div><br>
<iframe src="src\assets\lunch_vegan.pdf" width="640" height="480" allow="autoplay"></iframe>
<iframe src = "src\assets\vegannnnnnnnn.pdf" width = "640" height = "480" allow = "autoplay"></iframe>
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
iframe
{
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
</style>