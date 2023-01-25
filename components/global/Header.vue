<template>
<header>  
  <nav class="navigation">
    <span class="name">Karli Sensibello</span>
    <ul class="menu">
      <li class="menu-item">
        <nuxt-link class="" to="/">Home</nuxt-link>
      </li>
      <li class="menu-item">
        <nuxt-link class="" to="/blog">Blog</nuxt-link>
      </li>
      <li class="menu-item">
        <nuxt-link class="" to="/projects">Projects</nuxt-link>
      </li>
    </ul>
  </nav>
</header>

  
</template>


<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
header {
  display: flex;
  background-color: #eee;
  font-family: Arial, Helvetica, sans-serif;

  .name {
    font-weight: 900;
  }

  ul {
    padding: 10px 0px;
    display: flex;
    margin: 0;

    li {
      list-style: none;
      margin-right: 3rem;
    }
  }
}

</style>
