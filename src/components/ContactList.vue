<script>
import { ref } from "vue";
import ContactItem from "./ContactItem.vue";
export default {
    props: ["contacts", "favs"],
    components: {
        ContactItem
    },
    setup(props) {
        const allContacts = ref(props.contacts)
        const favContacts = ref(props.favs)
        return {
            allContacts, favContacts
        }
    }
}
</script>
<template>
    <!-- main section -->
    <main class="pt-10">
        <!-- all contacts -->
        <div class="contacts grid md:grid-cols-12 gap-4">
            <div class="relative card bg-slate-100 flex items-center w-auto md:col-span-6 rounded-md"
                v-for="contact in allContacts" :key="contact.id">
                <ContactItem :contact="contact" />
            </div>
        </div>

        <!-- favorite contacts -->
        <div class="contacts grid md:grid-cols-12 grid-4">
            <div class="relative card bg-slate-100 flex items-center w-auto md:col-span-6 rounded-md"
                v-for="contact in favContacts" :key="contact.id">
                <ContactItem :contact="contact" />
            </div>
        </div>

    </main>
</template>
<style></style>