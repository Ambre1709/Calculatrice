<template>
  <div class="relative">
    <Darkmode />
    <Calculator />
    <Width class="absolute top-2 right-3" />
  </div>
</template>

<script>
import Darkmode from "./components/Darkmode.vue";
import Calculator from "./components/Calculator.vue";
import Width from "./components/Width.vue";
export default {
  components: {
    Darkmode,
    Calculator,
    Width,
  },
};
</script>
