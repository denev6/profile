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
  </body>
  <footer></footer>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;900&display=swap");

body {
  width: 50vw;
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
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #475569;
}
footer {
  margin-top: 5rem;
}
@media (max-width: 1024px) {
  body {
    width: 70vw;
  }
}
@media (max-width: 640px) {
  body {
    width: 95vw;
  }
}
</style>
