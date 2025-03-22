<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { computed, onMounted, reactive, ref, type Reactive } from 'vue'
import OrderItem from '@/components/OrderItem.vue'
import CartItemGroup from '@/components/CartItemGroup.vue'
import { dishes, type CartItem, type Dish, type DishType } from '@/dishes'
import { useToast } from 'vue-toastification'
import ResponsiveNumberInput from '@/components/ResponsiveNumberInput.vue'

// CSS colors - would be defined in CSS, but my :root { --prop: color } and var(--prop) approach didn't seem to work,
// so we're doing this with v-bind(color) instead
const colorWhite = ref('#FFFFFF')
const colorSilver = ref('#EAEAEA')
// const colorLightGray = ref("#D9D9D9");

const colorGray = ref('#B7B7B7')
const colorDarkGray = ref('#989898')
const colorBlack = ref('#000000')

// const colorFire1 = ref("#E95313");
const colorFire2 = ref('#FC9337')

// const colorWater1 = ref("#253EA4");
// const colorWater2 = ref("#377BC8");

// const colorAir1 = ref("#E1E1E1");
// const colorAir2 = ref("#F1F1F1");

// const colorEarth1 = ref("#5B971F");
// const colorEarth2 = ref("#90C836");

const colorError = ref("#DE8383");
const colorSuccess = ref("#70D96A");

// state
const subtotal = ref(0);
const salesTax = ref(0);
const total = ref(0);

const sortingCriteria = ref('Menu')

const entreeChecked = ref(true)
const appetizerChecked = ref(true)
const dessertChecked = ref(true)
const sideChecked = ref(true)

const fireChecked = ref(true)
const waterChecked = ref(true)
const airChecked = ref(true)
const earthChecked = ref(true)

const maxPrice = ref(100.00);

const timeString = ref(getTimeString())

function getTimeString() {
  const date = new Date()
  return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
}

const lunchIfTrueDinnerIfFalse = ref(new Date().getHours() < 17)

const itemsIndices = reactive(dishes.map((_, index) => index))
applyFiltersUnsorted()
sortBy(sortingCriteria.value as SortingCriteria)

const cartIndices = reactive(Array<number>())
const cartItems: Reactive<Array<CartItem>> = reactive(dishes.map((dish) => ({ dish, count: 0 })))

const cartItemsByType = computed(() => {
  const cartItemsByType: Record<DishType, Array<CartItem>> = {
    Entree: [],
    Appetizer: [],
    Dessert: [],
    Side: [],
  }

  cartItems.forEach((cartItem) => {
    if (cartItem.count == 0) return;

    cartItemsByType[cartItem.dish.dishType].push(cartItem)
  })

  return cartItemsByType
})

// list manipulation
type SortingCriteria = 'Price' | 'Element' | 'Dish' | 'Menu'

function sortBy(criteria: SortingCriteria) {
  // sort by category, preserving original order when equivalent
  itemsIndices.sort((a, b) => {
    const aDish = dishes[a]
    const bDish = dishes[b]

    // comparison results
    let baseResult = 0

    if (criteria === 'Price') {
      baseResult = aDish.price - bDish.price
    } else if (criteria === 'Element') {
      baseResult = aDish.element.localeCompare(bDish.element)
    } else if (criteria === 'Dish') {
      baseResult = aDish.dishType.localeCompare(bDish.dishType)
    } else if (criteria == 'Menu') {
      baseResult = aDish.index - bDish.index
    }

    if (baseResult == 0) {
      return aDish.index - bDish.index
    } else {
      return baseResult
    }
  })
}

function applyFiltersUnsorted() {
  dishes.forEach((dish) => {
    const dishElement = dish.element
    const dishDishType = dish.dishType

    const elementChecked =
      (dishElement === 'Fire' && fireChecked.value) ||
      (dishElement === 'Water' && waterChecked.value) ||
      (dishElement === 'Air' && airChecked.value) ||
      (dishElement === 'Earth' && earthChecked.value)

    const dishTypeChecked =
      (dishDishType === 'Entree' && entreeChecked.value) ||
      (dishDishType === 'Appetizer' && appetizerChecked.value) ||
      (dishDishType === 'Dessert' && dessertChecked.value) ||
      (dishDishType === 'Side' && sideChecked.value)

    const menuChecked =
      (dish.menu === 'Lunch' && lunchIfTrueDinnerIfFalse.value) ||
      (dish.menu === 'Dinner' && !lunchIfTrueDinnerIfFalse.value)

    const priceChecked = dish.price <= maxPrice.value;

    const shouldBePresent = elementChecked && dishTypeChecked && menuChecked && priceChecked;
    const isPresent = itemsIndices.indexOf(dish.index) != -1;

    if (shouldBePresent && !isPresent) {
      itemsIndices.push(dish.index)
    } else if (!shouldBePresent && isPresent) {
      itemsIndices.splice(itemsIndices.indexOf(dish.index), 1)
    }
  })
}

