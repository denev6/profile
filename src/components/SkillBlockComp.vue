<template>
  <!-- Tech-Stack square block in AboutView -->
  <div class="skill_wrapper">
    <span v-for="(icon, i) in icons" :key="i">
      <img class="skill_img" :src="getIconSrc(icon)" />
    </span>
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    icons: {
      type: Array,
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
.skill_wrapper {
  background-color: #f5f5f5;
  padding: 0.4rem 0.6rem;
  width: fit-content;
  border-radius: 5px;
  font-size: 0.8rem;
  cursor: default;
}
.skill_img {
  display: inline-block;
  width: 1rem;
  margin-right: 0.4rem;
}

@media (max-width: 640px) {
  .skill_wrapper {
    font-size: 0.8rem;
  }
}
</style>
