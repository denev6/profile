<!--App.vue-->
<template>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <nav>
      <router-link to="/" class="nav-item">About</router-link>
      <router-link to="/project" class="nav-item">Project</router-link>
    </nav>
    <router-view></router-view>
    <transition name="fade">
      <img
        id="arrow-up"
        :src="'./icons/arrow-up.svg'"
        v-if="isEnd == true"
        @click="scrollUp"
      />
    </transition>
    <footer></footer>
  </body>
</template>
<script>
export default {
  data() {
    return {
      isEnd: false,
    };
  },
  mounted() {
    document.addEventListener("scroll", this.showScrollArrow);
  },
  methods: {
    scrollUp() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    showScrollArrow() {
      if (
        window.scrollY + window.innerHeight >=
        document.body.scrollHeight - 20
      ) {
        this.isEnd = true;
      } else {
        this.isEnd = false;
      }
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;900&display=swap");
html {
  margin: 0px;
}
body {
  width: 50%;
  margin: 0px auto;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
}
nav {
  width: 100%;
  height: 7rem;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  align-items: center;
  justify-content: flex-end;
}
nav > .nav-item {
  color: #475569;
  font-style: normal;
}
nav > .nav-item::after {
  content: "";
  display: block;
  margin: 0.3rem auto;
  width: 70%;
  border-top: 1px solid #94a3b877;
}
#arrow-up {
  position: fixed;
  width: 1.6rem;
  bottom: 50px;
  right: 50px;
  border-radius: 50px;
  opacity: 0.6;
  cursor: pointer;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active {
  animation: fadein 1s;
  -moz-animation: fadein 1s;
  -webkit-animation: fadein 1s;
}
.fade-leave-active {
  animation: fadeout 0.5s;
  -moz-animation: fadeout 0.5s;
  -webkit-animation: fadeout 0.5s;
}
footer {
  padding: 5rem;
}
@keyframes fadeout {
  from {
    opacity: 0.6;
  }
  to {
    opacity: 0;
  }
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.6;
  }
}
@media (max-width: 1024px) {
  body {
    width: 70%;
  }
}
@media (max-width: 640px) {
  body {
    width: 90%;
    margin-top: 5rem;
  }
  nav {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 3.5rem;
    font-size: 0.8rem;
    justify-content: space-evenly;
    background-color: #1e293b;
  }
  nav > .nav-item {
    color: #f8fafc;
  }
}
</style>
