<script>
import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";

export default {
  data() {
    return {
      menuItems: [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          to: "/",
        },
        {
          label: "Games",
          icon: "pi pi-fw pi-tablet",
          to: "/games",
        },
        {
          label: "Profile",
          icon: "pi pi-fw pi-user",
          to: `/profile/${localStorage.getItem("solvveusername")}`,
        },
        {
          label: "Register",
          icon: "pi pi-fw pi-user",
          to: `/register`,
        },
      ],
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("solvveusername");
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
  components: { Menubar, InputText },
};
</script>

<template>
  <Menubar :model="menuItems">
    <router-link
      :to="item.to"
      custom
      v-slot="{ href, route, navigate, isActive, isExactActive }"
    >
      <a
        :href="href"
        @click="navigate"
        :class="{ 'active-link': isActive, 'active-link-exact': isExactActive }"
        >{{ route.fullPath }}</a
      >
    </router-link>
    <template #end>
      <pButton label="Quit" icon="pi pi-tablet" @click="() => logout()" />
      <InputText placeholder="Search" type="text" />
    </template>
  </Menubar>
</template>

<style></style>
