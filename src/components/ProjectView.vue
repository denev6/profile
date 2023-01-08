<template>
  <div
    v-for="(project, i) in projects"
    :key="i"
    @click="routeToPath(project.path)"
  >
    <div class="project_card">
      <h3>{{ project.title }}</h3>
      <div class="project_tags" v-for="(tag, j) in project.tags" :key="j">
        {{ tag }}
      </div>
    </div>
    <hr class="project_card_hr" />
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
  padding: 3.6rem 2rem;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
}
.project_card:hover {
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}
.project_card_hr {
  margin-top: 0px;
  width: 90%;
  border: none;
  border-top: 1px solid #d4d4d4;
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
  opacity: 0.7;
}

@media (max-width: 640px) {
  .project_card {
    padding: 2.4rem 1.4rem;
  }
  .project_card > h3 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
  }
  .project_tags {
    margin: 0.1rem;
    padding: 0.2rem 0.4rem;
    letter-spacing: 0.04rem;
    font-weight: 300;
    font-size: 0.75rem;
    font-style: normal;
  }
  .project_card:hover {
    box-shadow: none;
  }
}
</style>
