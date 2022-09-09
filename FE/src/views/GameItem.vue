<template>
  <div>
    <div v-if="componentId">
      <component :is="componentId"></component>
    </div>
  </div>
</template>

<script>
import Game1 from "../games/game1/FirstGame.vue";
//import Game2 from "../games/game2/";

export default {
  components: {
    Game1,
    //Game2,
  },
  computed: {
    componentId() {
      return this.$route.params.id;
    },
  },
};
</script>
