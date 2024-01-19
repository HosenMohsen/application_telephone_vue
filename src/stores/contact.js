import { defineStore } from 'pinia'

export const useContactStore = defineStore('contact', {
    state: () => ({
        contacts: [
            {
              name: 'Grégory',
              number: '06 06 06 06 06',
            },
            {
              name: 'Paul',
              number: "06 01 02 03 04"
            },
            {
              name: 'Norman',
              number: "06 59 95 45 56"
            }
          ],
    }),
    actions: {
        ajoutContact(contact) {
            this.contacts.push(contact)
        }
    }    
})