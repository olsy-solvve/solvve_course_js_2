<script>
import Menubar from "primevue/menubar";
import InputText from 'primevue/inputtext';
import Chip from 'primevue/chip';

export default {
  data() {
    return {
      menuItems: [
        {
          label: "Statistics",
          icon: "pi pi-fw pi-calendar",
          to: "/statistic",
        },
        {
          label: "Nickname",
          icon: "pi pi-fw pi-user",
          to: "/profile",
        },
        {
          label: "Quit",
          icon: "pi pi-fw pi-power-off",
          to: "/auth",
        }
      ]
    }
  },
  components: { Menubar, InputText, Chip},
};
</script>

<template>
  <Menubar :model="menuItems">
    <template #start>
      <Chip label="My Games" icon="pi pi-tablet" />
    </template>
    <router-link :to="item.to" custom v-slot="{href, route, navigate, isActive, isExactActive}">
      <a :href="href" @click="navigate" :class="{'active-link': isActive, 'active-link-exact': isExactActive}">{{route.fullPath}}</a>
    </router-link>
    <template #end>
      <InputText placeholder="Search" type="text" />
    </template>
  </Menubar>
<!--  <RouterLink to="/auth">gjhgj</RouterLink>-->
  <router-link to="/auth">Go to Home</router-link>

</template>


<style></style>