// state updates
function onSortChange(payload: Event) {
  const sortSelect = payload.target as HTMLSelectElement
  const sortValue = sortSelect.value

  sortBy(sortValue as SortingCriteria)
}

function onFilterChange() {
  applyFiltersUnsorted()
  sortBy(sortingCriteria.value as SortingCriteria)
}

function onNewMaxPrice(price: number) {
  maxPrice.value = price;
  onFilterChange();
}

function onNewCount(dish: Dish, newCount: number) {
  // adjust cardIndices and cartItems
  if (newCount == 0) {
    const index = cartIndices.indexOf(dish.index)
    if (index != -1) {
      cartIndices.splice(index, 1)
    }
  } else {
    const index = cartIndices.indexOf(dish.index)
    if (index == -1) {
      cartIndices.push(dish.index)
    }
  }

  cartItems[dish.index].count = newCount

  // update totals
  subtotal.value = cartItems.reduce((acc, cartItem) => acc + cartItem.count * cartItem.dish.price, 0)
  salesTax.value = subtotal.value * 0.07;

  total.value = subtotal.value + salesTax.value;
}

function onPurchase() {
  document.querySelector(".purchase-button")?.classList.add("active");

  if (cartIndices.length == 0) {
    setTimeout(() => {
      document.querySelector(".purchase-button")?.classList.remove("active");

      const toast = useToast();
      toast.error("Cart is empty!", {
        timeout: 2000
      });
    }, 400);
  } else {
    setTimeout(() => {
      // clear cart
      cartIndices.splice(0, cartIndices.length);
      cartItems.forEach((cartItem) => (cartItem.count = 0));

      // clear the values of all OrderItem inputs
      const orderItemInputs = document.querySelectorAll(".order-item-input");
      orderItemInputs.forEach((orderItemInput) => {
        (orderItemInput as HTMLInputElement).value = "0";
      });

      // update totals
      subtotal.value = 0;
      salesTax.value = 0;
      total.value = 0;

      document.querySelector(".purchase-button")?.classList.remove("active");

      const toast = useToast();
      toast.success("Purchase successful!", {
        timeout: 2000
      });
    }, 1000);
  }
}

