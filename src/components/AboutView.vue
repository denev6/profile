<template>
  <h1 id="ko-name">박성진</h1>
  <span id="en-name">Sung-jin Park</span>
  <hr id="name_hr" />

  <!-- Project details -->
  <div class="detail_router-wrapper">
    <a class="detail_router" @click="routeToPath('/project')">
      <img :src="getIconSrc('project')" />
      <span>Project</span>
    </a>
    <a
      class="detail_router"
      target="_blank"
      href="https://denev6.tistory.com/category"
    >
      <img :src="getIconSrc('tistory')" />
      <span>Blog</span>
    </a>
    <a class="detail_router" target="_blank" href="https://github.com/Denev6">
      <img :src="getIconSrc('github')" />
      <span>Github</span>
    </a>
  </div>

  <!-- Details from detail.js
  <div v-for="(about, i) in aboutDetails" :key="i">
    <DetailListComp
      :icon="about.icon"
      :title="about.title"
      :details="about.details"
    ></DetailListComp>
  </div>
   -->

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
// import DetailListComp from "./DetailListComp";
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
  components: { SkillBlock },
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
a:hover {
  color: #14b8a6;
}
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
.detail {
  margin-top: 3rem;
}
.detail > h3 {
  color: #0f766e;
  display: inline-block;
  margin-bottom: 0px;
}
.detail > img {
  margin-right: 0.8rem;
  width: 1em;
  height: 1em;
}
.detail_router-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid #d4d4d4;
}
.detail_router {
  width: 4rem;
  height: 4.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  cursor: pointer;
  border-radius: 2rem;
  background-color: #f5f5f533;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}
.detail_router:hover {
  background-color: #f5f5f577;
}
.detail_router > img {
  width: 2.4rem;
  height: 2.4rem;
  opacity: 0.8;
}
.detail_router > span {
  color: #0f766e;
  font-style: normal;
  font-size: 1rem;
  font-weight: 700;
}

@media (max-width: 640px) {
  #ko-name {
    font-size: 2rem;
  }
  #en-name {
    font-size: 0.8rem;
  }
  .detail_router-wrapper {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  .detail_router {
    padding: 1.2rem;
  }
  .stack_sub {
    opacity: 0.2;
  }
  .stack_sub:hover {
    opacity: inherit;
  }
}
</style>
