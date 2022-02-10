<template>
  <div
    :class="[btn !== 'large' ? '' : 'col-span-2']"
    class="relative cursor-pointer"
  >
    <div
      :class="[
        color !== 'secondary'
          ? 'bg-yellow-500 dark:bg-purpletor-light text-white dark:text-yellowtor'
          : 'bg-white dark:bg-bluetor text-black',
      ]"
      class="relative z-10 rounded-md h-14 flex items-center justify-center text-xl"
    >
      {{ label }}
    </div>
    <div
      :class="[
        color !== 'secondary'
          ? 'bg-yellow-800 dark:bg-purpletor-lightest'
          : 'bg-gray-300 dark:bg-bluetor-light',
      ]"
      class="absolute -bottom-1 right-0 rounded-md h-14 w-full"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    label: {},
    color: {},
    btn: {},
  },
};
</script>
