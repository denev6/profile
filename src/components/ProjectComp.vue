<template>
  <div
    class="project-card"
    v-for="(project, i) in projects"
    :key="i"
    @click="routeToPath(project.path)"
  >
    <h3>{{ project.title }}</h3>
    <div class="tags" v-for="(tag, j) in project.tags" :key="j">{{ tag }}</div>
  </div>
</template>

<script>
import TagBlock from "./SmBlock.vue";
import projectData from "@/project.js";

export default {
  data() {
    return {
      projects: projectData,
    };
  },
  template: { TagBlock },
  methods: {
    routeToPath(path) {
      this.$router.push(path);
    },
  },
};
</script>
<style>
.project-card {
  margin-bottom: 2rem;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}
.project-card:hover {
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
  0 8px 10px -6px rgb(0 0 0 / 0.1);
}
.project-card > h3 {
  margin-bottom: 2.5rem;
}
.tags {
  display: inline-block;
  margin: 0.3rem;
  background-color: #22c55e;
  padding: 0.3rem 0.6rem;
  width: fit-content;
  border-radius: 5px;
  color: #ffffff;
  font-weight: 300;
  font-style: italic;
  opacity: 0.4;
}
.tags:hover {
  opacity: 0.8;
}
@media (max-width: 640px) {
  .tags {
    font-size: 0.7rem;
    opacity: 0.8;
  }
  .project-card {
    padding: 1rem 0.7rem;
  }
  .project-card > h3 {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.6rem;
  }
}
</style>
