<script setup>
import { ref } from "vue";
import Home from "./components/home.vue";
import Form from "./components/Form.vue";

let clicked = ref(false);

const open = () => {
  clicked.value = true;
};
const close = () => {
  clicked.value = false;
};
</script>
<template>
  <div>
    <div v-if="clicked">
      <Form @close="close" />
    </div>

    <Home @open="open" />
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
