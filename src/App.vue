<script setup>
import ComponentHeader from "./components/ComponentHeader.vue";
import ComponentMain from "./components/ComponentMain.vue";
import RegisterForm from "./views/RegisterForm.vue";
import ComponentFooter from "./components/ComponentFooter.vue";
import AuthForm from "./views/AuthForm.vue";
</script>

<template>
  <div>
    <ComponentHeader></ComponentHeader>
    <RouterView />
    <RegisterForm></RegisterForm>
    <RouterView />
    <AuthForm></AuthForm>
    <ComponentFooter></ComponentFooter>
  </div>
</template>

<style scoped></style>
