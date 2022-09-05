import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/AuthForm.vue";
import GameList from "../views/GameList.vue";
import GameItem from "../views/GameItem.vue";
import UserProfile from "../views/UserProfile.vue";
import RegisterForm from "../views/RegisterForm.vue";
import PageNotFound from "../views/PageNotFound.vue";
import SuccessLogin from "../views/SuccessLogin.vue";

const index = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/(games)?",
      name: "games",
      component: GameList,
    },
    {
      path: "/games/:id",
      name: "gameItem",
      component: GameItem,
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
    {
      path: "/*",
      name: "404",
      component: PageNotFound,
    },
    {
      path: "/success",
      name: "success",
      component: SuccessLogin,
    },
  ],
});

export default index;
