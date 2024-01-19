import { defineStore } from 'pinia';

export const useClavierStore = defineStore('clavier', {
  state: () => ({
    digits: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    phoneNumber: '',
  }),
  actions: {
    addToPhoneNumber(digit) {
      this.phoneNumber += digit.toString();
    },
    clearPhoneNumber() {
      this.phoneNumber = '';
    },
  },
});
