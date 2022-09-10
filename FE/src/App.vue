<script setup>
import ComponentHeader from "./components/ComponentHeader.vue";
import ComponentFooter from "./components/ComponentFooter.vue";
</script>

<template>
  <div class="flex flex-column justify-content-between container">
    <ComponentHeader></ComponentHeader>
    <RouterView />
    <ComponentFooter></ComponentFooter>
  </div>
</template>
