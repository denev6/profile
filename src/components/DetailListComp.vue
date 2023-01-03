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

