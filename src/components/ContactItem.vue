<script>
import { ref } from "vue"
export default {
    props: ["contact"],
    setup(props) {
        const contact = ref(props.contact)
        return {
            contact
        }
    }
}
</script>
<template>
        <div class="w-20 mr-2">

            <img src="../assets/avatars/download.png" alt="avatar" class="w-full"/>
        </div>
        <div >
            <p class="border">Name: {{ contact.name }}</p>
            <p class="border">Mobile: {{ contact.number }}</p>
            <p class="border">Email: {{ contact.email }}</p>
        </div>

        <div class="ml-2">
            <span class="block bg-yellow-400 text-center px-1 mb-1"><i class="fa-solid fa-eye"></i></span>
            <span class="block bg-blue-500 text-center px-1"><i class="fa-solid fa-pen-to-square text-white"></i></span>
            <span class="block bg-red-500 text-center px-1 mt-1"><i class="fa-solid fa-trash text-white"></i></span>
        </div>
    
</template>
<style></style>