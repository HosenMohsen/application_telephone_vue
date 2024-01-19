<script>
export default {
    name: 'CarteJournal',
    props: [
        'journal'
    ],
    data() {
        return {
            
        }
    },
}

</script>

<template>
    <div>
        <p> {{ journal.name }}</p> 
      <p> {{ journal.number }}</p>
      <p>  {{ journal.date }}</p>


    </div>
</template>


<style scoped>

div {
    width: 200px;
    margin: 0 auto;
    height: 200px;
    margin-bottom: 1rem;
    background-color: #f9f9f9;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

</style>