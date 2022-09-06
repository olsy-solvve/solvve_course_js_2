<script setup>
import ComponentHeader from "./components/ComponentHeader.vue";
import ComponentFooter from "./components/ComponentFooter.vue";
</script>

<template>
  <div>
    <ComponentHeader></ComponentHeader>
    <RouterView />
    <ComponentFooter></ComponentFooter>
  </div>
</template>

<style scoped></style>
