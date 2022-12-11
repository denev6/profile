<template>
  <TitleComp :title="project.title" :tags="project.tags"></TitleComp>
  <article>
    <p>
        GitHub 코드 공개:
        <a href="https://github.com/Denev6/practice/tree/main/transformer"
            target="_blank">github.com/Denev6/practice/transformer</a><br />
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
    <h3>Dataset</h3>
    <p>
      <table>
          <thead>
              <tr>
                  <th>Column</th>
                  <th>Type</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>ID</td>
                  <td>PyObject</td>
              </tr>
              <tr>
                  <td>Utterance</td>
                  <td>PyObject</td>
              </tr>
              <tr>
                  <td>Dialogue_ID</td>
                  <td>Integer</td>
              </tr>
              <tr>
                  <td>Target</td>
                  <td>PyObject</td>
              </tr>
              <tr>
                  <td colspan="2">...</td>
              </tr>
          </tbody>
      </table>
    <a href="https://dacon.io/competitions/official/236027/data" target="_blank">
        Source: DACON
    </a>
    </p>
    <h3>BEST MODEL</h3>
    <p>
    <ul>
        <li>Accuracy: 0.80130</li>
        <li>F1-macro: 0.68277</li>
        <li>Batch Size: 16 * 16</li>
        <li>Model: Emoberta-large <a href="https://github.com/tae898/erc" target="_blank">(tae898)</a></li>
    </ul>
    <a id="article_colab-link"
        href="https://colab.research.google.com/github/Denev6/practice/blob/main/transformer/RoBERTa_pytorch.ipynb"
        target="_blank">
        <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab" />
    </a>
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
  table {
    width: 22rem;
    margin: 1rem 0;
  }
  th {
    text-align: left;
    font-weight: 500;
    color: #0f766e;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #a3a3a3;
  }
  tr {
    padding: 0.5rem;
  }
  td {
    padding: 0.25rem 0.5rem;
  }
  @media (max-width: 640px) {
    table {
      max-width: 90%;
    }
    #article_colab-link {
      display: none;
    }
  }
</style>