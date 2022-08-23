<script setup>
import ComponentHeader from "./components/ComponentHeader.vue";
import ComponentMain from "./components/ComponentMain.vue";
import ComponentFooter from "./components/ComponentFooter.vue";
</script>

<template>
  <div>
    <ComponentHeader></ComponentHeader>
    <ComponentMain></ComponentMain>
    <RouterView />
    <ComponentFooter></ComponentFooter>
  </div>
</template>

<style scoped></style>
