<template>
  <h1
    class="text-3xl font-bold my-20 text-center text-black dark:text-yellowtor"
  >
    Hello world!
  </h1>
  <div class="container flex flex-row justify-center">
    <div
      class="bg-teal-600 dark:bg-purpletor-darkest w-96 text-white font-bold p-8 rounded-md"
    >
      <h2 class="h-10 text-2xl text-white dark:text-yellowtor mb-4">Calc</h2>

      <div
        class="bg-teal-800 dark:bg-purpletor-dark text-white dark:text-yellowtor mb-8 rounded-md text-right text-2xl pr-6 py-4"
      >
        <span class="text-base">{{ formule }}</span
        ><br />
        <span v-if="!error">{{ result }}</span
        ><span v-if="error">{{ error }}</span>
      </div>

      <div class="bg-teal-800 dark:bg-purpletor-dark p-6 rounded-md">
        <div class="grid grid-cols-4 gap-4">
          <Button label="7" @click="operate(7)" />
          <Button label="8" @click="operate(8)" />
          <Button label="9" @click="operate(9)" />
          <Button color="secondary" label="DEL" @click="drop()" />
          <Button label="4" @click="operate(4)" />
          <Button label="5" @click="operate(5)" />
          <Button label="6" @click="operate(6)" />
          <Button label="+" @click="operate('+')" />
          <Button label="1" @click="operate(1)" />
          <Button label="2" @click="operate(2)" />
          <Button label="3" @click="operate(3)" />
          <Button label="-" @click="operate('-')" />
          <Button label="." @click="operate('.')" />
          <Button label="0" @click="operate(0)" />
          <Button label="/" @click="operate('/')" />
          <Button label="x" @click="operate('*')" />
          <Button
            color="secondary"
            btn="large"
            label="RESET"
            @click="cleanAll()"
          />
          <Button color="secondary" btn="large" label="=" @click="equal()" />
        </div>
      </div>
    </div>

    <div class="bg-teal-800 dark:bg-purpletor-dark w-4 rounded-md"></div>

    <div
      class="flex flex-col justify-between bg-teal-600 dark:bg-purpletor-darkest w-96 text-white font-bold p-8 rounded-md"
    >
      <div class="h-full">
        <h2 class="h-10 text-2xl text-white dark:text-yellowtor mb-4">
          History
        </h2>

        <div
          class="overflow-auto bg-teal-800 dark:bg-purpletor-dark p-6 rounded-md h-5/6 text-right"
        >
          <span class="text-base">{{ formule }}</span
          ><br />
          <span v-if="!error">{{ result }}</span
          ><span v-if="error">{{ error }}</span>
        </div>
      </div>
      <div
        class="bg-teal-800 dark:bg-purpletor-dark px-4 py-2 rounded-md text-center text-sm flex justify-between"
      >
        <div>Copyright © 2022</div>
        <div>Ambre Vanneuville</div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: {
    Button,
  },
  data() {
    return {
      error: "",
      formule: "",
      result: 0,
    };
  },
  methods: {
    operate(element) {
      this.formule += element;
    },
    equal() {
      try {
        this.result = eval(this.formule);
      } catch (error) {
        this.error = "ERROR";
      }
    },
    drop() {
      this.formule = this.formule.slice(0, -1);
      this.error = "";
    },
    cleanAll() {
      this.error = "";
      this.formule = "";
      this.result = 0;
    },
  },
};
</script>