// events
onMounted(() => {
  // lunch is initially set to be active, so swap them if the dinner menu is active
  if (!lunchIfTrueDinnerIfFalse.value) {
    const activeMenu = document.querySelector('.active-menu')
    const activeMenuText = document.querySelector('.active-menu-text')

    const inactiveMenu = document.querySelector('.inactive-menu')
    const inactiveMenuText = document.querySelector('.inactive-menu-text')

    activeMenu?.classList.replace('active-menu', 'inactive-menu')
    activeMenuText?.classList.replace('active-menu-text', 'inactive-menu-text')

    inactiveMenu?.classList.replace('inactive-menu', 'active-menu')
    inactiveMenuText?.classList.replace('inactive-menu-text', 'active-menu-text')
  }

  setInterval(() => {
    timeString.value = getTimeString()

    const oldlunchIfTrueDinnerIfFalse = lunchIfTrueDinnerIfFalse.value

    // earlier than 5PM
    lunchIfTrueDinnerIfFalse.value = new Date().getHours() < 17

    if (oldlunchIfTrueDinnerIfFalse != lunchIfTrueDinnerIfFalse.value) {
      // refilter and resort items
      applyFiltersUnsorted()
      sortBy(sortingCriteria.value as SortingCriteria)

      // update menu type coloring
      const activeMenu = document.querySelector('.active-menu')
      const activeMenuText = document.querySelector('.active-menu-text')

      const inactiveMenu = document.querySelector('.inactive-menu')
      const inactiveMenuText = document.querySelector('.inactive-menu-text')

      activeMenu?.classList.replace('active-menu', 'inactive-menu')
      activeMenuText?.classList.replace('active-menu-text', 'inactive-menu-text')

      inactiveMenu?.classList.replace('inactive-menu', 'active-menu')
      inactiveMenuText?.classList.replace('inactive-menu-text', 'active-menu-text')
    }
  }, 1000)
})
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
            <select name="sort" class="body2" id="sort-select" v-model="sortingCriteria" @change="onSortChange">
              <option value="Price">Price</option>
              <option value="Element">Element</option>
              <option value="Dish">Dish</option>
              <option value="Menu" selected>Menu</option>
            </select>
          </div>
          <div id="filter-div">
            <span class="body2">Filter</span>
            <div class="line-separator" />
            <div class="filter-under">
              <span class="body3">At Most</span>
              <div id="price-filter-container">
                <span class="body3">$</span>
                <ResponsiveNumberInput id="price-filter" class="body2" :default="100.00" :min="0" :max="100" @newValue="onNewMaxPrice" />
              </div>
            </div>
            <div class="filter-dish">
              <span class="body3">Dish</span>
              <div class="filter-checkboxes">
                <div class="filter-checkbox-entry">
                  <input
                    type="checkbox"
                    class="filter-checkbox"
                    name="entree-checkbox"
                    checked
                    v-model="entreeChecked"
                    @change="onFilterChange"
                  />
                  <span class="body3">Entree</span>
                </div>
                <div class="filter-checkbox-entry">
                  <input
                    type="checkbox"
                    class="filter-checkbox"
                    name="appetizer-checkbox"
                    checked
                    v-model="appetizerChecked"
                    @change="onFilterChange"
                  />
                  <span class="body3">Appetizer</span>
                </div>
                <div class="filter-checkbox-entry">
                  <input
                    type="checkbox"
                    class="filter-checkbox"
                    name="dessert-checkbox"
                    checked
                    v-model="dessertChecked"
                    @change="onFilterChange"
                  />
                  <span class="body3">Dessert</span>
                </div>
                <div class="filter-checkbox-entry">
                  <input
                    type="checkbox"
                    class="filter-checkbox"
                    name="side-checkbox"
                    checked
                    v-model="sideChecked"
                    @change="onFilterChange"
                  />
                  <span class="body3">Side</span>
                </div>
              </div>
            </div>
            <div class="filter-element">
              <span class="body3">Element</span>
              <div class="filter-checkboxes">
                <div class="filter-checkbox-entry">
                  <input
                    type="checkbox"
                    class="filter-checkbox"
                    name="fire-checkbox"
                    checked
                    v-model="fireChecked"
                    @change="onFilterChange"
                  />
                  <span class="body3">Fire</span>
                </div>
                <div class="filter-checkbox-entry">
                  <input
                    type="checkbox"
                    class="filter-checkbox"
                    name="water-checkbox"
                    checked
                    v-model="waterChecked"
                    @change="onFilterChange"
                  />
                  <span class="body3">Water</span>
                </div>
                <div class="filter-checkbox-entry">
                  <input
                    type="checkbox"
                    class="filter-checkbox"
                    name="air-checkbox"
                    checked
                    v-model="airChecked"
                    @change="onFilterChange"
                  />
                  <span class="body3">Air</span>
                </div>
                <div class="filter-checkbox-entry">
                  <input
                    type="checkbox"
                    class="filter-checkbox"
                    name="earth-checkbox"
                    checked
                    v-model="earthChecked"
                    @change="onFilterChange"
                  />
                  <span class="body3">Earth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="menu-type-container">
          <div id="menu-type-div">
            <span class="body2">{{ timeString }}</span>
            <div class="menu-block active-menu">
              <span class="active-menu-text body3">Lunch Menu</span>
            </div>
            <div class="menu-block inactive-menu">
              <span class="inactive-menu-text body3">Dinner Menu</span>
            </div>
          </div>
        </div>
      </div>
      <div id="item-list">
        <div id="item-list-div">
          <span class="body1">Items</span>
          <div class="line-separator" />
          <OrderItem
            v-for="index in itemsIndices"
            :key="index"
            :dish="dishes[index]"
            @newCount="onNewCount"
          />
        </div>
      </div>
      <div id="cart">
        <div id="cart-div">
          <span class="cart-item body2">Cart</span>
          <div class="cart-item line-separator" />
          <div class="cart-item-container">
            <CartItemGroup
            v-for="dishType in Object.keys(cartItemsByType)"
            :key="dishType"
            class="cart-item"
            :dishType="dishType as DishType"
            :items="cartItemsByType[dishType as DishType]"
          />
          </div>
        </div>
        <div id="cart-purchase-container">
          <div id="cart-purchase-div">
            <div class="purchase-item">
              <span class="body3">Subtotal</span>
              <span class="body3">${{ subtotal.toFixed(2) }}</span>
            </div>
            <div class="purchase-item">
              <span class="body3">Sales Tax</span>
              <span class="body3">${{ salesTax.toFixed(2) }}</span>
            </div>
            <div class="line-separator" />
            <div class="purchase-item">
              <span class="body2">Total</span>
              <span class="body2">${{ total.toFixed(2) }}</span>
            </div>
            <button :class="['purchase-button', cartIndices.length > 0 ? 'cart-items-present' : 'cart-items-absent']" @click="onPurchase">
              <span class="body2">Purchase</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer color="#CC7711" />
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

