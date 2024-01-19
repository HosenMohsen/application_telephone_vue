<script>
import FormulaireContact from '@/components/FormulaireContact.vue';


export default {
    name: 'Contact',
    components: {
        FormulaireContact,
    },
    data() {
        return {
            
        }
    },
   methods: {

   },
    computed: {
        
    }, 
}


</script>



<template>
    <div>
        <FormulaireContact/> 
    </div>
    
</template>



<style scoped lang="scss">

form {
    background-color: #42b983;
    width: 50vh;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;

}

input {
    padding: 10px;
    border-radius: 10px;
    border: none;
}

button {
    padding: 10px;
    border-radius: 10px;
}

</style>