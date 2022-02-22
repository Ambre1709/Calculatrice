<template>
  <p class="text-right text-gray-700 dark:text-gray-300">
    Width: {{ window.width }} px<br />
    Height: {{ window.height }} px
  </p>
</template>

<script>
export default {
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
};
</script>
