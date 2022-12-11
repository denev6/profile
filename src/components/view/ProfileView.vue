<template>
  <TitleComp :title="project.title" :tags="project.tags"></TitleComp>
  <article>
    <img src="@/assets/logo.png" />
    <h3>페이지 소개</h3>
    <p>
      저를 소개하기 위해 제작한 프로필 페이지입니다. 
    </p>
    <h3>제작 기술</h3>
    <p>
      <ul>
        <li>Vue.js<span>: MIT License</span></li>
        <li>Tailwindcss<span>: MIT License</span></li>
        <li>Bootstrap Icons<span>: MIT License</span></li>
        <li>Noto Sans KR<span>: OFL</span></li>
        <li>Simple Icons<span>: CC0 1.0 Universal</span></li>
      </ul>
    </p>
    <h3>프로젝트 기록</h3>
    <p>
      <ul>
        <li>
          <a href="https://denev6.tistory.com/entry/Vue-profile" target="_blank">시작 계기 및 진행 과정</a>
        </li>
      </ul>
    </p>
  </article>
</template>

<script>
import project from "@/data/project";

export default {
  data() {
    return {
      project: project.profile,
    };
  }
};
</script>

<style>
  article p ~ ul > li > span {
    font-weight: 300;
    color: #a3a3a3;
  }
</style>