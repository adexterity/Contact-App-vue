<script setup>
import { reactive,ref } from "vue";
import Home from "./components/home.vue";
import Form from "./components/Form.vue";

const state= reactive({

  contacts : [],
  // clicked : false,
})
let clicked = ref(false)

const toggleModal = () => {
  clicked.value= !clicked.value;
};

const addContact = (data) => {
  state.contacts= [...state.contacts,data];
  clicked.value = !clicked.value;
};
</script>
<template>
  <div>
    <div v-if="clicked">
      <Form @close="toggleModal" v-on:add-contact="addContact" />
    </div>

    <Home @open="toggleModal" :contacts="contacts" />
    <div>
      {{ contacts }}
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
