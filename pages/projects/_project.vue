<template>
  <main>
    <section v-if="post">
      <nav class="mb-8" aria-label="go back">
        <router-back class="block" />
      </nav>

  
      <article class="project-content">
          <div class="two-col-content">
            <div class="half-content right-padding">
               <img
                v-if="post.cover"
                class="cover-image"
                :src="require(`~/assets/images/${post.cover}`)"
              >

                <div v-if="post.gallery" class="content-img">
                <img
                  v-for="image in post.gallery"
                  class="image"
                  :key="image.id"
                  :src="require(`~/assets/images/${image}`)"
                >
              </div>

            </div>
            
            <div class="half-content left-padding">
                <p class="mt-2">Industry category: <span class="bold-text">{{ post.category }}</span></p> 
                <h1 class="">{{ post.title }}</h1>
                <a href="post.link" target="_blank" class="mt-2">{{ post.link }}</a>
                <p class="mt-2">Tech stack: <span class="bold-text">{{ post.stack }}</span></p> 
                <p class="mt-2">{{ post.description }}</p>
                <nuxt-content :document="post" />
            </div>
        </div>
      
      </article>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("projects", params.project).fetch();
    } catch (e) {
      error({ message: "Project not found" });
    }
    return { post };
  },
}
</script>


<style lang="scss">

.mt-2 {
  margin-top: 20px;
}

.left-padding {

}

.right-padding {
  padding-right: 4rem;
}


.project-content {
  margin-top: 4rem;
}

.two-col-content {
  display: flex;
}

.half-content {
  width: 50%;
}
.cover-image {
  width: 100%;
  max-width: 600px;
  margin: auto;
  display: block;
}

.content-img {
 img {
  width: 100%;
  max-width: 600px;
  margin: auto;
  display: block;
  margin-top: 4rem;

 } 
}

.nuxt-content-container {
  p {
    margin-top: 10px;
  }
}
</style>