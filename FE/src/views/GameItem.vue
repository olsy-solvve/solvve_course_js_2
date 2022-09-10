<template>
  <div>
    <div v-if="componentGame">
      <component :is="componentGame" @onresult="sendResult"></component>
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
  methods: {
    sendResult(event) {
      const { id } = this.$route.params;
      const { points } = event;

      console.log(id, points);
      // send to BE
    },
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
