<template>
  <TitleComp :title="project.title" :tags="project.tags"></TitleComp>
  <article>
    <p>
      GitHub 코드 공개:
      <a href="https://github.com/Denev6/practice/tree/main/transformer" target="_blank"
        >github.com/Denev6/practice/transformer</a
      ><br />
    </p>
    <h3>프로젝트 요약</h3>
    <p>
      <ul>
        <li>영어 문장 감정 분류</li>
        <li>RoBERTa Fine-tuning</li>
        <li>데이터 전처리 및 성능 평가</li>
        <li>Transformers & PyTorch 활용</li>
      </ul>
    </p>
    <h3>BEST MODEL</h3>
    <p>
      <ul>
        <li>Accuracy: 0.80130</li>
        <li>F1-macro: 0.68277</li>
        <li>Batch Size: 16 * 16</li>
        <li>Model: emoberta-large</li>
      </ul>
    </p>
    <h3>기록</h3>
    <p>
      <ul>
        <li><a href="https://denev6.tistory.com/entry/transformers-emo-classify" target="_blank">프로젝트 전체 기록</a></li>
        <li><a href="https://denev6.tistory.com/entry/EmoBERTa" target="_blank">BASE 모델 학습 과정</a></li>
      </ul>
    </p>
  </article>
</template>

<script>
import project from "@/data/project";

export default {
  data() {
    return {
      project: project.transformer,
    };
  },
};
</script>

<style>
  article sub {
    font-weight: 300;
    color: #a3a3a3;
  }
</style>