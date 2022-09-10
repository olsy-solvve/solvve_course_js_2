<template>
  <div>
    <div v-if="componentGame">
      <component :is="componentGame" @end="sendResult"></component>
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
    sendResult(isWinner) {
      const { id } = this.$route.params;

      console.log(id, isWinner);

       // await service
      //   .updateStat({
      //     result: this.result,
      //   })
      //   .then((res) => {
      //     console.log(res);
      //   });
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
