<template>
  <div class="puzzle">
    <Grid />
    <Status />
  </div>
</template>

<script>
import Status from "./Status.vue";
import Grid from "./Grid.vue";

export default {
  name: "Puzzle",
  components: {
    Status,
    Grid,
  },
};
</script>

<style scoped>
.puzzle {
  display: flex;
  flex-wrap: wrap;
}
</style>
