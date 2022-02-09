<template>
  <button
    id="theme-toggle"
    type="button"
    class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
  >
    <DarkIcon />
    <LightIcon />
  </button>
</template>

<script setup>
import DarkIcon from "./icons/Dark.vue";
import LightIcon from "./icons/Light.vue";
</script>
