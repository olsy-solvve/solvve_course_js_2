<template>
  <div
    class="text-gray-600 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wra"
  >
    <div class="lg:justify-content-center align-items-center" v-if="started">
      <form @submit.prevent="submit">
        <div
          class="p-fluid grid formgrid lg:justify-content-center align-items-center"
        >
          <div class="field col-12 md:col-6">
            <label>
              <p class="text-blue-700 font-bold text-3xl text-center">
                I am thinking of number between 1-100
              </p>
              <p class="text-center">Can you guess it?</p>
            </label>
            <pInputNumber inputId="integeronly" v-model.number="answer" />
            <br />
            <br />
            <pButton
              class="p-button"
              style="bg-center text-center"
              type="button "
              >check</pButton
            >
          </div>
        </div>
        <br />
      </form>
      <p class="text-center">{{ status }}</p>
    </div>
    <div v-else>
      <pButton class="p-button-rounded" type="button " @click="start"
        >Start</pButton
      >
      <p class="text-center">{{ status }}</p>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
export default {
  name: "App",
  data() {
    return {
      rightAnswer: undefined,
      answer: 0,
      status: "",
      started: false,
      id: "guessthenumber",
      result: null,
    };
  },
  computed: {
    formValid() {
      return +this.answer >= 0;
    },
  },
  methods: {
    start() {
      this.rightAnswer = Math.ceil(Math.random() * 10);
      console.log(this.rightAnswer);
      this.started = true;
    },
    submit() {
      if (!this.formValid) {
        return;
      }
      const { answer, rightAnswer } = this;
      if (answer === rightAnswer) {
        this.status = "you got it";
        this.result = 1;
        this.started = false;
      } else if (answer < rightAnswer) {
        this.status = "too low";
        this.result = 0;
        this.started = false;
      } else {
        this.status = "too high";
        this.result = 0;
        this.started = false;
      }
      this.submitResult();
    },
    async submitResult() {
      this.$emit("end", this.result);
    },
  },
  created() {
    const route = useRoute();
    route.params.id = "guessthenumber";
    this.id = "guessthenumber";
  },
};
</script>
