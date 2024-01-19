<script>
export default {
    name: 'FormulaireContact',
    props: [
        'contact'
    ],
    data() {
        return {
            name: '',
            number: '',
        }
    },
    methods: {
        ajoutContact() {
            this.$emit('ajout-contact', {
                name: this.name,
                number: this.number,
            })
        }
    },
}
</script>

<template>
    <form @submit.prevent="ajoutContact()">
        <input type="text" placeholder="Nom" v-model="name">
        <input type="text" placeholder="0601020304" v-model="number">
        <button type="submit"> Ajouter le contact</button>
    </form>
</template>