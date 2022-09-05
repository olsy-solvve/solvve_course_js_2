<template>
  <div class="status">
    <p><strong>Difficulty:</strong> {{ difficulty }}</p>
    <p><strong>Mistakes:</strong> {{ mistakes }}</p>
    <p><strong>Numbers Remaining:</strong></p>
    <div class="numbers-remaining">
      <span
        v-for="number in numbersRemaining"
        :class="number.eliminated && 'eliminated'"
        :key="number.value"
        >{{ number.value }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Status",
  data() {
    return {
      difficulty: this.$store.game.difficulty.name,
    };
  },
  computed: {
    results() {
      return this.$store.game.results;
    },
    mistakes() {
      return `${this.$store.game.mistakes}/${this.$store.game.maxMistakes}`;
    },
    numbersRemaining() {
      return [...Array(9).keys()].map((key) => {
        const value = `${key + 1}`;
        return {
          value,
          eliminated: this.$store.grid
            .filter((cell) => {
              return cell.expectedValue === value;
            })
            .every((cell) => cell.value === cell.expectedValue),
        };
      });
    },
  },
};
</script>

<style scoped>
.status {
  padding-left: 1rem;
}

.numbers-remaining {
  width: 110px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
}

.numbers-remaining span {
  padding: 0.5em;
  position: relative;
  display: inline-block;
}

.numbers-remaining span.eliminated {
  color: var(--gray-4);
}

.numbers-remaining span.eliminated::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 70%;
  height: 1px;
  background: var(--gray-5);
  transform: translate(-50%, -50%) rotate(-30deg);
  mix-blend-mode: multiply;
}
</style>
