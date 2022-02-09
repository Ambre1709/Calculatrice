<template>
  <div class="">
    <h1 class="text-3xl font-bold my-20 text-center text-yellowtor">
      Hello world!
    </h1>
    <div class="container flex justify-center">
      <div class="bg-purpletor-darkest w-96 h-xl text-white font-bold p-8">
        <h2 class="text-2xl text-yellowtor mb-4">calc</h2>
        <div
          class="bg-purpletor-dark text-yellowtor mb-8 rounded-md text-right text-2xl pr-6 py-4"
        >
          <span class="text-base">{{ formule }}</span
          ><br />
          <span v-if="!error">{{ result }}</span
          ><span v-if="error">{{ error }}</span>
        </div>

        <div class="bg-purpletor-dark text-yellowtor p-6 rounded-md">
          <div class="grid grid-cols-4 gap-4">
            <div class="relative cursor-pointer" @click="operate(7)">
              <div
                class="relative z-10 bg-purpletor rounded-md h-14 flex items-center justify-center text-xl"
              >
                7
              </div>
              <div
                class="absolute -bottom-1 right-0 bg-purpletor-light rounded-md h-14 w-full"
              ></div>
            </div>
            <div class="relative cursor-pointer" @click="operate(8)">
              <div
                class="relative z-10 bg-purpletor rounded-md h-14 flex items-center justify-center text-xl"
              >
                8
              </div>
              <div
                class="absolute -bottom-1 right-0 bg-purpletor-light rounded-md h-14 w-full"
              ></div>
            </div>
            <div class="relative cursor-pointer" @click="operate(9)">
              <div
                class="relative z-10 bg-purpletor rounded-md h-14 flex items-center justify-center text-xl"
              >
                9
              </div>
              <div
                class="absolute -bottom-1 right-0 bg-purpletor-light rounded-md h-14 w-full"
              ></div>
            </div>
            <div class="text-white relative cursor-pointer" @click="drop()">
              <div
                class="relative z-10 bg-purpletor-light rounded-md h-14 flex items-center justify-center text-xl"
              >
                DEL
              </div>
              <div
                class="absolute -bottom-1 right-0 bg-purpletor-lightest rounded-md h-14 w-full"
              ></div>
            </div>
            <div class="relative cursor-pointer" @click="operate(4)">
              <div
                class="relative z-10 bg-purpletor rounded-md h-14 flex items-center justify-center text-xl"
              >
                4
              </div>
              <div
                class="absolute -bottom-1 right-0 bg-purpletor-light rounded-md h-14 w-full"
              ></div>
            </div>
            <div class="relative cursor-pointer" @click="operate(5)">
              <div
                class="relative z-10 bg-purpletor rounded-md h-14 flex items-center justify-center text-xl"
              >
                5
              </div>
              <div
                class="absolute -bottom-1 right-0 bg-purpletor-light rounded-md h-14 w-full"
              ></div>
            </div>
            <div class="relative cursor-pointer" @click="operate(6)">
              <div
                class="relative z-10 bg-purpletor rounded-md h-14 flex items-center justify-center text-xl"
              >
                6
              </div>
              <div
                class="absolute -bottom-1 right-0 bg-purpletor-light rounded-md h-14 w-full"
              ></div>
            </div>
            <div class="relative cursor-pointer" @click="operate('+')">
              <div
                class="relative z-10 bg-purpletor rounded-md h-14 flex items-center justify-center text-xl"
              >
                +
              </div>
              <div
                class="absolute -bottom-1 right-0 bg-purpletor-light rounded-md h-14 w-full"
              ></div>
            </div>
            <div class="relative cursor-pointer" @click="operate(1)">
              <div
                class="relative z-10 bg-purpletor rounded-md h-14 flex items-center justify-center text-xl"
              >
                1
              </div>
              <div
                class="absolute -bottom-1 right-0 bg-purpletor-light rounded-md h-14 w-full"
              ></div>
            </div>
            <div class="relative cursor-pointer" @click="operate(2)">
              <div
                class="relative z-10 bg-purpletor rounded-md h-14 flex items-center justify-center text-xl"
              >
                2
              </div>
              <div
                class="absolute -bottom-1 right-0 bg-purpletor-light rounded-md h-14 w-full"
              ></div>
            </div>
            <div class="relative cursor-pointer" @click="operate(3)">
              <div
                class="relative z-10 bg-purpletor rounded-md h-14 flex items-center justify-center text-xl"
              >
                3
              </div>
              <div
                class="absolute -bottom-1 right-0 bg-purpletor-light rounded-md h-14 w-full"
              ></div>
            </div>
            <div class="relative cursor-pointer" @click="operate('-')">
              <div
                class="relative z-10 bg-purpletor rounded-md h-14 flex items-center justify-center text-xl"
              >
                -
              </div>
              <div
                class="absolute -bottom-1 right-0 bg-purpletor-light rounded-md h-14 w-full"
              ></div>
            </div>
            <div class="relative cursor-pointer" @click="operate('.')">
              <div
                class="relative z-10 bg-purpletor rounded-md h-14 flex items-center justify-center text-xl"
              >
                .
              </div>
              <div
                class="absolute -bottom-1 right-0 bg-purpletor-light rounded-md h-14 w-full"
              ></div>
            </div>
            <div class="relative cursor-pointer" @click="operate(0)">
              <div
                class="relative z-10 bg-purpletor rounded-md h-14 flex items-center justify-center text-xl"
              >
                0
              </div>
              <div
                class="absolute -bottom-1 right-0 bg-purpletor-light rounded-md h-14 w-full"
              ></div>
            </div>
            <div class="relative cursor-pointer" @click="operate('/')">
              <div
                class="relative z-10 bg-purpletor rounded-md h-14 flex items-center justify-center text-xl"
              >
                /
              </div>
              <div
                class="absolute -bottom-1 right-0 bg-purpletor-light rounded-md h-14 w-full"
              ></div>
            </div>
            <div class="relative cursor-pointer" @click="operate('*')">
              <div
                class="relative z-10 bg-purpletor rounded-md h-14 flex items-center justify-center text-xl"
              >
                x
              </div>
              <div
                class="absolute -bottom-1 right-0 bg-purpletor-light rounded-md h-14 w-full"
              ></div>
            </div>
            <div class="relative cursor-pointer col-span-2" @click="cleanAll()">
              <div
                class="text-white relative z-10 bg-purpletor-light rounded-md h-14 flex items-center justify-center text-xl"
              >
                RESET
              </div>
              <div
                class="absolute -bottom-1 right-0 bg-purpletor-lightest rounded-md h-14 w-full"
              ></div>
            </div>
            <div class="relative cursor-pointer col-span-2" @click="equal()">
              <div
                class="text-black relative z-10 bg-bluetor rounded-md h-14 flex items-center justify-center text-xl"
              >
                =
              </div>
              <div
                class="absolute -bottom-1 right-0 bg-bluetor-light rounded-md h-14 w-full"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
