<script setup>
import { reactive, ref } from "vue";
import Home from "./components/home.vue";
import Form from "./components/Form.vue";
import ContactList from "./components/ContactList.vue";
import { useContactStore } from "./stores/contactStore";



const contactStore = useContactStore();
const state = reactive({

  contacts: [],
  clicked: false,
})
let showContact = ref("all")



const toggleModal = () => {
  state.clicked = !state.clicked;
};

const addContact = () => {
  /* state.contacts = [...state.contacts, data]; */
  clicked.value = !clicked.value;
};
</script>
<template>
  <div>

    <div v-if="state.clicked">
      <Form @close="toggleModal" v-on:add-contact="addContact" />
    </div>
    <div>
      <Home @open="toggleModal" />
    </div>

    <div class="flex justify-center mb-4 gap-3">
      <button class="btn bg-green-500 px-3 " @click="showContact = 'all'">All contacts</button>
      <button class="btn bg-green-500 py-3" @click="showContact = 'fav'">Favorite contacts</button>
    </div>
    <!-- all contacts -->
    <div v-if="showContact === 'all'">
      <p claass="mb-4"> you have {{ contactStore.totalCount }} saved contacts</p>
      <ContactList :contacts="contactStore.contacts" />
    </div>
    <!-- favorite contacts -->
    <div v-if="showContact === 'fav'">
      <p class="mb-4">you have {{ contactStore.favCount }} favourite contacts</p>
      <ContactList :contacts="contactStore.favs" />
    </div>


  </div>
</template>

<style scoped>
* {

  padding: 0;
  box-sizing: border-box;
}
</style>
 