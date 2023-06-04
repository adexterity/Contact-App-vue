<script setup>
import { reactive,ref } from "vue";
import Home from "./components/home.vue";
import Form from "./components/Form.vue";
import ContactList from "./components/ContactList.vue";
import ContactDetails from "./components/ContactDetails.vue";

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

    <div>
      <Home @open="toggleModal" />
    </div>

    <div>
      <ContactList :contacts="state.contacts" />
    </div>
    <div>
      <ContactDetails />
    </div>
  </div>
</template>

<style scoped>
* {
  
  padding: 0;
  box-sizing: border-box;
}
</style>
