<script>
import { RouterLink, RouterView } from 'vue-router'

export default{

  name: 'App',
  
}

</script>

<template>
  <header>

    <div>
      <h1>Vue 3</h1>
    </div>

      <nav>
        <RouterLink to="/Journal">Journal</RouterLink>
        <RouterLink to="/Form"> Formulaire</RouterLink>
        <RouterLink to="/Contact"> Contact</RouterLink>
        <RouterLink to="/Clavier"> Clavier</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>


nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
