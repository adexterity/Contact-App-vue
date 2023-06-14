<script >
import { reactive } from "vue";
import { useContactStore } from "../stores/contactStore";
export default {
  name: "Form",

  props: {
    state: Object
  },
  setup(props, { emit }) {
    const contactStore = useContactStore()
    const contactData = reactive({

      name: "",
      email: "",
      number: "",
      company: "",
      title: "",
      group: null,
      todos: [],
      contacts: [],
      id: null,
    });
    /* function formHandler() {

      emit("add-contact", {
        name: contactData.name,
        email: contactData.email,
        number: contactData.number,
        company: contactData.company,
        title: contactData.title,
        group: contactData.group,
        todos: contactData.todos,
        contacts: contactData.contacts,
      });
      contactData.name = "";
      contactData.email = "";
      contactData.number = "";
      contactData.company = "";
      contactData.group = "";


    }; */

    function handleSubmit() {
      emit("close")
      contactStore.addContacts({
        name: contactData.name,
        email: contactData.email,
        number: contactData.number,
        company: contactData.company,
        title: contactData.title,
        group: contactData.group,
        todos: contactData.todos,
        contacts: contactData.contacts,
        id: Math.floor(Math.random() * 1000),
      })
    }

    function closeModal() {
      emit("close")
    }
    return {
      contactData, closeModal, handleSubmit
    }
  }

}
</script>

<template>
  <div class="overlay absolute t-0 l-0 w-full h-full flex justify-center items-center " @click.self="closeModal">
    <div class="py-2 px-1 flex justify-center items-center flex-col">
      <h2 class="text-green-600 font-bold text-xl md:text-4xl">
        Create Contact
      </h2>
      <p class="pt-2 pb-10">please fill in the form to create a contact</p>
      <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="Name" required class="field" v-model="contactData.name" />
        <input type="text" placeholder="Photo url" class="field" />
        <input type="tel" placeholder="Mobile" required class="field" v-model="contactData.number" />
        <input type="text" placeholder="Email" required class="field" v-model="contactData.email" />
        <input type="text" placeholder="Company" class="field" v-model="contactData.company" />
        <input type="text" placeholder="Title" class="field" v-model="contactData.title" />

        <select class="field w-48" v-model="contactData.group">
          <option value="" selected disabled>Select group</option>
          <option value="partner">partner</option>
          <option value="friend">friend</option>
          <option value="family">family</option>
          <option value="business">business</option>
        </select>
        <div class="btns mt-5">
          <input type="submit" value="Create" class="btn" />
          <input type="button" value="Cancel" class="btn2" @click="closeModal" />
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.overlay {
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 200;
}
</style>
