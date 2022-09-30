import { createWebHistory, createRouter } from "vue-router";
import AboutComp from "./components/AboutComp.vue"
import ProjectComp from "./components/ProjectComp.vue"
import HappinessView from "./components/pages/HappinessView.vue"
import NaverView from "./components/pages/NaverView.vue"
import PincetteView from "./components/pages/PincetteView.vue"
import ProfileView from "./components/pages/ProfileView.vue"
import PyautoguiView from "./components/pages/PyautoguiView.vue"

const routes = [
    {
      path: "/",
      name: "about",
      component: AboutComp,
    },
    {
        path: "/project",
        name: "project",
        component: ProjectComp
    },
    {
      path: "/happiness",
      name: "happiness",
      component: HappinessView,
    },
    {
      path: "/naver-blog",
      name: "naver-blog",
      component: NaverView,
    },
    {
      path: "/pincette",
      name: "pincette",
      component: PincetteView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/pyautogui",
      name: "pyautogui",
      component: PyautoguiView,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;