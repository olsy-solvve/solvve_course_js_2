<template>
  <div>
    <h1>Hi {{ userName }}</h1>
    <ul>
      <li>{{ userName }}</li>
      <li>{{ email }}</li>
      <li>{{ country }}</li>
    </ul>
    {{ error }}
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import service from "../service/SignService";

export default {
  name: "UserProfile",
  data() {
    return {
      userName: "",
      email: "",
      country: "",
      error: "",
    };
  },
  mounted() {},
  created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/auth");
    }
    const route = useRoute();
    this.userName = route.params.name;
    this.getInfo();
  },
  methods: {
    async getInfo() {
      await service
        .getUserInfo({
          name: this.userName,
        })
        .then((res) => {
          if (String(res).split(" ")[0] === "Error:") {
            this.error = res;
          }else {
            this.email = res.data.email;
            this.country = res.data.country;
          }
        })
        .catch((err) => {
          this.error = err;
        });
    },
  },
};
</script>

<style scoped></style>