/* #region element styling */
/* - line separators */
.line-separator {
  border: 1px solid v-bind('colorGray');
}
/* #endregion */

/* #region - root organization */
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

  height: 80vh;
}
/* #endregion */

/* #region - tabs */
#filtering-options {
  flex: 273 0 1px;

  background-color: v-bind('colorSilver');
}

#item-list {
  flex: 810 0 1px;
  overflow-y: scroll;

  background-color: v-bind('colorWhite');
}

#cart {
  flex: 357 0 1px;

  display: flex;
  flex-direction: column;

  background-color: v-bind('colorSilver');
}
/* #endregion */

/* #region -- filtering options tab */
#filtering-flex-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  height: 100%;
}

#sort-div {
  margin: 5%;
  margin-bottom: 0;
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

  gap: 20px;

  margin: 5%;
}
/* #endregion */

/* #region --- sort section */
#sort-select {
  width: 90%;
  height: 50px;

  border: 3px solid v-bind('colorBlack');
  border-radius: 10px;

  outline: none;

  text-align: center;
  padding: 5px;

  margin: 5%;
}
/* #endregion */

/* #region --- filter section */
#price-filter-container {
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 10px;
  margin: 2%;
}

#price-filter {
  width: 90%;
  height: 30px;

  /* border: 1px solid v-bind('colorBlack'); */
  border-radius: 10px;

  outline: none;

  text-align: center;
  padding: 5px;
}

.filter-dish {
  display: flex;
  flex-direction: column;
}

.filter-checkboxes {
  display: flex;
  flex-direction: column;

  margin-top: 3%;
  margin-bottom: 2%;
}

.filter-checkbox-entry {
  display: flex;
  flex-direction: row;

  justify-content: flex-start;
  align-items: center;

  gap: 10px;
}

.filter-checkbox {
  width: 30px;
  height: 30px;
}
/* #endregion */

/* #region --- menu indicator section */
.menu-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80%;
  height: 80%;
}

.active-menu {
  background-color: v-bind('colorBlack');
}

.active-menu-text {
  color: v-bind('colorFire2');
}

.inactive-menu {
  background-color: v-bind('colorSilver');
}

.inactive-menu-text {
  color: v-bind('colorDarkGray');
}
/* #endregion */

/* #region -- item list tab */
#item-list-div {
  margin: 2.5%;
}
/* #endregion */

/* #region -- cart tab */
#cart-div {
  flex: 1 0 1px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.cart-item-container {
  overflow-y: scroll;
  height: 65vh;
}

.cart-item {
  margin: 3%;
}

#cart-purchase-container {
  flex: 1 0 1px;

  position: relative;
}

#cart-purchase-div {
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;

  width: 100%;
  height: 17vh;
}

.purchase-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 90%;
}

.purchase-button {
  width: 80%;
  height: 40px;

  background-color: v-bind('colorFire2');
  color: v-bind('colorBlack');

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 10px;

  box-shadow: 0px -10px;
  transform: translateY(10px);
}

.purchase-button.cart-items-present:hover {
  background-color: v-bind('colorSuccess');
}

.purchase-button.cart-items-absent:hover {
  background-color: v-bind('colorError');
}

.purchase-button.active.cart-items-present {
  background-color: v-bind('colorSuccess');

  box-shadow: 0px 0px;
  transform: translateY(0px);
}

.purchase-button.active.cart-items-absent {
  background-color: v-bind('colorError');

  box-shadow: 0px 0px;
  transform: translateY(0px);
}
/* #endregion */
</style>
