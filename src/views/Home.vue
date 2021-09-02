<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="{post, index} in sampleBlogPost" :key="index"/>
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View more recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>Never miss a post. Register for your free account today</h2>
        <router-link class="router-button" to="#">
          Register for FireBlog <Arrow class="arrow arrow-light"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost'
import BlogCard from '../components/BlogCard'
import Arrow from '../assets/Icons/arrow-right-light.svg'

export default {
  name: 'Home',
  components: { BlogPost, BlogCard, Arrow },
  data () {
    return {
      welcomeScreen: {
        title: 'welcome',
        blogPost: 'Weekly blog posts with all things programming including HTML, CSS, JavaScript and more. Register to never miss a post ',
        welcomeScreen: true,
        photo: 'coding'
      },
      sampleBlogPost: [
        {
          title: 'This is a fille title',
          blogHTML: 'this is a filler blog post title',
          blogCoverPhoto: 'beautiful-stories'
        },
        {
          title: 'This is a fille title',
          blogHTML: 'this is a filler blog post title',
          blogCoverPhoto: 'designed-for-everyone'
        }
      ]
    }
  },
  computed: {
    sampleBlogCards () {
      return this.$store.state.sampleBlogCards
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3{
    font-weight:300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    } 
  }
  .router-button {
    display: flex;
    font-size: 20px;
    text-decoration: none;
    @media(min-width: 800px){
      margin-left: auto;
    }
  }
  h2{
    font-weight: 300;
    font-size: 32px;
    max-width: 425px;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    @media(min-width: 800px){
      text-align: initial;
      font-size: 40px;
    }
  }
}
</style>