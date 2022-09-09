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
    <button type="button" @click="start">Start</button>
    <p>{{ status }}</p>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      rightAnswer: undefined,
      answer: 0,
      status: "",
      winner: 1,
      loser: 0,
      started: false,
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
        this.status = "You got it";
        this.winner = 1;
        this.started = false;
      } else if (answer < rightAnswer) {
        this.status = "Too low";
        this.loser = 0;
      } else {
        this.status = "Too high";
        this.loser = 0;
      }
    },
  },
};
</script>
