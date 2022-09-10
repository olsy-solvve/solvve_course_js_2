<template>
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
            A puzzle in which missing numbers are to be filled into a 9 by 9
            grid of squares which are subdivided into 3 by 3 boxes so that every
            row, every column, and every box contains the numbers 1 through 9.
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
      defaultImage:
        "https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png",
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
};
</script>

<style scoped></style>
          <pButton label="Play" />
        </template>
      </pCard>
    </div>
    <div class="col-4">
      <pCard>
        <template #header>
          <img
            src="https://play-lh.googleusercontent.com/q5lSxwHjIThHOMU3V7k28vSunN9qBSX-XY53tBtEJON3vdBvByBLC46iyLwzvM8cImxs"
            style="height: 15rem"
          />
        </template>
        <template #title> Guess The Number </template>
        <template #subtitle> Game description </template>
        <template #content>
          <p>
            You'll keep guessing numbers until you find the computer's number,
            and the and the computer will tell you each time if your guess was
            too high or too low. Simple game for kids and adults
          </p>
        </template>
        <template #footer>
          <pButton label="Play" />
          <pButton label="Play" @click="openGame(path)" />
        </template>
      </pCard>
    </div>
    <div class="col-4">
      <pCard>
        <template #header>
          <img
            src="https://ds-blobs-1.cdn.devapps.ru/5870169.png"
            style="height: 15rem"
          />
        </template>
        <template #title> Guess The Word </template>
        <template #subtitle> Game description </template>
        <template #content>
          <p>
            "Guess the Word" takes you back to your childhood to find your lost
            joy. An interesting way of presenting boring knowledge will help you
            develop the potential of your brain and start brainstorming.
          </p>
        </template>
        <template #footer>
          <pButton label="Play" />
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
      defaultImage:
        "https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png",
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
};
</script>

<style scoped></style>
