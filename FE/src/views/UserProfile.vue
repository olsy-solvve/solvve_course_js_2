<template>
  <div>
    <div v-if="String(error).length > 0">
      <h1>{{ error }}</h1>
      <br />
      <pButton @click="this.$router.push('/auth')" label="Auth"> </pButton>
      <pButton @click="this.$router.push('/register')" label="Register">
      </pButton>
    </div>
    <div class="col-12">
      <div
        class="w-full flex align-items-start flex-column lg:justify-content-between lg:flex-row"
      >
        <div>
          <div class="font-medium text-3xl text-blue-500">User Profile</div>
          <div class="flex text-700 flex-wrap">
            <div class="mr-5 flex align-items-center mt-1">
              <i class="pi pi-users mr-2"></i>
              <span>332 Active Users</span>
            </div>
            <div class="mr-5 flex align-items-center mt-1">
              <i class="pi pi-globe mr-2"></i>
              <span>9402 Sessions</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid">
      <div class="col-12 lg:col-5">
        <div class="p-3 h-full">
          <div
            class="shadow-2 p-5 h-full flex flex-column surface-card"
            style="border-radius: 1px"
          >
            <div class="col-12 md:col-4">
              <div class="card">
                <pAvatar
                  image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
                  class="mr-2"
                  size="xlarge"
                  shape="circle"
                />
              </div>
            </div>

            <div class="text-900 font-medium text-xl mb-2">{{ userName }}</div>
            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
            <div class="flex align-items-center">
              <span class="ml-2 font-medium text-600">Online</span>
            </div>
            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
            <ul class="list-none p-0 m-0 flex-grow-1">
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-blue-500 mr-2"></i>
                <span>Name: {{ userName }}</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-blue-500 mr-2"></i>
                <span>Country: {{ country }}</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-blue-500 mr-2"></i>
                <span>Email: {{ email }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-12 lg:col-7">
        <div class="p-3 h-full">
          <div
            class="shadow-2 p-5 h-full flex flex-column surface-card"
            style="border-radius: 6px"
          >
            <div class="text-900 font-medium text-xl mb-2">Wins</div>
            <div class="text-600">The user has won {{ wins }} games</div>
            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
            <div class="flex align-items-center"></div>
            <div class="text-900 font-medium text-xl mb-2">Loses</div>
            <div class="text-600">The user has lost {{ loses }} games</div>
            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
            <div class="text-900 font-medium text-xl mb-2">Total</div>
            <div class="text-600">
              The user played {{ totalGames }} games in total
            </div>
            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
          </div>
        </div>
      </div>
    </div>
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
      wins: null,
      loses: null,
      totalGames: null,
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
          } else {
            this.email = res.data.email;
            this.country = res.data.country;
            this.wins = res.data.wins;
            this.loses = res.data.loses;
            this.totalGames = this.wins + this.loses;
          }
        })
        .catch((err) => {
          this.error = err;
        });
    },
    logout() {
      localStorage.removeItem("solvveusername");
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
