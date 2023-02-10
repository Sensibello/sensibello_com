<template>
  <main>
     <nav class="mb-8" aria-label="go back">
        <router-back class="block" />
      </nav>

    <section v-if="posts" class="w-full max-w-5xl mx-auto">
      <h1 class="h2-style text-center">Projects</h1>
      <div class="project-listing">
        <posts post-type="projects" :amount="10" />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("projects").fetch();
    } catch (e) {
      error({ message: "Projects not found" });
    }
    return { posts };
  },
}
</script>

<style lang="scss">
.project-listing {
  .cards-container {
    list-style: none;
    display: flex;
    padding: 1rem;
    margin-bottom: 2rem;
    width: 100%;
    flex-wrap: wrap;

      @media(max-width: 600px) {
        padding: 0;
      }

      .card-item {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        width: 25%;
        margin: 10px 10px 10px 0px;
        border-radius: 6px;
        box-shadow: 0 20px 40px -14px #d6d6d6;
        overflow: hidden;
        transition: transform 0.5s;
        -webkit-transition: transform 0.5s;
        @media(max-width: 750px) {
            width: 100%;
            margin: 10px 20px 10px 0px;
          }
      
    }
  }

}

</style>