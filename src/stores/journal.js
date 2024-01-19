import { defineStore } from 'pinia'

export const useJournalStore = defineStore('journal', {
    state: () => ({
        journals: [
            {
              name: 'Grégory',
              number: '0606060606',
              date: formatDate(new Date()),
            },
            {
              name: 'Paul',
              number: "0601020304",
              date: formatDate(new Date()),
            },
            {
              name: 'Norman',
              number: "0659954556",
              date: formatDate(new Date()),
            }
          ],
    }),
    actions: {
        ajoutJournal(journal) {
            journal.date = formatDate(new Date());
            this.journals.push(journal);
        },
        findPersonByNumber(phoneNumber) {
          return this.journals.find((person) => person.number === phoneNumber);
        },
    }    
});

function formatDate(date) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
    return new Intl.DateTimeFormat('fr-FR', options).format(date);
}
