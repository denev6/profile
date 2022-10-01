<template>
  <h1 id="inner-title">{{ title }}</h1>
  <div class="inner-tags" v-for="(tag, i) in tags" :key="i">{{ tag }}</div>
  <hr id="inner-hr" />
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
  word-wrap: keep-all;
}
.inner-tags {
  display: inline-block;
  margin: 0.3rem;
  background-color: #f1f5f9;
  padding: 0.3rem 0.6rem;
  width: fit-content;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: 300;
}
#inner-hr {
  color: #f1f5f9;
  opacity: 0.3;
  margin: 3rem auto;
}
/* CSS for sub-Pages import current view.
 * <class="inner"> sub-Pages content </>
*/
.inner {
  line-height: 1.6;
  width: 100%;
  word-wrap: keep-all;
}
.inner > img {
  max-width: 80%;
  max-height: 40vh;
  margin: 2rem auto;
  display: block;
}
.inner > h3 {
  margin-top: 5rem;
  color: #15803d;
}
.inner p ~ ul > li {
  line-height: 1.6rem;
}

@media (max-width: 640px) {
  #inner-title {
    font-size: 1.5rem;
    margin: 0px 0.5rem 1rem 0.5rem;
  }
  /* CSS for sub-Pages import current view.
 * <class="inner"> sub-Pages content </>
*/
  .inner {
    font-size: 0.8rem;
    font-weight: 300;
    margin: 0px 0.3rem;
  }
}
</style>
