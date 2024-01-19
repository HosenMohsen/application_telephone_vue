<script>
import { useClavierStore } from '@/stores/clavier';
import { useJournalStore } from '@/stores/journal';

export default {
  name: 'Clavier',
  setup() {
    const clavierStore = useClavierStore();
    const journalStore = useJournalStore();

    const addToPhoneNumber = (digit) => {
      clavierStore.addToPhoneNumber(digit);
      checkPerson();
    };

    const clearPhoneNumber = () => {
      clavierStore.clearPhoneNumber();
    };

    const checkPerson = () => {
      const phoneNumber = clavierStore.phoneNumber;
      const person = journalStore.findPersonByNumber(phoneNumber);
      if (person) {
        p.textContent = `Vous allez appeler ${person.name}`;
      }
    };

    const call = () => {
      const phoneNumber = clavierStore.phoneNumber;
      const currentDate = new Date().toLocaleString();

      journalStore.ajoutJournal({
        name: '',
        number: phoneNumber,
        date: currentDate,
      });

      clearPhoneNumber();
    };

    return {
      clavierStore,
      addToPhoneNumber,
      clearPhoneNumber,
      call,
    };
  },
  data() {
    return {
      p: document.getElementById('p'),
    };
  },
};
</script>

<template>
  <div>
    <div class="inuput_button">
      <input type="text" v-model="clavierStore.phoneNumber" disabled />
      <p id="p"></p>
    </div>
    <div class="clavier_button">
      <button v-for="digit in clavierStore.digits" :key="digit" @click="addToPhoneNumber(digit)">
        {{ digit }}
      </button>
      <br />
      <button class="clear_button" @click="clearPhoneNumber"> Effacer</button>
    </div>
    <img src="../assets/logo_phone.webp" @click="call" alt="logo telephone">
  </div>
</template>

<style scoped lang="scss">
input {
  padding: 10px;
  border-radius: 10px;
  border: none;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 800;
}

.clavier_button {
  display: grid;
  grid-template-columns: repeat(3, 20%);
  gap: 10px;
  padding: 10px;
  width: 50vh;
  margin: 20px auto;

  button {
    border-radius: 50%;
    background-color: #212020;
    color: white;
    border: none;
    padding: 15px;
    font-size: 1.5rem;
    font-weight: 800;
  }

  .clear_button {
    text-align: center;
    font-size: 0.8rem;
    font-weight: 800;
  }
}

img {
    width: 30%;
    margin-left: 20%;
}
</style>
