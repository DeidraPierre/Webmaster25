<script setup lang="ts">
const props = defineProps<{
  color: string
}>()

const color = props.color;
</script>

<template>
  <!-- TO-DO: Figure out how to change body color on certain pages so the footer is clearly seperated from the body -->
  <footer>
    <div class = "location">
      <h1>Kansas City, MO</h1>
      <h4>Phone: 888-888-8888</h4>
      <h4>Address: 1234 Sesame Street, Kansas City, MO</h4>
    </div>
    <div class = "hours">
      <h2 style = "text-decoration: underline;">Hours of Operation</h2>
      <ul>
        <li>Sunday: 11am - 9pm</li>
        <li>Monday: 12pm - 10pm</li>
        <li>Tuesday: 12pm - 10pm</li>
        <li>Wednesday: 12pm - 10pm</li>
        <li>Thursday: 12pm - 10pm</li>
        <li>Friday 12pm - 10pm</li>
        <li>Saturday 11am - 10pm</li>
      </ul>
    </div>
  </footer>
</template>

<style>
footer
{
    background-color: v-bind(color);

    padding-top:80px;
    color:white;
    font-weight: 100;
    text-align:center;
    font-family: "Inknut Antiqua";
    display:flex;
    justify-content:space-between;
}
</style>
