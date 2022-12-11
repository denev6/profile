<template>
  <TitleComp :title="project.title" :tags="project.tags"></TitleComp>
  <article>
    <p>
      GitHub 코드 공개:
      <a href="https://github.com/Denev6/image-data-crawler" target="_blank"
        >github.com/Denev6/image-data-crawler</a
      ><br />
    </p>
    <img src="@/assets/pincette1.png" />
    <h3>구현 기능</h3>
    <p>
      <ul>
        <li>이미지 크롤링 자동화</li>
        <li>응답 대기 시간, 스크롤 횟수 설정</li>
        <li>저장 파일 이름, 형식 등 포맷팅</li>
        <li>gif 이미지 분할</li>
        <li>이미지 크기, 색상 처리 및 압축</li>
      </ul>
    </p>
    <h3>제작 기술</h3>
    <p>
      <ul>
        <li>Selenium: <span>Apache License 2.0</span></li>
        <li>Pillow: <span>HPND License</span></li>
      </ul>
    </p>
    <h3>개선 방안</h3>
    <p>
      <ul>
        <li>Go를 활용한 비동기 처리 및 속도 향상</li>
      </ul>
    </p>
  </article>
</template>

<script>
import project from "@/data/project";

export default {
  data() {
    return {
      project: project.pincette,
    };
  },
};
</script>