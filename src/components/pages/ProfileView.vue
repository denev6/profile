<template>
  <BaseView :title="project.title" :tags="project.tags"></BaseView>
  <div class="inner">
    <img src="@/assets/logo.png" />
    <h3>시작하게된 이유</h3>
    <p>
      저를 소개할 수 있는 페이지가 있으면 좋겠다고 생각했습니다. 과거 Jykell을
      사용해본 경험이 있어 잘 만들어진 Jykell 테마를 사용하려 했지만 제가 찾고
      있는 형식의 디자인을 찾지 못해 직접 제작하게 되었습니다.
    </p>
    <h3>디자인</h3>
    <p>
      이번 페이지를 제작하며 가장 신경 쓴 부분은 여백입니다. Jekyll이나 Tistory
      블로그를 직접 커스텀하면서 어떻게 해야 가독성이 높아질까를 고민했었습니다.
      과거에는 여러 장치를 채워 넣어 문제를 해결하려 했지만 기능을 확대하는 것이
      아니라 정보량을 줄여야 한다는 것을 알게 되었습니다. 따라서 여백을 활용해 공간을
      분리하고 정보를 조금씩 나누어 받아들일 수 있도록 제작하였습니다. 
    </p>
    <h3>제작 기술</h3>
    <p>
      블로그 형식의 글은 반복되는 단위의 디자인 많기 때문에 컴포넌트 단위로
      관리할 수 있는 Vue.js를 선택하였습니다. CSS는 Tailwindcss에서 제공하는
      색상 값이나 크기를 참고하였습니다. 처음에는 Post CSS 플러그인으로 사용하려 했으나 CSS가 많이
      필요하지 않았기 떄문에 값만 참고하여 CSS3로 작업하였습니다. 아이콘은
      Bootstrap Icons를 사용했고, 폰트는 구글 폰트를 통해 Noto Sans Kr을
      사용하였습니다. Tech-Stack에 사용된 로고는 Simple Icons를 사용하였습니다. 
      <ul>
        <li>Vue.js<span>: MIT License</span></li>
        <li>Tailwindcss<span>: MIT License</span></li>
        <li>Bootstrap Icons<span>: MIT License</span></li>
        <li>Noto Sans Kr<span>: OFL</span></li>
        <li>Simple Icons<span>: CC0 1.0 Universal</span></li>
      </ul>
    </p>
  </div>
</template>
<script>
import project from "@/project";
export default {
  data() {
    return {
      project: project.profile,
    };
  },
};
</script>
<style>
  ul > li > span {
    font-weight: 300;
    color: #64748b;
  }
</style>