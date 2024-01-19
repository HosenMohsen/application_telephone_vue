<script>

import CarteJournal from '@/components/CarteJournal.vue';
import { useJournalStore } from '../stores/journal.js'

export default {
    name: 'Journal',
    setup() {
        const journalStore = useJournalStore()
        return {
            journalStore
        }
    },
    components: {
        CarteJournal,
    }, 
    data() {
        return {
            
        }
    },
   methods: {

   },
    computed: {
        journals() {
            return this.journalStore.journals
        }
    }, 
}


</script>

  
<template>
  <div class="journal_card">
        <div v-for="journal in journals" :key="journal.number">
            <CarteJournal :journal="journal"/>
        </div>
        

    </div>
</template>

<style>




</style>
