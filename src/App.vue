<template>
  <body>
    <nav @click="displayNav()">
      <img id="nav-icon" src="@/icons/nav-arrow.svg" />
      <router-link to="/profile" class="nav_item">About</router-link>
      <router-link to="/project" class="nav_item">Project</router-link>
    </nav>

    <router-view v-slot="{ Component, route }">
      <transition name="fade_fast" mode="out-in" appear>
        <div :key="route.name" id="main-body">
          <component :is="Component"></component>
        </div>
      </transition>
    </router-view>
    <!--
    <transition name="fade_slow">
      <div id="tool-box" v-show="isBottom == true">
        <img id="tool_move-top" src="@/icons/arrow-up.svg" @click="scrollUp" />
      </div>
    </transition>
    -->

    <!-- margin at bottom of all pages -->
    <footer></footer>
  </body>
</template>

<script>
let timer;
function throttling(func, ms) {
  if (timer) {
    return;
  }
  timer = setTimeout(() => {
    func();
    timer = undefined;
  }, ms);
}

export default {
  data() {
    return {
      isBottom: false,
      toggleDown: false,
      navArrowDeg: 0,
    };
  },
  mounted() {
    this.initNavByWindow();
    // Event Listeners
    document.addEventListener("scroll", () => {
      throttling(this.showToolBox, 50);
    });
    window.addEventListener("resize", () => {
      throttling(this.initNavByWindow, 500);
    });
    /** Not sure which event-type to use.
    if (this.isMobile()) {
      const notNav = document.getElementById("main-body");
      notNav.addEventListener("touchstart", () => {
        if (this.toggleDown) {
          this.displayNav();
        }
      });
    }
    */
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
    isMobile() {
      if (window.innerWidth > 640) {
        return false;
      } else {
        return true;
      }
    },
    displayNav() {
      if (this.isMobile()) {
        if (this.toggleDown) {
          this.toggleDown = false;
          this._setNavRouterDisplay("none");
        } else {
          this.toggleDown = true;
          this._setNavRouterDisplay("block");
        }
        this.navArrowDeg += 180;
        this._rotateNavIcon(this.navArrowDeg);
      }
    },
    initNavByWindow() {
      if (this.isMobile()) {
        this.toggleDown = false;
        this.navArrowDeg = 0;
        this._setNavRouterDisplay("none");
        this._rotateNavIcon(this.navArrowDeg);
      } else {
        this._setNavRouterDisplay("block");
      }
    },
    _setNavRouterDisplay(display) {
      let navRouters = document.getElementsByClassName("nav_item");
      for (let i = 0; i < navRouters.length; i++) {
        navRouters[i].style.display = display;
      }
    },
    _rotateNavIcon(deg) {
      let navIcon = document.getElementById("nav-icon");
      navIcon.style.transform = `rotateX(${deg}deg) scaleX(-1)`;
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
::selection {
  background-color: #14b8a640;
}
body {
  max-width: 650px;
  margin: 0 auto;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  margin-top: 8rem;
}
a {
  color: #a3a3a3;
  text-decoration: none;
  font-style: italic;
  font-weight: 300;
}
nav {
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 4.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 1.8rem;
  padding-right: 4rem;
  background: linear-gradient(#ffffff, #fffffff0);
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  z-index: 99;
}
nav > #nav-icon {
  display: none;
}
nav > .nav_item {
  color: #404040;
  font-weight: 500;
  font-style: normal;
}
#tool-box {
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  bottom: 3rem;
  right: 3rem;
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
  nav > #nav-icon {
    display: block;
  }
  nav {
    cursor: pointer;
    height: min-content;
    padding: 1.2rem 2.4rem;
    flex-direction: column;
    align-items: flex-end;
    gap: 1.2rem;
  }
  #nav-icon {
    width: 1.2rem;
  }
  .nav_item {
    font-size: 1.2rem;
    font-weight: 500;
  }
  #tool-box {
    display: none;
  }
}
</style>
