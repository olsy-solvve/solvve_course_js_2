<template>
  <div class="new-game">
    <button v-if="!selectDifficulty" @click="selectDifficulty = true">New Game</button>
    <div class="button-group" v-if="selectDifficulty">
      <button
        v-for="option in difficulty.options"
        :key="option.value"
        :value="option.value"
        @click="startGame"
      >
        {{ option.name }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewGame",
  data() {
    return {
      selectDifficulty: false,
      difficulty: {
        options: [
          { name: "Easy", value: "easy" },
          { name: "Medium", value: "medium" },
          { name: "Hard", value: "hard" },
          { name: "Very Hard", value: "very-hard" },
          { name: "Insane", value: "insane" },
          { name: "Inhuman", value: "inhuman" },
        ],
      },
    };
  },
  methods: {
    startGame(e) {
      this.$store.startGame(
        this.difficulty.options.find(({ value }) => value === e.target.value)
      );
    },
  },
};
</script>

<style scoped>
.button-group {
  transition: opacity 1s;
}
</style>
