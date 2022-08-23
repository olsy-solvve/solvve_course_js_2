<script>
export default {
  data() {
    return {};
  },

  mounted() {},
};
</script>

<template>
  <header>
    <nav>
      <ul>
        <li v-for="(item, index) in menuItems" :key="index" @click="count++">
          {{ item.title }}
        </li>
      </ul>
    </nav>

    <b>{{ count }}</b>
  </header>
</template>

<style scoped>
ul {
  background-color: red;
}
</style>
