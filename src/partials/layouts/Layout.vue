<script>
export default {
  name: "Layout",
};
</script>

<template>
  <main>
    <div class="f_nav">
      <router-link to="/" class="f_nav--logo">
        <img src="../../assets/svg/logo.svg" alt="logo" />
      </router-link>

      <div class="f_nav--socials">
        <a class="f_nav--socials-content" href="#" target="_blank">
          <img src="../../assets/svg/twitter.svg" alt="twitter-icon" />
        </a>
        <span>·</span>
        <a class="f_nav--socials-content" href="#" target="_blank">
          <img src="../../assets/svg/dribbble.svg" alt="dribbble-icon" />
        </a>
        <span>·</span>
        <a class="f_nav--socials-content" href="#" target="_blank">
          <img src="../../assets/svg/figma.svg" alt="figma-icon" />
        </a>
        <span>·</span>
        <a class="f_nav--socials-content" href="#" target="_blank">
          <img src="../../assets/svg/github.svg" alt="github-icon" />
        </a>
      </div>
    </div>
    <router-view></router-view>
  </main>
</template>
