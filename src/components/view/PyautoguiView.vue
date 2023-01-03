<template>
  <TitleComp :title="project.title" :tags="project.tags"></TitleComp>
  <article>
    <p>
      GitHub 코드 공개: <a href="https://github.com/Denev6/face-mouse-control" target="_blank">github.com/face-mouse-control</a><br/>
    </p>
    <p>
      논문 조회: <a href="https://doi.org/10.6109/jkiice.2022.26.9.1279" target="_blank">doi.org/10.6109/jkiice.2022.26.9.1279</a>
    </p>
    <br />
    <img class="img-shadow" src="@/assets/pyautogui1.png" alt="논문 중 시연 장면"/>
    <h3>프로젝트 요약</h3>
    <p>
      <ul>
        <li>얼굴 인식 모델 (FaceMesh, Dlib) 비교</li>
        <li>얼굴 방향 검출 알고리즘 (2D, 3D) 비교</li>
        <li>전체 시스템 구현 및 통합</li>
        <li>사용자 테스트 및 피드백 반영</li>
      </ul>
    </p>
    <img src="@/assets/pyautogui2.png" alt="전체 구조"/>
    <h3>프로젝트 진행 과정</h3>
    <p>
      <ul>
        <li>교내 'Co-Deep Learning' 참가</li>
        <li>전문가 피드백 <span>(아래 버튼 참고)</span></li>
        <li>'Co-Deep Learning' 우수상 수상</li>
        <li>JKIICE 논문 등재</li>
      </ul>
    </p>
    <button @click="modalState = true">피드백 보기</button>
    <h3>역할</h3>
    <p>
      <ul>
        <li>프로젝트 팀장</li>
        <li>얼굴 방향, 눈 깜빡임 인식 구현 및 시스템 통합</li>
        <li>설정 UI 제작 및 설정 기능 구현</li>
        <li>논문 작성 및 전체 과정 참여</li>
      </ul>
    </p>
    <h3>기록</h3>
    <p>
      <ul>
        <li><a href="https://denev6.tistory.com/entry/face-mouse-control" target="_blank">프로젝트에 대한 생각</a></li>
      </ul>
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
  color: #a3a3a3;
  font-weight: 700;
  font-size: 0.8rem;
  cursor: pointer;
  padding: 0.1rem 0.25rem;
}
article > button:hover {
  color: #f5f5f5;
  background-color: #0f766e;
}
</style>