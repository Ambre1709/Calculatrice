<template>
  <button
    @click="toggle()"
    type="button"
    class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
  >
    <DarkIcon v-if="!on" class="w-5 h-5" />
    <LightIcon v-else class="w-5 h-5" />
  </button>
</template>

<script>
import DarkIcon from "./icons/Dark.vue";
import LightIcon from "./icons/Light.vue";
export default {
  components: {
    DarkIcon,
    LightIcon,
  },
  data() {
    return {
      on: false,
    };
  },
  mounted() {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  },
  methods: {
    toggle() {
      if (localStorage.theme === "dark") {
        localStorage.theme = "light";
        document.documentElement.classList.remove("dark");
      } else {
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
      }
      this.on = !this.on;
    },
  },
};
</script>
