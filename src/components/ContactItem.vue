<script>
import { reactive, ref } from "vue";
import { useContactStore } from "../stores/contactStore";


export default {
    props: ["contact"],

    setup(props) {
        const contactStore = useContactStore()
        const contact = reactive(props.contact)


        return {
            contactStore, contact
        }
    }

}
</script>
<template>
    <div class="w-20 mr-2 ">

        <img src="../assets/avatars/download.png" alt="avatar" class="w-full" />
    </div>
    <div>
        <p class="border">Name: {{ contact.name }}</p>
        <p class="border">Mobile: {{ contact.number }}</p>
        <p class="border">Email: {{ contact.email }}</p>
    </div>

    <div class="ml-2 contact">

        <span class="block bg-yellow-400 text-center px-1 mb-1 cursor-pointer"><i class="fa-solid fa-eye"></i></span>
        <span class="block bg-blue-500 text-center px-1 cursor-pointer"><i
                class="fa-solid fa-pen-to-square text-white"></i></span>
        <span class="block bg-red-500 text-center px-1 mt-1 cursor-pointer"><i class="fa-solid fa-trash text-white "
                @click="contactStore.removeContact(contact.id)"></i></span>
        <span class="absolute h-2 w-2 top-2 right-5"><i class="fa-sharp fa-solid fa-heart favIcon"
                @click="contactStore.toggleFav(contact.id)" :class="{ active: contact.isFav }"></i></span>
    </div>
</template>
<style></style>