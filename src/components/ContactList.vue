<script>
import {ref} from "vue";
import ContactItem from "./ContactItem.vue";
export default{
    props:["contacts"],
    components:{
        ContactItem
    },
    setup(props){
        const allContacts = ref(props.contacts)
        return{
            allContacts
        }
    }
}
</script>
<template>
    <!-- main section -->
    <main class="pt-10">
      <div class="contacts grid md:grid-cols-12 gap-4">
        <div class="card bg-slate-100 flex items-center w-auto md:col-span-6 rounded-md" v-for="contact in contacts" :key="contact.name">
            <ContactItem :contact="contact"/>
        </div>
      </div>
      
    </main>

    
</template>
<style></style>