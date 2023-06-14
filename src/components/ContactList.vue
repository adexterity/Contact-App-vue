<script>

import ContactItem from "./ContactItem.vue";
export default {
    props: ["contacts", "favs", "searchContacts"],
    components: {
        ContactItem
    }

}
</script>
<template>
    <!-- main section -->
    <main class="pt-10">
        <!-- all contacts -->
        <div class="contacts grid md:grid-cols-12 gap-4">
            <div class="relative card bg-slate-100 flex items-center w-auto md:col-span-6 rounded-md"
                v-for="contact in contacts" :key="contact.id">
                <ContactItem :contact="contact" />
            </div>
        </div>

        <!-- search contacts -->
        <div class="contacts grid md:grid-cols-12 gap-4">
            <div class="relative card bg-slate-100 flex items-center w-auto md:col-span-6 rounded-md"
                v-for="contact in searchContacts" :key="contact.id">
                <ContactItem :contact="contact" />
            </div>
        </div>

        <!-- favorite contacts -->
        <div class="contacts grid md:grid-cols-12 grid-4">
            <div class="relative card bg-slate-100 flex items-center w-auto md:col-span-6 rounded-md"
                v-for="contact in favs" :key="contact.id">
                <ContactItem :contact="contact" />
            </div>
        </div>

    </main>
</template>
<style></style>