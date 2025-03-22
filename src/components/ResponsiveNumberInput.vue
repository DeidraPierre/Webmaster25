<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

const props = defineProps<{
  min: number,
  max: number,
  default: number
}>()

const emit = defineEmits(['newValue']);

const id = ref("id_" + Math.random().toString(16).substring(7));

// CSS colors - would be defined in CSS, but my :root { --prop: color } and var(--prop) approach didn't seem to work,
// so we're doing this with v-bind(color) instead
// const colorWhite = ref("#FFFFFF");
// const colorSilver = ref("#EAEAEA");
// const colorLightGray = ref("#D9D9D9");

// const colorGray = ref("#B7B7B7");
// const colorDarkGray = ref("#989898");
const colorBlack = ref("#000000");

// const colorFire1 = ref("#E95313");
// const colorFire2 = ref("#FC9337");

// const colorWater1 = ref("#253EA4");
// const colorWater2 = ref("#377BC8");

// const colorAir1 = ref("#E1E1E1");
// const colorAir2 = ref("#F1F1F1");

// const colorEarth1 = ref("#5B971F");
// const colorEarth2 = ref("#90C836");

const colorError = ref("#DE8383");
const colorSuccess = ref("#70D96A");

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

    if (valueInt >= props.min && valueInt <= props.max) {
      count.value = valueInt;
      emit('newValue', valueInt);

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
    count.value = props.default;
    (document.querySelector('.responsive-number-input' + id.value) as HTMLInputElement).value = props.default.toString();

    emit('newValue', props.default);
  }

  countStatus.value = "Neutral";
}

function changed(payload: Event) {
  count.value = parseInt((payload.target as HTMLInputElement).value);
  emit('newValue', count.value);
}

onMounted(() => {
  (document.querySelector('.responsive-number-input' + id.value) as HTMLInputElement).value = props.default.toString();
});
</script>

<template>
  <input
    type="number"
    :class="['count', 'responsive-number-input', statusClass, 'responsive-number-input' + id]"
    name="count"
    min="0"
    max="100"
    @keyup="keyUp"
    @focusout="focusLost"
    @change="changed"
  />
</template>

<style scoped>
.count {
  width: 40px;
  height: 30px;

  /* border: 1px solid v-bind('colorBlack'); */
  border-radius: 10px;

  outline: none;

  text-align: center;
  padding: 5px;
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
</style>
