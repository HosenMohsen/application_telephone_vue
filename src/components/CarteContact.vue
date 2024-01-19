<script>
export default {
    name: 'CarteContact',
    props: [
        'contact'
    ],
    data() {
        return {
            
        }
    },
}

</script>

<template>
    <div>
        <h2> {{ contact.name }}</h2> 
      <p> {{ contact.number }}</p>

    </div>
</template>


<style scoped>

div {
    width: 200px;
    margin: 0 auto;
    height: 200px;
    margin-bottom: 1rem;
    background-color: aqua;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

</style>