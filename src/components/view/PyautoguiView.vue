<template>
  <TitleComp :title="project.title" :tags="project.tags"></TitleComp>
  <article>
    <p>
      GitHub 코드 공개: <a href="https://github.com/Denev6/face-mouse-control" target="_blank">github.com/Denev6/face-mouse-control</a><br/>
    </p>
    <p>
      논문 조회: <a href="https://doi.org/10.6109/jkiice.2022.26.9.1279" target="_blank">doi.org/10.6109/jkiice.2022.26.9.1279</a>
    </p>
    <img src="@/assets/pyautogui2.png" alt="논문 중 시연 장면"/>
    <h3>시작하게된 이유</h3>
    <p>
      CV 관련 기술을 찾아보다가 손가락의 움직임을 인식해 그림을 그리는 영상을
      보게 되었습니다. 그 영상을 보자마자 얼굴을 이용해 그림을 그릴 수 없을까
      궁금증이 생겼습니다. 그리고 아이디어를 발전시켜 마우스를 제어할 수 없을까
      궁금했습니다. 이 문제를 해결하기 위해 프로젝트를 진행하였습니다.
    </p>
    <h3>프로젝트 진행</h3>
    <p>
      얼굴의 방향에 따라 마우스를 제어하고 눈 깜빡임을 통해 클릭을
      수행합니다. 얼굴 랜드마크 좌표를 이용해 얼굴 주시 방향을 측정했으며,
      FachMesh와 Pyautogui를 중심으로 구현하였습니다. 해당 내용을 오픈소스로 
      모두 공개했으며, 교내 'Co-Deep Learning' 프로젝트를 통해 두 분의 전문가분께 
      질문 및 피드백을 받는 시간을 가졌습니다. 최종적으로 연구 내용을 논문으로 
      정리하여 등록하였습니다.
    </p>
    <button @click="modalState = true">피드백 보기</button>
    <h3>역할</h3>
    <p>
      <ul>
        <li>프로젝트 팀장</li>
        <li>얼굴 방향 / 눈 깜빡임 인식 구현 및 시스템 통합</li>
        <li>논문 작성 및 전체 과정 참여</li>
      </ul>
    </p>
    <img src="@/assets/pyautogui1.png" alt="논문 미리보기"/>
    <h3>세부 내용 요약</h3>
    <p>
      <ul>
        <li>얼굴 인식 모델 (FaceMesh, Dlib) 비교</li>
        <li>얼굴 방향 검출 알고리즘 (2D, 3D) 비교</li>
        <li>전체 구현 및 통합 과정</li>
        <li>테스트 결과</li>
        <li>설문 및 개선사항</li>
      </ul>
    </p>
    <img src="@/assets/pyautogui4.png" alt="전체 구조"/>
    <h3>목표</h3>
    <p>
      처음부터 프로젝트의 목표는 '<i>상용화 가능한 수준</i>'이었습니다.
      일반적으로 Deep-Learning 기반의 모델은 고성능 GPU에서 돌아간다는 
      한계가 있었기 때문에 보편적인 성능의 CPU 환경에서도 동작하도록 만드는 
      것이 목표였습니다. 이를 위해 여러 모델과 알고리즘을 테스트하며 최적의 방법을 
      찾아냈고 최종적으로 저전력 노트북 CPU에서 동작하는 것을 확인하였습니다. 
    </p>
  </article>
  <ModalView
    v-if="modalState == true"
    @click="modalState = false"
  ></ModalView>
</template>

<script>
import project from "@/data/project";
import ModalView from "./ModalView";

export default {
    data() {
        return {
            project: project.pyautogui,
            modalState: false
        };
    },
  components: {ModalView}
};

</script>

<style>
article > button {
  border: 0px;
  border-radius: 3px;
  background-color: #f5f5f5;
  font-weight: 700;
  cursor: pointer;
}
article > button:hover {
  background-color: #0f766e;
  color: #f5f5f5;
  opacity: 0.2;
}
</style>