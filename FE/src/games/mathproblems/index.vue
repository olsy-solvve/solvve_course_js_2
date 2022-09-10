<script>
import Button from "primevue/button";
import InlineMessage from "primevue/inlinemessage";
import Chip from "primevue/chip";
import service from "../../service/SignService";

export default {
  data() {
    return {
      operand1: 0,
      operand2: 0,
      results: [],
      counterCorrect: 0,
      counterAll: 0,
      resultToStat: 0,
    };
  },

  methods: {
    async submitResult() {
      await service
        .updateStat({
          result: this.resultToStat,
        })
        .then((res) => {
          console.log(res);
        });
    },
    start() {
      this.operand1 = Math.floor(Math.random() * 100) + 1;
      this.operand2 = Math.floor(Math.random() * 100) + 1;
      //fill result array
      let tempResults = [];
      for (let i = 0; i < 4; i++) {
        tempResults[i] = Math.floor(Math.random() * 100) + 1;
      }
      //add right result
      this.results = [...tempResults, this.operand1 + this.operand2];
      //mix results
      this.results = this.results.sort(() => Math.random() - 0.5);
    },
    nextRound(e) {
      if (+e.target.value === this.operand1 + this.operand2) {
        this.counterCorrect++;
      }
      this.counterAll++;
      this.start();
    },
    finish() {
      if (this.counterAll * (this.counterCorrect / 100) >= 50) {
        this.resultToStat = 1;
        // this.$emit("end", true);
        // this.$emit("end", false);
      } else {
        this.resultToStat = 0;
      }
      this.submitResult();
      this.$router.push("/games");
    },
  },
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Button, InlineMessage, Chip },
};
</script>

<template>
  <div class="game3Section">
    <Button
      label="StartGame"
      v-if="this.operand1 === 0 && this.operand2 === 0"
      @click="start"
      class="p-button-rounded p-button-success startBtn"
    />
    <div v-if="this.counterAll > 0" class="resultMessage">
      <InlineMessage severity="success"
        >Your result is {{ this.counterCorrect }} from
        {{ this.counterAll }}</InlineMessage
      >
    </div>
    <div v-if="this.operand1 > 0 && this.operand2 > 0" class="taskSection">
      <Chip>{{ this.operand1 }} + {{ this.operand2 }} = ?</Chip>
    </div>
    <div class="resultSection">
      <Button
        v-for="item in results"
        v-bind:key="item"
        v-bind:value="item"
        v-on:click="nextRound($event)"
        class="p-button-rounded p-button-secondary"
      >
        {{ item }}
      </Button>
    </div>
    <Button
      label="Finish the game"
      v-if="this.operand1 > 0 && this.operand2 > 0"
      @click="finish"
      class="p-button-rounded p-button-success"
    />
  </div>
</template>

<style scoped>
.game3Section {
  padding: 50px;
  text-align: center;
}

.resultMessage {
  text-align: right;
  font-weight: bold;
}

.startBtn {
  width: 200px;
  height: 50px;
}

.taskSection {
  text-align: center;
  padding: 50px;
}

.taskSection .p-chip {
  padding: 10px 20px;
}

.resultSection {
  padding: 20px;
  margin-bottom: 30px;
  text-align: center;
}

.resultSection button {
  margin-left: 10px;
  margin-right: 10px;
  min-width: 70px;
  justify-content: center;
}
</style>
