<template>
  <div class="detail">
    <img :src="getIconSrc(icon)" />
    <h3>{{ title }}</h3>

    <div class="detail_content">
      <p v-for="(detail, i) in details" :key="i">
        <span class="detail_sub-content">{{ detail.sub }}</span
        ><span>{{ detail.main }}</span>
        <a
          v-if="detail.href != undefined"
          :href="detail.href"
          target="_blank"
          >{{ detail.aText }}</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
    },
    title: {
      type: String,
    },
    details: {
      type: Object,
    },
  },
  methods: {
    getIconSrc(name) {
      return require(`@/icons/${name}.svg`);
    },
  },
};
</script>

<style>
/* DetailListComp */
.detail > img {
  color: #0f766e;
  margin-right: 0.4rem;
}
.detail > h3 {
  color: #0f766e;
  display: inline-block;
  margin-bottom: 0px;
}
a:hover {
  color: #14b8a6;
}
.detail {
  margin-top: 3rem;
}
.detail_content {
  margin-left: 1.4rem;
}
.detail_sub-content {
  color: #a3a3a3;
}
.detail_router {
  text-decoration: underline;
  cursor: pointer;
}
.detail_router:hover {
  color: #0f766e;
}
#detail_project_content {
  line-height: 2rem;
}
</style>
