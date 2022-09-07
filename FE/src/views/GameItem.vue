<template>
  <div>
    <div v-if="componentId">
      <component :is="componentId"></component>
    </div>
  </div>
</template>

<script>
import Game1 from "../games/IndexGame.vue";

export default {
  components: {
    Game1,
  },
  computed: {
    componentId() {
      return this.$route.params.id;
    },
  },
};
</script>
