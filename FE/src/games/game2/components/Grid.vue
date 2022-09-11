<template>
  <div class="grid" @focusout="handleBlur">
    <Cell v-for="cell in $store.grid" v-bind="cell" :key="cell.id" />
  </div>
</template>

<script>
import Cell from "./Cell.vue";

export default {
  name: "Grid",
  components: {
    Cell,
  },
  methods: {
    handleBlur() {
      setTimeout(() => {
        if (!this.$el.contains(document.activeElement)) {
          this.$store.clearHighlights();
        }
      });
    },
  },
};
</script>

<style scoped>
.grid {
  display: flex;
  flex-flow: row wrap;
  width: calc((var(--cell-size)) * 9 + var(--border-width) * 2 + 6px);
  border: solid var(--border-width) var(--border-color-dark);
  background: var(--border-color-dark);
}
</style>
