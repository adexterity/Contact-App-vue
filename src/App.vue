<script setup>
import { reactive, ref, watch } from "vue";
import Home from "./components/home.vue";
import Form from "./components/Form.vue";
import ContactList from "./components/ContactList.vue";
import { useContactStore } from "./stores/contactStore";



const contactStore = useContactStore();
const searching = ref(contactStore.searching);

//fetch contacts
contactStore.getContacts();
const state = reactive({

  clicked: false,
})
let showContact = ref("all")

/* function searchfilter() {
  // console.log(contactStore.searchFilter)
  console.log(searching.value)
} 

searchfilter()
*/

watch(searching, (newvalue) => {
  console.log(newvalue.value)
})



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
    <!-- loading -->
    <div class="loading" v-if="contactStore.loading">loading contacts...</div>
    <!-- all contacts -->
    <div v-if="showContact === 'all' && !contactStore.loading">
      <p claass="mb-4"> you have {{ contactStore.totalCount }} saved contacts</p>
      <!-- search contacts -->
      <div v-if="contactStore.searching">
        <ContactList :searchContacts="contactStore.searchFilter" />
      </div>
      <!-- contacts -->
      <div v-else>
        <ContactList :contacts="contactStore.contacts" />
      </div>
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
 