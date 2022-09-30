<template>
  <h1 id="inner-title">{{ title }}</h1>
  <div class="inner-tags" v-for="(tag, i) in tags" :key="i">{{ tag }}</div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
    },
    tags: {
      type: Array,
    },
  },
};
</script>
<style>
#inner-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.inner-tags {
  display: inline-block;
  margin: 0.3rem;
  background-color: #f1f5f9;
  padding: 0.3rem 0.6rem;
  width: fit-content;
  border-radius: 5px;
}
</style>
