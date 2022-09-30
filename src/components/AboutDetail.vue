<template>
  <div class="detail">
    <img :src="`./icons/${title}.svg`" />
    <h3>{{ title }}</h3>
    <div class="inner">
      <p v-for="(detail, i) in details" :key="i">
        <span class="sub" v-if="detail.sub != undifined"
          >{{ detail.sub }}&nbsp;&nbsp;</span
        >
        {{ detail.main
        }}<a v-if="detail.href != undifined" :href="detail.href" target="_blank"
          >: {{ detail.href }}</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "-",
    },
    details: {
      type: Object,
    },
  },
};
</script>
<style>
.detail > img {
  color: #059669;
  margin-right: 0.5rem;
}
.detail > h3 {
  color: #059669;
  display: inline-block;
  margin-bottom: 0px;
}
a {
  color: #64748b;
  text-decoration: none;
  font-style: italic;
  font-weight: 300;
}
a:hover {
  color: #10b981;
}
.detail {
  margin-top: 60px;
}
.detail > .inner {
  margin-left: 1.5rem;
}
.sub {
  color: #94a3b8;
}
</style>
