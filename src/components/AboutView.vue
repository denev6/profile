<template>
  <h1 id="ko-name">박성진</h1>
  <span id="en-name">Sung-jin Park</span>
  <hr id="name_hr" />

  <!-- Project details -->
  <div class="detail">
    <img :src="getIconSrc('project')" />
    <h3>Project</h3>
    <div class="detail_content">
      <p id="detail_project_content">
        <span class="detail_sub-content"
          >자세한 내용은
          <span class="detail_router" @click="routeToPath('/project')"
            >Project</span
          > 참고</span
        >
        <br />실시간 얼굴 인식 기반의 마우스 제어
        <br />RoBERTa를 활용한 다중 감정 분석
      </p>
    </div>
  </div>

  <!-- Details from detail.js -->
  <div v-for="(about, i) in aboutDetails" :key="i">
    <DetailListComp
      :icon="about.icon"
      :title="about.title"
      :details="about.details"
    ></DetailListComp>
  </div>

  <!-- Skill block -->
  <div class="detail">
    <img :src="getIconSrc('tech-stack')" />
    <h3>Stack</h3>
  </div>
  <span class="stack_wrapper">
    <SkillBlock
      v-for="(skill, i) in mainSkill"
      :key="i"
      :text="skill.text"
      :icons="skill.icons"
    ></SkillBlock>
    <SkillBlock
      class="stack_sub"
      v-for="(skill, i) in subSkill"
      :key="i"
      :text="skill.text"
      :icons="skill.icons"
    ></SkillBlock>
  </span>
</template>

<script>
import DetailListComp from "./DetailListComp";
import SkillBlock from "./SkillBlockComp";
import aboutDetails from "@/data/detail";
import { main, sub } from "@/data/skill";

export default {
  data() {
    return {
      mainSkill: main,
      subSkill: sub,
      aboutDetails: aboutDetails,
    };
  },
  components: { DetailListComp, SkillBlock },
  methods: {
    getIconSrc(name) {
      return require(`@/icons/${name}.svg`);
    },
    routeToPath(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style>
#ko-name {
  margin-bottom: 0px;
  font-size: 3rem;
  font-weight: 900;
}
#en-name {
  margin-left: 0.4rem;
}
#name_hr {
  border: none;
  border-bottom: 1px solid #404040;
  margin-top: 2rem;
}
.stack_wrapper {
  margin-left: 1.6rem;
  margin-top: 1.4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.stack_sub {
  opacity: 0.3;
}
.stack_sub:hover {
  opacity: 0.7;
}
/* DetailListComp */
.detail > img {
  color: #0f766e;
  margin-right: 0.4rem;
}
.detail > h3 {
  color: #0f766e;
  display: inline-block;
  margin-bottom: 0px;
}
a:hover {
  color: #14b8a6;
}
.detail {
  margin-top: 3rem;
}
.detail_content {
  margin-left: 1.4rem;
}
.detail_sub-content {
  color: #a3a3a3;
}
.detail_router {
  text-decoration: underline;
  cursor: pointer;
}
.detail_router:hover {
  color: #0f766e;
}
#detail_project_content {
  line-height: 2rem;
}

@media (max-width: 640px) {
  #ko-name {
    font-size: 2rem;
  }
  #en-name {
    font-size: 0.8rem;
  }
  .stack_sub {
    opacity: 0.2;
  }
  .stack_sub:hover {
    opacity: inherit;
  }
}
</style>
