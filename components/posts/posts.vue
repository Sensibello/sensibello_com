<template>
  <ul v-if="posts.length > 0" class="cards-container">
    <li
      v-for="(post, index) in posts"
      :key="index"
      class="card-item"
    >
      <nuxt-link
        :to="`/${postType}/${post.slug}`"
        class=" card-link"
      >
        <template v-if="postType === 'projects'">
         
          <img
            v-if="post.cover"
            class="card-image"
              :src="require(`~/assets/images/${post.cover}`)"
          >
          <span class="card-info">
            <h6 class="category">{{ post.category }}</h6>
            <h3 class="card-title">{{ post.title }}</h3>
          </span>
        </template>

        <template v-else>
          <span class="">
            <span class="card-info">
              <h3 class="card-title">{{ post.title }}</h3>
              <h6
                v-if="post.createdAt"
                class="date"
              >{{ formatDate(post.createdAt) }}</h6>
            </span>
           
          </span>
        </template>
      </nuxt-link>
    </li>
  </ul>
  <div v-else-if="loading" class="cards">
    <div v-for="placeholder in placeholderClasses" :key="placeholder.id" class="card">
    
    </div>
  </div>
  <p v-else class="max-w-5xl mx-auto">
    {{ amount > 1 ? 'Posts not found' : 'Post not found' }}
  </p>
</template>

<script>
  export default {
    name: 'Posts',
    props: {
      postType: {
        type: String,
        default: 'blog',
        validator: (val) => ['blog', 'projects'].includes(val),
      },
      amount: { // ? https://content.nuxtjs.org/fetching#limitn
        type: Number,
        default: 10,
        validator: (val) => val >= 0 && val < 100,
      },
      sortBy: { // ? https://content.nuxtjs.org/fetching#sortbykey-direction
        type: Object,
        default: () => ({
          key: 'slug',
          direction: 'desc' // you probably want 'asc' here
        }),
        validator: (obj) => typeof obj.key === 'string' && typeof obj.direction === 'string',
      }
    },
    data() {
      return {
        posts: [],
        loading: true,
      }
    },
    computed: {
      placeholderClasses() {
        const classes = ['w-full','w-2/3','w-5/6'];
        return [...Array.from({ length: this.amount }, (v, i) => classes[i % classes.length])]; // repeats classes after one another
      }
    },
    async mounted() {
      this.loading = true;
      this.posts = await this.fetchPosts();
      this.loading = false;
    },
    methods: {
      formatDate(dateString) {
        const date = new Date(dateString)
        return date.toLocaleDateString(process.env.lang) || ''
      },
      async fetchPosts(
          postType = this.postType,
          amount = this.amount,
          sortBy = this.sortBy,
        ) {
        return this.$content(postType)
          .sortBy(sortBy.key, sortBy.direction)
          .limit(amount)
          .fetch()
          .catch((err) => console.error(err) || []);
      }
    },
  }
</script>

<style lang="scss">
.post-item {
  border: 1px solid red;
}
.card-link {
  border-bottom: none;

  &:hover, &:focus {
    border-bottom: none;
    box-shadow: none;
  }
}
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
    width: 48%;
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
   

    .category {
      background: #90edb3;
      width: fit-content;
      padding: 1px 5px;
      border-radius: 2px;
      font-size: .75rem;
    }

    .card-image {
      height: auto;
      width: 100%;
      overflow: hidden;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 6px 6px 0px 0px;
      opacity: 0.91;
    }

   .card-info {
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      padding: 1rem;
      line-height: 1.5em;

      .card-title {
        font-size: 1.3rem;
        margin-top: 1rem;
        font-weight: 700;
      }
    }
  }
}


</style>