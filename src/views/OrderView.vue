<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { ref } from 'vue';

// CSS colors - would be defined in CSS, but my :root { --prop: color } and var(--prop) approach didn't seem to work,
// so we're doing this with v-bind(color) instead
const colorWhite = ref("#FFFFFF");
const colorSilver = ref("#EAEAEA");
// const colorLightGray = ref("#D9D9D9");

const colorGray = ref("#B7B7B7");
const colorDarkGray = ref("#989898");
const colorBlack = ref("#000000");

// const colorFire1 = ref("#E95313");
const colorFire2 = ref("#FC9337");

// const colorWater1 = ref("#253EA4");
// const colorWater2 = ref("#377BC8");

// const colorAir1 = ref("#E1E1E1");
// const colorAir2 = ref("#F1F1F1");

// const colorEarth1 = ref("#5B971F");
// const colorEarth2 = ref("#90C836");
</script>

<template>
  <div id="order-view-container">
    <header class="order-view-header">
      <nav>
        <Header color="#FFECB3" />
      </nav>
    </header>
    <div id="order-container">
      <div id="filtering-options">
        <div id="filtering-flex-container">
          <div id="sort-div">
            <span class="body2">Sort</span>
            <div class="line-separator" />
            <select name="sort" id="sort-select">
              <option value="Price">Price</option>
              <option value="Element" selected>Element</option>
              <option value="Dish" selected>Dish</option>
            </select>
          </div>
          <div id="filter-div">
            <span class="body2">Filter</span>
            <div class="line-separator" />
            <div class="filter-under">
              <span class="body3">Under</span>
              <div>
                <span class="body3">$</span>
                <input type="number" id="price-filter" name="price-filter" min="0" max="100" />
              </div>
            </div>
            <div class="filter-dish">
              <span class="body3">Dish</span>
              <div class="filter-checkboxes">
                <div class="filter-checkbox-entry">
                  <input type="checkbox" class="filter-checkbox" name="entree-checkbox" />
                  <span class="body4">Entree</span>
                </div>
                <div class="filter-checkbox-entry">
                  <input type="checkbox" class="filter-checkbox" name="appetizer-checkbox" />
                  <span class="body4">Appetizer</span>
                </div>
                <div class="filter-checkbox-entry">
                  <input type="checkbox" class="filter-checkbox" name="dessert-checkbox" />
                  <span class="body4">Dessert</span>
                </div>
                <div class="filter-checkbox-entry">
                  <input type="checkbox" class="filter-checkbox" name="side-checkbox" />
                  <span class="body4">Side</span>
                </div>
              </div>
            </div>
            <div class="filter-element">
              <span class="body3">Element</span>
              <div class="filter-checkboxes">
                <div class="filter-checkbox-entry">
                  <input type="checkbox" class="filter-checkbox" name="fire-checkbox" />
                  <span class="body4">Fire</span>
                </div>
                <div class="filter-checkbox-entry">
                  <input type="checkbox" class="filter-checkbox" name="water-checkbox" />
                  <span class="body4">Water</span>
                </div>
                <div class="filter-checkbox-entry">
                  <input type="checkbox" class="filter-checkbox" name="air-checkbox" />
                  <span class="body4">Air</span>
                </div>
                <div class="filter-checkbox-entry">
                  <input type="checkbox" class="filter-checkbox" name="earth-checkbox" />
                  <span class="body4">Earth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="menu-type-container">
          <div id="menu-type-div">
            <span class="body2">Time</span>
            <div id="is-lunch-menu">
              <span id="is-lunch-menu-text" class="body3">Lunch Menu</span>
            </div>
            <div id="is-dinner-menu">
              <span id="is-dinner-menu-text" class="body3">Dinner Menu</span>
            </div>
          </div>
        </div>
      </div>
      <div id="item-list">

      </div>
      <div id="cart">

      </div>
    </div>
  </div>
  <Footer color="#CC7711" />
</template>

<style scoped>
/* typography */
h1 {
  font: "Inkut Antiqua", serif;
  font-size: 72px;
  line-height: 108px;
}

h2 {
  font: "Inkut Antiqua", serif;
  font-size: 60px;
  line-height: 90px;
}

h3 {
  font: "Inkut Antiqua", serif;
  font-size: 50px;
  line-height: 75px;
}

h4 {
  font: "Inkut Antiqua", serif;
  font-size: 36px;
  line-height: 54px;
}

.body1 {
  font: "Inkut Antiqua", serif;
  font-size: 30px;
  line-height: 45px;
}

.body2 {
  font: "Inkut Antiqua", serif;
  font-size: 24px;
  line-height: 36px;
}

.body3 {
  font: "Inkut Antiqua", serif;
  font-size: 18px;
  line-height: 24px;
}

.body4 {
  font: "Inkut Antiqua", serif;
  font-size: 12px;
  line-height: 18px;
}

/* element styling */
/* - line separators */
.line-separator {
  border: 1px solid v-bind('colorGray');
}

/* - root organization */
#order-view-container {
  display: flex;
  flex-direction: column;

  height: 100vh;
  gap: 0px;
}

.order-view-header {
  flex: 0 0 102px;
}

#order-container {
  flex: 100 0 10px;

  display: flex;
  flex-direction: row;
}

/* - tabs */
#filtering-options {
  flex: 273 0 1px;

  background-color: v-bind('colorSilver');
}

#item-list {
  flex: 810 0 1px;

  background-color: v-bind('colorWhite');
}

#cart {
  flex: 357 0 1px;

  background-color: v-bind('colorSilver');
}

/* -- filtering options tab */
#filtering-flex-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  height: 100%;
}

#sort-div {
  margin: 5%;
}

#filter-div {
  margin: 5%;
}

#menu-type-container {
  position: relative;
}

#menu-type-div {
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100%;
  height: 20vh;

  margin: 5%;
}

/* --- sort section */

/* --- filter section */
.filter-dish {
  display: flex;
  flex-direction: column;
}

.filter-checkboxes {
  display: flex;
  flex-direction: column;

  margin: 5%;
}

.filter-checkbox-entry {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.filter-checkbox {
  width: auto;
}

/* --- menu indicator section */
#is-lunch-menu {
  background-color: v-bind('colorBlack');
}

#is-lunch-menu-text {
  color: v-bind('colorFire2');
}

#is-dinner-menu {
  background-color: v-bind('colorSilver');
}

#is-dinner-menu-text {
  color: v-bind('colorDarkGray')
}
</style>
