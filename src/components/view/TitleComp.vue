<template>
  <h1 id="article_title">{{ title }}</h1>
  <div class="article_tags" v-for="(tag, i) in tags" :key="i">{{ tag }}</div>
  <hr id="article_hr" />
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
#article_title {
  font-size: 2rem;
  margin-bottom: 1rem;
  word-wrap: keep-all;
}
.article_tags {
  display: inline-block;
  margin: 0.4rem;
  background-color: #f5f5f5;
  padding: 0.2rem 0.4rem;
  width: fit-content;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: 300;
  letter-spacing: 0.04rem;
}
#article_hr {
  color: #f5f5f5;
  opacity: 0.3;
  margin: 3rem auto;
}

/* CSS for sub-Pages in '@/components/view/~View'
 * Use <article> tag to format main text
*/
.article {
  line-height: 1.6;
  width: 100%;
  word-wrap: keep-all;
}
article > img {
  max-width: 90%;
  max-height: 40vh;
  margin: 2rem auto;
  display: block;
}
article > h3 {
  margin-top: 5rem;
  color: #0f766e;
}
article p ~ ul > li {
  line-height: 1.6rem;
}

@media (max-width: 640px) {
  
  #article_title {
    font-size: 1.4rem;
    margin: 0px 0.4rem 1rem 0.4rem;
  }
  article {
    font-weight: 300;
    margin: 0px -0.8rem;
  }
}
</style>
