<template>
  <div class="wrapper">
    <h2 class="flex justify-content-between">
      <b>Lira Game (by Olsy)</b>
      <span>
        Current level: {{ count }} / {{ levelMax }}
        <pButton
          icon="pi pi-info"
          class="p-button-sm p-button-rounded p-button-info ml-3"
          @click="isOpenInfo = true"
        />
        <pDialog
          :visible="isOpenInfo"
          header="Information!"
          :style="{ width: 'min(90vw, 300px)' }"
        >
          <p>
            When you click on a cell, that cell and 4 adjacent ones change their
            color to the opposite.
          </p>
          <p>
            It is necessary to fill the entire field with cells of the same
            color
          </p>
          <template #footer>
            <pButton label="Thanks" @click="closeInfo"></pButton>
          </template>
        </pDialog>
      </span>
    </h2>
    <div class="flex justify-content-center my-4">
      <div class="flex flex-column game-olsy">
        <div v-for="(row, i) in arr" :key="i" class="flex flex-row flex-1 my-2">
          <div
            v-for="(ceil, j) in row"
            :key="i * count + j"
            class="flex flex-1 mx-2 border-round"
            :class="ceil ? 'bg-cyan-600' : 'bg-purple-500'"
            @click="change(i, j)"
          ></div>
        </div>
      </div>
    </div>
    <pDialog
      :visible="isFinished"
      header="Amazing!"
      :style="{ width: 'min(90vw, 300px)' }"
    >
      Let's go next level?
      <template #footer>
        <pButton label="Yes!" @click="restart"></pButton>
      </template>
    </pDialog>
  </div>
</template>

<script>
import { get } from "lodash";
export default {
  data() {
    return {
      count: 2,
      arr: [],
      isFinished: false,
      isOpenInfo: true,
      gameIsStarted: false,
      levelMax: 6,
    };
  },
  methods: {
    isChecked(x, y) {
      return this.arr[x][y];
    },
    restart() {
      this.gameIsStarted = true;
      this.reset(this.count + 1);
    },
    reset(size) {
      this.arr = Array.from({ length: size }, () =>
        Array.from({ length: size }, () => false)
      );
      this.count = size;
      this.suffle();
      // this.isFinished = false;
    },
    suffle() {
      for (let i = 0; i < this.count * 2; i++) {
        this.change(
          Math.floor(Math.random() * this.count),
          Math.floor(Math.random() * this.count)
        );
      }
    },
    change(x, y) {
      this.toggleCeil(x, y);
      this.toggleCeil(x - 1, y);
      this.toggleCeil(x + 1, y);
      this.toggleCeil(x, y - 1);
      this.toggleCeil(x, y + 1);

      this.isFinished = this.checkStatus();

      if (this.isFinished && this.count === this.levelMax) {
        this.$emit("end", true);
        // this.$emit("end", false);
      }
    },
    toggleCeil(x, y) {
      const currentVal = get(this.arr, `${x}.${y}`);

      if (typeof currentVal === "undefined") {
        return;
      }

      this.arr[x][y] = !currentVal;
    },
    checkStatus() {
      const status = this.arr[0][0];
      return this.arr.every((row) => row.every((ceil) => ceil === status));
    },
    closeInfo() {
      this.isOpenInfo = false;
      if (!this.gameIsStarted) {
        this.isFinished = true;
      }
    },
  },
};
</script>
<style scoped lang="scss">
.game-olsy {
  --field-size: min(90vh, 90vw);
  width: var(--field-size);
  height: var(--field-size);
  > div {
    > div {
      transition: background-color 0.1s;
      box-shadow: inset 0 0 2rem rgba(255, 255, 255, 0.6);
    }
  }
}
</style>
