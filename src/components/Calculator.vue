<template>
  <div class="mt-20 flex flex-row justify-center">
    <div
      class="bg-teal-600 dark:bg-purpletor-darkest w-96 text-white font-bold p-8 rounded-md"
    >
      <h2 class="h-10 text-2xl text-white dark:text-yellowtor mb-4">Calc</h2>

      <div
        class="overflow-auto h-28 break-words bg-teal-800 dark:bg-purpletor-dark text-white dark:text-yellowtor mb-8 rounded-md text-right text-2xl px-6 py-4"
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
            @click="clearAll()"
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
          class="relative overflow-auto bg-teal-800 dark:bg-purpletor-dark p-6 rounded-md h-[464px] text-right"
        >
          <div v-for="(history, n) in histories" :key="n">
            <div class="flex justify-end mb-2 pb-2 border-b-[1px] border-white">
              <span class="break-words overflow-auto max-h-24 mr-4">{{
                history
              }}</span>
              <div>
                <button
                  class="flex items-center justify-center rounded-full w-6 h-6"
                  @click="removeHistory(n)"
                >
                  <Delete class="text-red-500" />
                </button>
              </div>
            </div>
          </div>
          <!-- v-if="histories > 0" -->
          <button class="absolute bottom-2 right-6" @click="clearStorage()">
            Clear history
          </button>
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
import Delete from "./icons/Delete.vue";
export default {
  components: {
    Button,
    Delete,
  },
  data() {
    return {
      error: "",
      formule: "",
      result: 0,
      histories: [],
      equation: "",
      total: "",
    };
  },
  mounted() {
    if (localStorage.getItem("histories")) {
      try {
        this.histories = JSON.parse(localStorage.getItem("histories"));
      } catch (e) {
        localStorage.removeItem("histories");
      }
    }
  },
  methods: {
    removeHistory(x) {
      this.histories.splice(x, 1);
      this.saveHistories();
    },

    saveHistories() {
      const parsed = JSON.stringify(this.histories);
      localStorage.setItem("histories", parsed);
    },
    operate(element) {
      this.formule += element;
    },
    equal() {
      if (this.formule && this.result !== null) {
        try {
          this.result = eval(this.formule);
          if (eval(this.formule) == null) {
            this.result = null;
          }
        } catch (error) {
          this.error = "ERROR";
        }
        this.total = eval(this.formule);
        this.equation = this.formule + " = " + this.total;
        this.histories.push(this.equation);
        this.saveHistories();

        // this.formule = this.result;
      }
    },
    drop() {
      if (this.result !== null) {
        this.formule = this.formule.slice(0, -1);
      } else {
        this.formule = "";
        this.result = 0;
      }
      this.error = "";
    },
    clearAll() {
      this.error = "";
      this.formule = "";
      this.result = 0;
    },
    clearStorage() {
      localStorage.clear();
      this.histories = "";
      window.location.reload();
    },
  },
};
</script>
