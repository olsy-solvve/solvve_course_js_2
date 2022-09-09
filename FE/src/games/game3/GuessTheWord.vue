<template>
  <div v-if="started">
    <form @submit.prevent="submit">
      <div>
        <label>Enter a letter</label>
        <input v-model="letter" />
      </div>
      <pButton type="submit">check</pButton>
    </form>
    <p>{{ notice }}</p>
    <h2>
      <p>{{ message }}</p>
    </h2>
  </div>
  <div v-else>
    <h1>Guess the word!</h1>
    <section>
      <pButton type="button" @click="start">Start</pButton>
    </section>
    <p>{{ notice }}</p>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      words: [
        "equation",
        "number",
        "diameter",
        "algebra ",
        "triangle",
        "pentagon",
        "volume",
      ],
      word: [],
      guess: "",
      answerArray: [],
      remainingLetters: 0,
      currentRemainingLetters: 0,
      started: false,
      message: "",
      letter: "",
      notice: "",
    };
  },
  computed: {
    formValid() {
      return +this.letter.length === 1;
    },
  },
  methods: {
    start() {
      console.log(this.words);
      this.word = this.words[Math.floor(Math.random() * this.words.length)];
      for (var i = 0; i < this.word.length; i++) {
        this.answerArray[i] = "*";
      }
      this.message = this.answerArray.join(" ");
      this.remainingLetters = this.word.length;
      this.started = true;
    },
    submit() {
      if (!this.formValid) {
        return;
      }
      if (this.remainingLetters > 0) {
        this.currentRemainingLetters = this.remainingLetters;
        this.message = this.answerArray.join(" ");
        for (let i = 0; i < this.word.length; i++) {
          if (this.word[i] === this.letter) {
            this.answerArray[i] = this.letter;
            this.remainingLetters--;
          }
        }
        if (this.remainingLetters === this.currentRemainingLetters) {
          this.notice = "No such letter";
        } else {
          this.notice = "There is a letter";
        }
      } else {
        this.notice = "Excellent! The word " + this.word + " was conceived";
        this.started = false;
      }
      this.message = this.answerArray.join(" ");
    },
  },
};
</script>
