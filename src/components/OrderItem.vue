<script setup lang="ts">
import type { Dish } from '@/dishes';
import { computed, onMounted, ref } from 'vue';

const props = defineProps<{
  dish: Dish
}>()

const emit = defineEmits(['newCount']);

// CSS colors - would be defined in CSS, but my :root { --prop: color } and var(--prop) approach didn't seem to work,
// so we're doing this with v-bind(color) instead
// const colorWhite = ref("#FFFFFF");
// const colorSilver = ref("#EAEAEA");
// const colorLightGray = ref("#D9D9D9");

// const colorGray = ref("#B7B7B7");
// const colorDarkGray = ref("#989898");
const colorBlack = ref("#000000");

const colorFire1 = ref("#E95313");
const colorFire2 = ref("#FC9337");

const colorWater1 = ref("#253EA4");
const colorWater2 = ref("#377BC8");

const colorAir1 = ref("#AAAAAA");
const colorAir2 = ref("#CECECE");

const colorEarth1 = ref("#5B971F");
const colorEarth2 = ref("#90C836");

const colorError = ref("#DE8383");
const colorSuccess = ref("#70D96A");

// component colors
let elementColor1, elementColor2;

switch(props.dish.element) {
  case "Fire":
    elementColor1 = colorFire1;
    elementColor2 = colorFire2;
    break;
  case "Water":
    elementColor1 = colorWater1;
    elementColor2 = colorWater2;
    break;
  case "Air":
    elementColor1 = colorAir1;
    elementColor2 = colorAir2;
    break;
  case "Earth":
    elementColor1 = colorEarth1;
    elementColor2 = colorEarth2;
    break;
}

// unique id
const id = ref("id_" + Math.random().toString(16).substring(7));

// automatic resizing of element and dish blocks to match the text size with padding
const elementBlockWidthPx = ref("55px");
const elementBlockHeightPx = ref("36px");

const dishBlockWidthPx = ref("76px");
const dishBlockHeightPx = ref("36px");

onMounted(() => {
  // set the width and height of the element and dish block to the size of the text plus 10px padding
  const elementText = document.querySelector(`.element-text.${id.value}`);
  const dishText = document.querySelector(`.dish-text.${id.value}`);

  if (elementText != null) {
    elementBlockWidthPx.value = (elementText.clientWidth + 20).toString() + "px";
    // elementBlockHeightPx.value = (elementText.clientHeight + 20).toString() + "px";
  }

  if (dishText != null) {
    dishBlockWidthPx.value = (dishText.clientWidth + 20).toString() + "px";
    // dishBlockHeightPx.value = (dishText.clientHeight + 10).toString() + "px";
  }
});

// state
const count = ref(0);
const countStatus = ref("Neutral");

const statusClass = computed(() => {
  if (countStatus.value == "Valid") {
    return "count-neutral";
  } else if (countStatus.value == "Invalid") {
    return "count-invalid";
  } else {
    return "count-neutral";
  }
});

function keyUp(payload: KeyboardEvent) {
  // get the value of the input
  const value = (payload.target as HTMLInputElement).value;

  try {
    const valueInt = parseInt(value);

    if (valueInt >= 0) {
      count.value = valueInt;
      emit('newCount', props.dish, valueInt);

      countStatus.value = "Valid";
    } else {
      countStatus.value = "Invalid";
    }
  } catch {
    countStatus.value = "Invalid";
  }
}

function focusLost() {
  if (countStatus.value == "Invalid") {
    count.value = 0;
    (document.querySelector(".order-item-input" + id.value) as HTMLInputElement).value = "0";

    emit('newCount', props.dish, 0);
  }

  countStatus.value = "Neutral";
}

function changed(payload: Event) {
  count.value = parseInt((payload.target as HTMLInputElement).value);
  emit('newCount', props.dish, count.value);
}

onMounted(() => {
  (document.querySelector(".order-item-input" + id.value) as HTMLInputElement).value = "0";
});
</script>

<template>
  <div class="item">
    <span class="title body3">{{ props.dish.title }}</span>
    <span class="desc body4">{{ props.dish.description }}</span>
    <div class="details">
      <div class="detail-container">
        <div class="element-block">
          <span :class="['element-text', 'body4', id]">{{ props.dish.element }}</span>
        </div>
        <div class="dish-block">
          <span :class="['dish-text', 'body4', id]">{{ props.dish.dishType }}</span>
        </div>
      </div>
      <div class="price-container">
        <span class="price body2">${{ props.dish.price }}</span>
        <span class="price-x body2">x</span>
        <input
          type="number"
          :class="['count', 'body3', 'order-item-input', statusClass, 'order-item-input' + id]"
          name="count"
          min="0"
          max="100"
          @keyup="keyUp"
          @focusout="focusLost"
          @change="changed"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* #region typography */
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
/* #endregion */

/* #region layout */
.item {
  display: flex;
  flex-direction: column;

  gap: 16px;

  margin: 2%;
}

.details {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.detail-container {
  display: flex;
  flex-direction: row;

  gap: 10px;
}

.price-container {
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  gap: 10px;
}

.element-block {
  display: flex;
  justify-content: center;
  align-items: center;

  width: v-bind('elementBlockWidthPx');
  height: v-bind('elementBlockHeightPx');
}

.dish-block {
  display: flex;
  justify-content: center;
  align-items: center;

  width: v-bind('dishBlockWidthPx');
  height: v-bind('dishBlockHeightPx');
}

.count {
  width: 40px;
  height: 30px;

  /* border: 1px solid v-bind('colorBlack'); */
  border-radius: 10px;

  outline: none;

  text-align: center;
  padding: 5px;
}
/* #endregion */

/* #region colors */
.title {
  color: v-bind('elementColor1');
}

.desc {
  color: v-bind('elementColor2');
}

.element-block {
  background-color: v-bind('colorBlack');
}

.element-text {
  color: v-bind('elementColor2');
}

.dish-block {
  background-color: v-bind('elementColor2');
}

.dish-text {
  color: v-bind('colorBlack');
}

.count-valid {
  border: 3px solid v-bind('colorSuccess');
}

.count-invalid {
  border: 3px solid v-bind('colorError');
}

.count-neutral {
  border: 3px solid v-bind('colorBlack');
}
/* #endregion */
</style>
