<template>
  <br />
  <div class="text-4xl text-primary">Choose your game</div>
  <br />
  <div class="grid">
    <div v-for="(game, path) in games" :key="path" class="col-4">
      <pCard>
        <template #header>
          <pImage
            :src="getImage(game.image)"
            width="240"
            height="240"
            :imageStyle="{ objectFit: 'cover' }"
            :alt="game.title"
          />
        </template>
        <template #title> {{ game.title || "No title" }} </template>
        <template #content>
          <p>
            {{ game.description || "no description" }}
          </p>
        </template>
        <template #footer>
          <pButton label="Play" @click="openGame(path)" />
        </template>
      </pCard>
    </div>
  </div>
</template>

<script>
const components = import.meta.globEager("@/games/*/info.json");

export default {
  data() {
    return {
      games: components,
      defaultImage: "https://img.kpopmap.com/2017/12/seola-wjsn-birthday.jpg",
      username: "",
    };
  },
  methods: {
    openGame(path) {
      const id = path.replace(/^.*\/([^/]+)\/info.json/, "$1");
      return this.$router.push(`/games/${id}`);
    },
    getImage(imgPath) {
      if (!imgPath) {
        return this.defaultImage;
      }

      if (imgPath.indexOf("http") === 0) {
        return imgPath;
      }

      return new URL(`${imgPath}`, import.meta.url);
    },
  },
  created() {
    this.username = localStorage.getItem("solvveusername");
  },
};
</script>

<style scoped>
#co {
  max-height: 40px;
}
</style>
