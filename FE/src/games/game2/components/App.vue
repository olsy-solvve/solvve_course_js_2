<template>
  <div id="app">
    <div v-if="!this.$store.game.hasBegun">
      <h1>Sudoku</h1>
      <NewGame />
    </div>
    <Puzzle v-else />
    <Results v-if="this.$store.game.results !== undefined" />
  </div>
</template>

<script>
import Puzzle from "./Puzzle";
import NewGame from "./NewGame";
import Results from "./Results";

export default {
  name: "App",
  components: {
    Puzzle,
    NewGame,
    Results,
  },
};
</script>

<style>
:root {
  --gray-1: #222;
  --gray-2: #444;
  --gray-3: #666;
  --gray-4: #aaa;
  --gray-5: #ccc;
  --foreground: var(--gray-2);
  --background: white;
  --border-color: var(--gray-3);
  --border-color-dark: var(--gray-1);
  --border-width: 3px;
  --cell-size: 42px;
}

body {
  margin: 0;
  height: 100vh;
  font-family: "Space Mono", Monaco, monospace;
  font-variant-ligatures: no-common-ligatures;
  font-size: 14px;
  background: var(--background);
  color: var(--foreground);
}

#app {
  padding: 5%;
}
</style>
