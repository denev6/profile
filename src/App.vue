<template>
  <body>
    <nav>
      <router-link to="/" class="nav_item">About</router-link>
      <router-link to="/project" class="nav_item">Project</router-link>
    </nav>

    <router-view v-slot="{ Component, route }">
      <transition name="fade_fast" mode="out-in" appear>
        <div :key="route.name">
          <component :is="Component"></component>
        </div>
      </transition>
    </router-view>

    <transition name="fade_slow">
      <div id="tool-box" v-show="isBottom == true">
        <router-link
          id="tool_router"
          v-if="$route.fullPath == '/'"
          to="/project"
          >다른 프로젝트 보기</router-link
        >
        <img id="tool_move-top" src="@/icons/arrow-up.svg" @click="scrollUp" />
      </div>
    </transition>

    <!-- margin at bottom of all pages -->
    <footer></footer>
  </body>
</template>

<script>
export default {
  data() {
    return {
      isBottom: false,
    };
  },
  mounted() {
    document.addEventListener("scroll", this.showToolBox);
  },
  methods: {
    scrollUp() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    showToolBox() {
      if (
        window.scrollY + window.innerHeight * 1.2 >=
        document.body.scrollHeight
      ) {
        this.isBottom = true;
      } else {
        this.isBottom = false;
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;900&display=swap");
html {
  margin: 0px;
  max-width: 100vw;
}
body {
  max-width: 600px;
  margin: 0 auto;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
}
a {
  color: #a3a3a3;
  text-decoration: none;
  font-style: italic;
  font-weight: 300;
}
nav {
  width: 100%;
  height: 7rem;
  display: flex;
  flex-direction: row;
  gap: 1.4rem;
  align-items: center;
  justify-content: flex-end;
  z-index: 99;
}
nav > .nav_item {
  color: #404040;
  font-style: normal;
}
nav > .nav_item::after {
  content: "";
  display: block;
  margin: 0.4rem auto;
  width: 70%;
  border-top: 1px solid #a3a3a377;
}
#tool-box {
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  bottom: 3rem;
  right: 3rem;
}
#tool_router {
  font-size: 0.8rem;
  font-style: normal;
  color: #404040;
}
#tool_move-top {
  width: 1.4rem;
  border-radius: 50%;
  padding: 1rem;
  cursor: pointer;
}

/* Page transition */
.fade_fast-enter-from {
  opacity: 0;
}
.fade_fast-enter-active {
  transition: opacity 0.4s ease-out;
}

/* tool-box animation */
.fade_slow-enter-from,
.fade_slow-leave-to {
  opacity: 0;
}
.fade_slow-leave-active,
.fade_slow-enter-active {
  transition: opacity 1s ease;
}

footer {
  padding: 4rem;
}

@media (max-width: 640px) {
  body {
    width: 90%;
    margin-top: 6rem;
    
    /* iOS - safe area */
    padding-left: constant(safe-area-inset-left);
    padding-right: constant(safe-area-inset-right);
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
  }
  nav {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 3.4rem;
    font-size: 0.8rem;
    justify-content: space-evenly;
    align-items: flex-end;
    padding-bottom: 0.5rem;
    background-color: #171717;
  }
  nav > .nav_item {
    color: #f5f5f5;
  }
  #tool-box {
    display: none;
  }
}
</style>
