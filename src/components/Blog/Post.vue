<template>
  <div class="f_blog_container">
    <div class="f_blog" v-for="post in posts" v-bind:key="post">
      <div class="f_blog_post">
        <div>
          <figure class="f_blog_post--image">
            <img
              :src="post.jetpack_featured_media_url"
              :data-url="post?.jetpack_featured_media_url"
              :alt="post.slug"
            />
          </figure>
        </div>
        <div class="f_blog_post-content">
          <div class="f_blog_post-content--tag">
            <b>Front-end</b> <span> · {{ formatDate(post.date) }}</span>
          </div>
          <h5 class="f_blog_post-content--title">
            {{ decodeHtml(post.title.rendered) }}
          </h5>

          <p class="f_blog_post-content--text">
            {{
              decodeHtml(
                truncateStringToLength(formatHtml(post.content.rendered), 200)
              )
            }}
          </p>

          <div class="f_blog_post-content__bottom">
            <span>3 Min Read</span>

            <router-link
              :to="{
                name: 'SinglePost',
                params: { id: post.id },
              }"
              >Read Full
              <img src="../../assets/svg/arrrow.svg" alt="arrow-svg" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import {
  formatDate,
  decodeHtml,
  formatHtml,
  truncateStringToLength,
} from "@/helpers/index";

export default {
  name: "Post",

  props: {
    posts: {
      type: Object,
      default: {},
    },
  },
  methods: {
    decodeHtml,
    formatHtml,
    formatDate,
    truncateStringToLength,
  },
};
</script>

<style></style>
