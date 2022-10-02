<template>
  <TitleComp :title="project.title" :tags="project.tags"></TitleComp>
  <article>
    <p>
      TIL 블로그와 관련 없이 별도로 운영하는 블로그입니다. 처음 프로그래밍을
      독학하며 궁금했던 점들을 기록하였습니다.<br /><br />
      네이버 블로그:
      <a href="https://blog.naver.com/music5038" target="_blank"
        >blog.naver.com/music5038</a
      >
    </p>
    <img src="@/assets/naver1.png" alt="#프로그래밍" />
    <h3>시작하게된 이유</h3>
    <p>
      모든분들이 그렇겠지만 저도 프로그래밍을 처음 시작할 때 많은 블로그와
      유튜브 강의의 도움을 받았습니다. 특히 저는 프로그래밍을 독학으로 시작했고
      주변에 물어볼 사람이 없어 답답한 상황이 많았습니다. 그래서 제가 경험했던
      일들을 바탕으로 프로그래밍 관련 정보를 쉽게 풀어냈습니다.
    </p>
    <p><br /># 인기글</p>
    <img src="@/assets/naver2.png" alt="프로그래밍 시작하기" />
    <img src="@/assets/naver3.png" alt="누적 조회수 1706회" />
  </article>
</template>

<script>
import project from "@/data/project";

export default {
  data() {
    return {
      project: project.naverBlog,
    };
  },
};
</script>
