<template>
  <div>
    <div v-if="componentGame">
      <component :is="componentGame" @end="sendResult"></component>
    </div>
  </div>
</template>

<script>
import service from "../service/SignService.js";
export default {
  name: "GameItem",
  data() {
    return {
      componentGame: null,
    };
  },
  methods: {
    async sendResult(isWinner) {
      if (localStorage.getItem("solvveusername")) {
        await service
          .updateStat({
            result: isWinner,
          })
          .then((res) => {
            console.log(res);
          });
      }
    },
  },
  async mounted() {
    const { id } = this.$route.params;
    if (id) {
      if (String(id) === "game2") {
        this.componentGame = await import(
          `../games/${id}/components/App.vue`
        ).then((component) => component.default);
      }
      this.componentGame = await import(`../games/${id}/index.vue`).then(
        (component) => component.default
      );
    }
  },
};
</script>
