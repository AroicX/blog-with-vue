<template>
  <main>
    <loader :isLoading="isLoading" />
    <div class="f_blog_single_post" v-if="!isLoading">
      <div class="f_blog_single_post--tag">
        <b>By Ryan Jackson</b> <span>{{ formatDate(post?.date) }}</span>
      </div>
      <h1 class="f_blog_single_post--title">
        {{ decodeHtml(post?.title?.rendered) }}
      </h1>
      <p class="f_blog_single_post--description" v-html="content"></p>

      <div class="f_blog_single_post--featured">
        <img
          class="f_blog_single_post--featured-image"
          :src="post?.jetpack_featured_media_url"
          :alt="post?.slug"
        />
      </div>
    </div>

    <div class="more-articles">
      <h4 class="more-articles--title">More Articles</h4>
      <post :posts="morePosts" />
    </div>
  </main>
</template>

<script>
import { formatDate, decodeHtml } from "@/helpers/index";
import Post from "@/components/Blog/Post.vue";
import blogService from "../services/blog/index";
import Loader from "@/components/Loader.vue";
export default {
  components: { Post, Loader },
  name: "SinglePost",
  data() {
    return {
      blogService: new blogService(),
      post: [],
      content: "",
      isLoading: true,
    };
  },
  computed: {
    morePosts() {
      return this.$store.getters["Modules/posts"];
    },
  },
  created() {
    window.scrollTo(0, 0);
    this.blogService = new blogService();
  },
  async beforeMount() {
    window.scrollTo(0, 0);
    await this.getSinglePost();
  },
  async beforeRouteUpdate() {
    window.scrollTo(0, 0);
    this.isLoading = true;
    this.getSinglePost();
  },
  methods: {
    formatDate,
    decodeHtml,
    async getSinglePost() {
      const response = await this.blogService.getSinglePost({
        id: this.$route.params.id,
      });
      const { data } = response;
      this.post = data;
      this.content = data.content.rendered;
      this.isLoading = false;
    },
  },
};
</script>
