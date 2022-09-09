<template>
  <div>
    <div v-if="id">
      <component :is="id" v-if="id === 'guessthenumber'">
        <FirstGame></FirstGame>
      </component>
      <!--      <component :is="id" v-if="id === 'sudoku'">-->
      <!--        <getCellMates></getCellMates>-->
      <!--      </component>-->
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import FirstGame from "../games/game1/FirstGame.vue";
// import {sudoku} from "../games/game2/utils";
// import {getCellMates} from "../games/game2/utils.js";

export default {
  name: "GameItem",
  data (){
    return {
      id: null,
    };
  },
  components: {
    FirstGame,
    // getCellMates,
  },
  computed: {
    id() {
      const route = useRoute();
      this.id = route.params.id;
      return route.params.id;
    },
  },
  created() {
    if (!localStorage.getItem("token")) {
      this.$router.push("/auth");
    }
  },
};
</script>
