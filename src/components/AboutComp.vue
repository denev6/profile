<template>
  <h1>박성진</h1>
  <span>Sung-jin Park</span>
  <hr />
  <AboutDetail
    :title="'Paper'"
    :details="[
      {
        sub: '2022',
        main: '얼굴 인식과 Pyautogui 마우스 제어 기반의 비접촉식 입력 기법',
      },
      {
        sub: '2022',
        main: '진행 중...',
      },
    ]"
  ></AboutDetail>
  <AboutDetail
    :title="'Links'"
    :details="[
      { main: 'GitHub', href: 'https://github.com/Denev6' },
      { main: 'TIL Blog', href: 'https://denev6.tistory.com' },
    ]"
  ></AboutDetail>
  <AboutDetail
    :title="'Education'"
    :details="[{ sub: '2021~', main: '성균관대 인공지능융합전공' }]"
  ></AboutDetail>
  <AboutDetail
    :title="'Project'"
    :details="[{ sub: '자세한 내용은 Project 페이지 참고' }]"
  ></AboutDetail>
  <AboutDetail :title="'Tech-Stack'"></AboutDetail>
  <span class="stack-wrapper">
    <SkillStack :text="'Python'" :imgs="['python']"></SkillStack>
    <SkillStack
      :text="'ML DL'"
      :imgs="['scikitlearn', 'pytorch', 'tensorflow', 'opencv']"
    ></SkillStack>
    <SkillStack :text="'Data'" :imgs="['numpy', 'pandas']"></SkillStack>
    <SkillStack :text="'GitHub'" :imgs="['github']"></SkillStack>
    <SkillStack :text="'Conda'" :imgs="['anaconda']"></SkillStack>
    <SkillStack :text="'Linux'" :imgs="['linux']"></SkillStack>
    <SkillStack :text="'MySQL'" :imgs="['mysql']"></SkillStack>
    <SkillStack class="sub" :text="'C'" :imgs="['c']"></SkillStack>
    <SkillStack
      class="sub"
      :text="'Frontend'"
      :imgs="['html5', 'css3', 'javascript']"
    ></SkillStack>
    <SkillStack class="sub" :text="'Vue'" :imgs="['vuedotjs']"></SkillStack>
    <SkillStack
      class="sub"
      :text="'Tailwindcss'"
      :imgs="['tailwindcss']"
    ></SkillStack>
    <SkillStack class="sub" :text="'Django'" :imgs="['django']"></SkillStack>
  </span>
</template>

<script>
import AboutDetail from "./AboutDetail.vue";
import SkillStack from "./SmBlock.vue";

export default {
  data() {
    return {};
  },
  components: { AboutDetail, SkillStack },
};
</script>
<style>
h1 {
  margin-bottom: 0px;
  font-size: 3rem;
  font-weight: 900;
}
hr {
  color: #475569;
  margin-top: 2rem;
}
.stack-wrapper {
  margin-left: 1.5rem;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.stack-wrapper .sub {
  opacity: 0.3;
  color: #334155;
}
.stack-wrapper .sub:hover {
  opacity: 0.7;
}
@media (max-width: 640px) {
  h1 {
    font-size: 2rem;
  }
  h1+span {
    font-size: 0.8rem;
  }
  .stack-wrapper .sub {
    opacity: 0.5;
  }
  .stack-wrapper .sub:hover {
    opacity: 0.5;
  }
}
</style>
