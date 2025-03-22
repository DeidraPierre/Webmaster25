<script setup lang="ts">
import type { CartItem, DishType } from '@/dishes'

const props = defineProps<{
  dishType: DishType
  items: Array<CartItem>
}>()
</script>

<template>
  <div class="cart-item-group">
    <span class="body3">{{ props.dishType }}</span>
    <div class="cart-items-flex-container">
      <div v-for="item in props.items" :key="item.dish.title" class="cart-item-flex-container">
        <span class="body4">{{ item.dish.title }}</span>
        <div class="cart-item-pricing">
          <span class="body4">{{ item.count }}</span>
          <span class="body4">${{ item.dish.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* #region typography */
h1 {
  font: 'Inkut Antiqua', serif;
  font-size: 72px;
  line-height: 108px;
}

h2 {
  font: 'Inkut Antiqua', serif;
  font-size: 60px;
  line-height: 90px;
}

h3 {
  font: 'Inkut Antiqua', serif;
  font-size: 50px;
  line-height: 75px;
}

h4 {
  font: 'Inkut Antiqua', serif;
  font-size: 36px;
  line-height: 54px;
}

.body1 {
  font: 'Inkut Antiqua', serif;
  font-size: 30px;
  line-height: 45px;
}

.body2 {
  font: 'Inkut Antiqua', serif;
  font-size: 24px;
  line-height: 36px;
}

.body3 {
  font: 'Inkut Antiqua', serif;
  font-size: 18px;
  line-height: 24px;
}

.body4 {
  font: 'Inkut Antiqua', serif;
  font-size: 12px;
  line-height: 18px;
}
/* #endregion */

/* #region layout */
.cart-item-group {
  display: flex;
  flex-direction: column;

  gap: 20px;

  margin: 5%;
}

.cart-items-flex-container {
  display: flex;
  flex-direction: column;

  gap: 10px;
}

.cart-item-flex-container {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}

.cart-item-pricing {
  display: flex;

  gap: 16px;
}
/* #endregion */
</style>
