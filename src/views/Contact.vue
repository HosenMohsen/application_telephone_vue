<script>

import FormulaireContact from '@/components/FormulaireContact.vue';
import CarteContact from '@/components/CarteContact.vue';
import { useContactStore } from '../stores/contact.js'

export default {
    name: 'Contact',
    setup() {
        const contactStore = useContactStore()
        return {
            contactStore
        }
    },
    components: {
        CarteContact,
        FormulaireContact,
    }, 
    data() {
        return {
            
        }
    },
   methods: {

   },
    computed: {
        contacts() {
            return this.contactStore.contacts
        }
    }, 
}

</script>

<template>
    <div class="contact_card">
        <div v-for="contact in contacts" :key="contact.number">
            <CarteContact :contact="contact"/>
        </div>
        
        

    </div>

</template>


<style scoped lang="scss">


</style>

