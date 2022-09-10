<template>
  <div>
    <div v-if="componentGame">
      <component :is="componentGame"></component>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameItem",
  data() {
    return {
      componentGame: null,
    };
  },
  async mounted() {
    const { id } = this.$route.params;
    if (id) {
      this.componentGame = await import(`../games/${id}/index.vue`).then(
        (component) => component.default
      );
    }
  },
};
</script>
