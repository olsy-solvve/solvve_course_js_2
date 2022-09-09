<template>
  <div v-if="started">
    <form @submit.prevent="submit">
      <div>
        <label>answer</label>
        <input v-model.number="answer" />
      </div>
      <button type="submit">check</button>
    </form>
    <p>{{ status }}</p>
  </div>
  <div v-else>
    <button type="button" @click="start">start</button>
    <p>{{ status }}</p>
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
      this.submitResult(this.result);
      console.log(this.result);
    },
    submitResult (result) {

    },
  },
  created() {
    const route = useRoute();
    route.params.id = "guessthenumber";
    this.id = "guessthenumber";
  },
};
</script>
