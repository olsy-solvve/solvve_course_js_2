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
    <pButton type="button" @click="start">start</pButton>
    <p>{{ status }}</p>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import service from "../../service/SignService";
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
      console.log(this.result);
    },
    async submitResult() {
      this.$emit('end', this.result);
      // await service
      //   .updateStat({
      //     result: this.result,
      //   })
      //   .then((res) => {
      //     console.log(res);
      //   });
    },
  },
  created() {
    const route = useRoute();
    route.params.id = "guessthenumber";
    this.id = "guessthenumber";
  },
};
</script>
