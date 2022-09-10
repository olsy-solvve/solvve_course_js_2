<template>
  <div class="text-4xl text-primary">Choose your game</div>
  <br />
  <div class="grid">
    <div class="col-4">
      <pCard>
        <template #header>
          <img
            src="https://store-images.s-microsoft.com/image/apps.20177.9007199266246402.7c18c93d-0b98-4bdb-8459-2bf2a69a1bbf.84b8a60e-d086-4293-a29b-f3ad993e5fab?mode=scale&q=90&h=1080&w=1920"
            style="height: 15rem"
          />
        </template>
        <template #title> Sudoku </template>
        <template #subtitle> Game description </template>
        <template #content>
          <p>
            A puzzle in which missing numbers are to be filled into a 9 by 9
            grid of squares which are subdivided into 3 by 3 boxes so that every
            row, every column, and every box contains the numbers 1 through 9.
          </p>
        </template>
        <template #footer>
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
            "Guess the Word" takes you back to your childhood to find your lost joy. 
            An interesting way of presenting boring knowledge will help you develop 
            the potential of your brain and start brainstorming. 
          </p>
        </template>
        <template #footer>
          <pButton label="Play" />
        </template>
      </pCard>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
