<template>
  <div id="page-404">
    <img src="@/assets/logo.png" />
    <h2>페이지를 찾지 못했습니다</h2>
    <div>Page Not Found</div>
  </div>
</template>

<style>
#page-404 {
  text-align: center;
  margin-top: 5rem;
}
#page-404 > h2 {
  font-size: 2rem;
}

@media (max-width: 640px) {
  #page-404 > h2 {
    font-size: 1.6rem;
  }
}
</style>
