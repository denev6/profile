<template>

  <h1 id="ko-name">박성진</h1>
  <span id="en-name">Sung-jin Park</span>
  <hr />

  <div v-for="(about, i) in aboutDetails" :key="i">
    <DetailListComp
      :icon="about.icon"
      :title="about.title"
      :details="about.details"
    ></DetailListComp>
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
hr {
  color: #404040;
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
