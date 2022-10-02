<template>
  <div id="modal">
    <img src="@/assets/pyautogui3.png" />
    <div id="close-tab">아무 곳이나 클릭해 닫기</div>
  </div>
</template>

<style>
#modal {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  cursor: pointer;
}
#modal > img {
  max-width: 70%;
  max-height: 70%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#close-tab {
  position: fixed;
  top: 3rem;
  right: 3rem;
  font-weight: 300;
  font-size: 0.8rem;
  color: #ffffff;
  animation: blinker 2s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0.6;
  }
}
</style>
