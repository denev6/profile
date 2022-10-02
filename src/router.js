import { createWebHistory, createRouter } from "vue-router";
import AboutView from "./components/AboutView";
import ProjectView from "./components/ProjectView";
import NotFoundView from "./components/NotFoundView";
import NaverView from "./components/view/NaverView";
import PincetteView from "./components/view/PincetteView";
import ProfileView from "./components/view/ProfileView";
import PyautoguiView from "./components/view/PyautoguiView";

const routes = [
  {
    path: "/",
    name: "about",
    component: AboutView,
  },
  {
    path: "/profile",
    redirect: "/",
  },
  {
    path: "/project",
    name: "project",
    component: ProjectView,
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
    path: "/vue-page",
    name: "vue-page",
    component: ProfileView,
  },
  {
    path: "/pyautogui",
    name: "pyautogui",
    component: PyautoguiView,
  },
  {
    path: "/404",
    name: "notFoundView",
    component: NotFoundView,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

export default router;
