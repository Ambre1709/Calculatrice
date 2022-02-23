<template>
  <div
    :class="[btn !== 'large' ? '' : 'col-span-2']"
    class="relative cursor-pointer"
  >
    <div
      v-on:mousedown="down"
      v-on:mouseup="up"
      :class="[
        color !== 'secondary'
          ? 'bg-yellow-500 dark:bg-gray-500 text-white '
          : 'bg-white dark:bg-orange-300 text-black dark:text-white',
      ]"
      class="relative z-10 rounded-md h-14 flex items-center justify-center text-xl"
    >
      {{ label }}
    </div>
    <div
      v-show="!showShadow"
      :class="[
        color !== 'secondary'
          ? 'bg-yellow-800 dark:bg-gray-800'
          : 'bg-gray-300 dark:bg-yellow-700',
      ]"
      class="absolute -bottom-1 right-0 rounded-md h-14 w-full"
    ></div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      showShadow: false,
    };
  },
  props: {
    label: {},
    color: {},
    btn: {},
  },
  methods: {
    down() {
      this.showShadow = true;
    },
    up() {
      this.showShadow = false;
    },
  },
};
</script>
