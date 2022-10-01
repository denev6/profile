<template>
  <BaseView :title="project.title" :tags="project.tags"></BaseView>
  <div class="inner">
    <p>
      GitHub 코드 공개:
      <a href="https://github.com/Denev6/image-data-crawler" target="_blank"
        >github.com/Denev6/image-data-crawler</a
      ><br />
    </p>
    <img src="@/assets/pincette1.png" />
    <h3>시작하게된 이유</h3>
    <p>
      이미지를 활용한 분류 모델을 학습시키기 위해 이미지를 수집해야 했습니다.
      하지만 크롤링 데이터는 크기, 색상도 제각각이며 gif와 같은 형식의 데이터도
      다수 포함되어 있었습니다. PIL과 같은 오픈소스에서 이미지 처리를 지원하고
      있지만 여러 단계를 거쳐 작업을 진행해야 했고, 이 모든 내용을 자동화하면
      편리하겠다고 생각하였습니다. 따라서, 추상화를 통해 더 간결하고 쉽게 이미지
      처리를 자동화할 수 있도록 제작하였습니다. Selenium과 Pillow를 중심으로
      구현하였습니다.
    </p>
    <h3>사용 범위</h3>
    <p>
      GitHub README에 자세히 설명되어 있으며 Pincette 객체에 크롤링을 위한
      메서드와 이미지 처리를 위한 헬퍼 메서드가 모두 정의되어 있습니다.
      Selenium을 기반으로 하며 필요 시 Selenium이나 bs4 메서드를 활용해 사용
      범위를 확장할 수 있습니다. 기존의 메서드를 조합해 작업하는 방식과 달리
      메서드의 파라미터를 조정하여 작업하는 방식으로 자세한 기능은 아래와
      같습니다.
    </p>
    <p>
      <ul>
        <li>응답 대기 시간, 스크롤 횟수 등 설정 및 크롤링</li>
        <li>이미지 저장 시 파일 이름, 형식 등 포맷팅</li>
        <li>gif 이미지 분할</li>
        <li>이미지 크기, 색상 처리 및 압축</li>
      </ul>
    </p>
    <h3>개선 방안</h3>
    <p>
      자동화로 편리한 작업이 가능해졌지만 동기 처리를 기본으로 하는 
      Python의 특징 때문에 응답을 기다리는 구간과 같이 시간이 지연되는 
      상황이 발생할 수 있습니다. 따라서 비동기 처리를 통해 응답 지연이 발생할 때 
      다른 이미지 처리가 가능하도록 개선해 볼 수 있습니다. 
    </p>
  </div>
</template>
<script>
import project from "@/project";
export default {
  data() {
    return {
      project: project.pincette,
    };
  },
};
</script>
