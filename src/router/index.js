import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/AuthForm.vue";
import GameList from "../views/GameList.vue";
import UserProfile from "../views/UserProfile.vue";
import RegisterForm from "../views/RegisterForm.vue";
const index = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "games",
      component: GameList,
    },
    {
      path: "/auth",
      name: "auth",
      component: Auth,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterForm,
    },
    {
      path: "/profile",
      name: "profile",
      component: UserProfile,
    },
  ],
});

export default index;
