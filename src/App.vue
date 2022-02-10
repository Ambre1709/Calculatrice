<template>
  <div class="">
    <Darkmode />
    <Calculator />
  </div>
</template>

<script>
import Darkmode from "./components/Darkmode.vue";
import Calculator from "./components/Calculator.vue";
export default {
  components: {
    Darkmode,
    Calculator,
  },
};
</script>
