<template>
  <main>
    <div class="loader" v-if="isLoading">
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Loader",
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
