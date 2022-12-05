<script lang="js">
import FeaturedPost from "@/components/Blog/FeaturedPost.vue";
import Join from "@/components/Blog/Join.vue";
import Post from "@/components/Blog/Post.vue";
import blogService from "../services/blog/index";
import Loader from "@/components/Loader.vue";

export default {
  components: { FeaturedPost, Join, Post, Loader },
  name: "Blog",
  data() {
    return {
      blogService: new blogService(),
      countPerPage: 10,
      currentPage: 1,
      posts: [],
      isLoading: false,
      featured: null,
    };
  },
  created() {
    this.blogService = new blogService();
  },
  async beforeMount() {
    this.isLoading = true;
    await this.getBlogPost();
  },
  async mounted() {
    await this.getFeaturedPost();
    await this.getMorePosts();
  },
  methods: {
    async getFeaturedPost() {
      const response = await this.blogService.getSinglePost({ id: "2451863" });
      const { data } = response;
      this.featured = data;
    },
    async getBlogPost() {
      const params = {
        countPerPage: this.countPerPage,
        currentPage: this.currentPage,
      };
      const response = await this.blogService.getBlogPost(params);
      const { data } = response;
      let post = this.posts.concat(data);
      this.posts = post;
      this.$store.commit("Modules/posts", this.posts);
      this.isLoading = false;
    },
    async getMorePosts() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.isLoading = true;
          this.currentPage++;

          setTimeout(() => {
            this.getBlogPost();
          }, 2000);
        }
      };
    },
  },
};
</script>

<template>
  <main>
    <div class="f_blog">
      <featured-post v-if="featured != null" :data="featured" />
      <post v-if="posts" :posts="posts" />

      <loader :isLoading="isLoading" />
    </div>
    <join />
  </main>
</template>
