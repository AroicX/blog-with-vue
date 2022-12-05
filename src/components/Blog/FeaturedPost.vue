<template>
  <div class="f_blog_featured">
    <div>
      <figure class="f_blog_featured--image">
        <img
          :src="data?.jetpack_featured_media_url"
          :data-url="data?.jetpack_featured_media_url"
          :alt="data?.slug"
        />
      </figure>
    </div>
    <div class="f_blog_featured-content">
      <div class="f_blog_featured-content--tag">
        <b>Front-end</b> <span> · {{ formatDate(data?.date) }}</span>
      </div>
      <h5 class="f_blog_featured-content--title">
        {{ decodeHtml(data?.title?.rendered) }}
      </h5>
      <p class="f_blog_featured-content--text">
        {{
          decodeHtml(
            truncateStringToLength(formatHtml(data.content.rendered), 300)
          )
        }}
      </p>

      <div class="f_blog_featured-content__bottom">
        <span>3 Min Read</span>

        <router-link
          :to="{
            name: 'SinglePost',
            params: { id: data?.id },
          }"
          >Read Full
          <img src="../../assets/svg/arrrow.svg" alt="arrow-svg" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script >
import {
  decodeHtml,
  formatDate,
  formatHtml,
  truncateStringToLength,
} from "../../helpers/index";

export default {
  name: "FeaturedPost",
  props: {
    data: {
      type: Object,
      default: {},
    },
  },
  methods: {
    decodeHtml,
    formatDate,
    truncateStringToLength,
    formatHtml,
  },
};
</script>

<style></style>
