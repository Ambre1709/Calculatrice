<template>
  <div class="mt-20 flex justify-center">
    <div class="relative flex flex-row">
      <div
        class="border-2 border-teal-800 dark:border-gray-500 bg-teal-600 dark:bg-gray-900 w-96 text-white font-bold p-8 rounded-md"
      >
        <div class="h-10 mb-4 flex items-center justify-between">
          <h2 class="text-2xl text-white">Calc</h2>
          <history @click="open = !open" class="w-6 h-6 cursor-pointer" />
        </div>

        <div
          class="overflow-auto scrollbar scrollbar-thumb-teal-900 dark:scrollbar-thumb-orange-300 dark:scrollbar-track-gray-200 scrollbar-track-teal-100 h-28 break-words bg-teal-800 dark:bg-gray-700 text-white mb-8 rounded-md text-right text-2xl px-6 py-4"
        >
          <span class="text-base">{{ formule }}</span
          ><br />
          <span v-if="!error">{{ result }}</span
          ><span v-if="error">{{ error }}</span>
        </div>

        <div class="bg-teal-800 dark:bg-gray-700 p-6 rounded-md">
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

      <div
        :class="[open ? 'hidden lg:block' : 'hidden']"
        class="w-4 rounded-md bg-teal-800 dark:bg-gray-500"
      ></div>

      <div
        :class="[
          open
            ? 'z-10 absolute top-0 left-0 lg:block lg:relative h-full'
            : 'hidden',
        ]"
        class="border-2 border-teal-800 dark:border-gray-500 flex flex-col justify-between bg-teal-600 dark:bg-gray-900 w-96 text-white font-bold p-8 rounded-md"
      >
        <div>
          <div class="h-10 mb-4 flex items-center justify-between">
            <h2 class="text-2xl text-white">History</h2>
            <history
              @click="open = !open"
              :class="[open ? 'block lg:hidden' : 'hidden']"
              class="w-6 h-6 cursor-pointer"
            />
          </div>

          <div
            class="overflow-auto scrollbar scrollbar-thumb-teal-900 dark:scrollbar-thumb-orange-300 dark:scrollbar-track-gray-200 scrollbar-track-teal-100 bg-teal-800 dark:bg-gray-700 p-6 rounded-md h-[464px] text-right"
          >
            <template v-if="histories > []">
              <button class="mb-4 flex items-center" @click="clearStorage()">
                <Delete class="mr-1 text-white" /> Clear all
              </button>
            </template>
            <div class="flex flex-col-reverse">
              <div
                class="last:text-2xl text-sm"
                v-for="(history, n) in histories"
                :key="n"
              >
                <div
                  @click="modify(n)"
                  class="cursor-pointer flex justify-end mb-2 pb-2 border-b-[1px] border-white"
                >
                  <span class="break-words max-h-24 mr-4">{{ history }}</span>
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
            </div>
          </div>
        </div>
        <div
          class="absolute bottom-8 left-8 w-[316px] bg-teal-800 dark:bg-gray-700 px-4 py-2 rounded-md text-center text-sm flex justify-between"
        >
          <div>Copyright © 2022</div>
          <div>Ambre Vanneuville</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import Delete from "./icons/Delete.vue";
import History from "./icons/History.vue";
export default {
  components: {
    Button,
    Delete,
    History,
  },
  data() {
    return {
      error: "",
      formule: "",
      result: 0,
      histories: [],
      equation: "",
      total: "",
      open: false,
    };
  },

  mounted() {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.equal();
      }
      if (event.key === "0") {
        this.operate(0);
      }
      if (event.key === "1") {
        this.operate(1);
      }
      if (event.key === "2") {
        this.operate(2);
      }
      if (event.key === "3") {
        this.operate(3);
      }
      if (event.key === "4") {
        this.operate(4);
      }
      if (event.key === "5") {
        this.operate(5);
      }
      if (event.key === "6") {
        this.operate(6);
      }
      if (event.key === "7") {
        this.operate(7);
      }
      if (event.key === "8") {
        this.operate(8);
      }
      if (event.key === "9") {
        this.operate(9);
      }
      if (event.key === "Backspace") {
        this.drop();
      }
      if (event.key === "-") {
        this.operate("-");
      }
      if (event.key === "+") {
        this.operate("+");
      }
      if (event.key === "/") {
        this.operate("/");
      }
      if (event.key === "*") {
        this.operate("*");
      }
      if (event.key === ".") {
        this.operate(".");
      }
      if (event.key === "Delete") {
        this.clearAll();
      }
    });

    if (localStorage.getItem("histories")) {
      try {
        this.histories = JSON.parse(localStorage.getItem("histories"));
      } catch (e) {
        localStorage.removeItem("histories");
      }
    }
  },
  methods: {
    modify(x) {
      let history = JSON.parse(localStorage.histories);
      console.log(history[x]);
      // console.log(history);
    },

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
    equal(x) {
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
        // Afficher uniquement les 10 derniers résultats
        if (this.histories.length > 10) {
          this.histories.splice(x, 1);
        }
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
      localStorage.removeItem("histories", []);
      this.histories = "";
      window.location.reload();
      // this.$emit("refresh");
    },
  },
};
</script>
