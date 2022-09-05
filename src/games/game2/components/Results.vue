<template>
  <modal name="results" :clickToClose="false">
    <p>{{ message }}</p>
    <button v-if="$store.game.results === 'lost'" @click="$store.tryAgain()">
      Try Again
    </button>
    <NewGame />
  </modal>
</template>

<script>
import NewGame from "./NewGame";

export default {
  name: "Results",
  components: {
    NewGame,
  },
  data() {
    return {
      message: this.$store.game.results === "won" ? "You Won!" : "Game Over",
    };
  },
  mounted() {
    this.$modal.show("results");
  },
};
</script>
