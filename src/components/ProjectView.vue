<template>
  <div
    class="project_card"
    v-for="(project, i) in projects"
    :key="i"
    @click="routeToPath(project.path)"
  >
    <h3>{{ project.title }}</h3>
    <div class="project_tags" v-for="(tag, j) in project.tags" :key="j">
      {{ tag }}
    </div>
  </div>
</template>

<script>
import projectData from "@/data/project";

export default {
  data() {
    return {
      projects: projectData,
    };
  },
  methods: {
    routeToPath(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style>
.project_card {
  margin-bottom: 2rem;
  padding: 2.4rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}
.project_card:hover {
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}
.project_card > h3 {
  margin-bottom: 1.6rem;
}
.project_tags {
  display: inline-block;
  margin: 0.4rem;
  background-color: #14b8a6;
  padding: 0.4rem 0.6rem;
  width: fit-content;
  border-radius: 5px;
  color: #f5f5f5;
  letter-spacing: 0.08rem;
  font-weight: 300;
  font-size: 0.8rem;
  font-style: italic;
  opacity: 0.6;
}

@media (max-width: 640px) {
  .project_card {
    padding: 1rem 0.6rem;
  }
  .project_card > h3 {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.6rem;
  }
  .project_tags {
    font-size: 0.8rem;
    padding: 0.2rem 0.4rem;
  }
}
</style>
