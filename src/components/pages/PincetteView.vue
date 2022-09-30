<template>
    <BaseView :title="project.title" :tags="project.tags"></BaseView>
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
  