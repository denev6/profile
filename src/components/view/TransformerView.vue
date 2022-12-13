<template>
  <TitleComp :title="project.title" :tags="project.tags"></TitleComp>
  <article>
      <p>
          GitHub 코드 공개:
          <a href="https://github.com/Denev6/practice/tree/main/transformer"
              target="_blank">github.com/Denev6/practice/transformer</a><br />
      </p>
      <p>
          데이터 출처:
          <a href="https://dacon.io/competitions/official/236027/data"
              target="_blank">dacon.io/competitions/236027</a><br />
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
      <h3>데이터 정보</h3>
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
                  <td>Object</td>
              </tr>
              <tr>
                  <td>Utterance</td>
                  <td>Object</td>
              </tr>
              <tr>
                  <td>Dialogue_ID</td>
                  <td>Integer</td>
              </tr>
              <tr>
                  <td>Target</td>
                  <td>Object</td>
              </tr>
              <tr>
                  <td colspan="2">...</td>
              </tr>
          </tbody>
      </table>
      <a class="article_colab-link"
          href="https://colab.research.google.com/github/Denev6/practice/blob/main/transformer/data_processing.ipynb" target="_blank">
          <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab" />
      </a>
      </p>
      <h3>모델 정보</h3>
      <p>
      <ul>
          <li>Accuracy: 0.80280</li>
          <li>F1-macro: 0.69021</li>
          <li>Batch Size: 32*8</li>
          <li>Optimizer: AdamW</li>
          <li>Model: <a href="https://github.com/tae898/erc" target="_blank">Emoberta-large (tae898)</a></li>
      </ul>
      <a class="article_colab-link"
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
      width: 20rem;
      margin: 0.5rem 0.25rem;
      border-spacing: 0.5rem 0.25rem;
  }
  th {
      text-align: left;
      font-weight: 500;
      color: #0f766e;
      padding: 0.5rem;
      border-bottom: 1px solid #a3a3a3;
  }
  tbody>tr:hover {
      background-color: #f5f5f5;
  }
  tr,
  td {
      font-weight: 300;
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
  }
  .article_colab-link {
    margin-left: 0.5rem;
  }
  @media (max-width: 640px) {
      table {
          max-width: 90%;
      }
      .article_colab-link {
          display: none;
      }
  }
</style>