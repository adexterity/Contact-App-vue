<script >
import { ref, watch } from 'vue';
import { useContactStore } from '../stores/contactStore';
export default {

  props: {
    contacts: Object
  },
  setup(props, { emit }) {

    const contact = useContactStore()
    // let isSearching = ref(contact.searching)
    const searchValue = ref('')

    // will come back to this
    /* watch(searchValue, (newValue) => {
      //check if newvalue is not an empty string
      if (newValue !== "") {

        contact.searchFilter(newValue, true)
        console.log(newValue)
      }

    }) */


    function openContactField() {
      emit("open");
    };


    return {
      openContactField, contact, searchValue, watch

    }
  }
}



</script>

<template>
  <!-- content container -->
  <div class="container mb-10">
    <header>
      <h2 class="font-bold inline-block mr-2">Phone Directory</h2>
      <button class="btn" @click="openContactField">New</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, odit?
        Quisquam aut rerum dolor illum quos quis labore architecto vitae?
      </p>
      <input type="search" placeholder="search contact" class="bg-white placeholder outline-0 mr-2 p-1 placeholder-center"
        v-model="searchValue" />
      <input type="button" value="search" class="border border-gray-800 rounded px-4 py-1 cursor-pointer" />
    </header>
  </div>
</template>
<style scoped></style>
