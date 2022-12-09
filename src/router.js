import { createWebHistory, createRouter } from "vue-router";
import AboutView from "./components/AboutView";
import ProjectView from "./components/ProjectView";
import NotFoundView from "./components/NotFoundView";
import PincetteView from "./components/view/PincetteView";
import ProfileView from "./components/view/ProfileView";
import PyautoguiView from "./components/view/PyautoguiView";
import TransformerView from "./components/view/TransformerView";

const routes = [
  {
    path: "/profile",
    name: "about",
    component: AboutView,
  },
  {
    path: "/",
    redirect: "/profile",
  },
  {
    path: "/project",
    name: "project",
    component: ProjectView,
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
    path: "/transformer",
    name: "transformer",
    component: TransformerView,
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
