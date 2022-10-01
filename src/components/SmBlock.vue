<template>
  <div class="stack">
    <span v-for="(img, i) in imgs" :key="i">
      <img class="stack-img" :src="`./icons/${img}.svg`" />
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
    imgs: {
      type: Array,
    },
  },
};
</script>
<style>
.stack {
  background-color: #f1f5f9;
  padding: 0.4rem 0.5rem;
  width: fit-content;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: default;
}
.stack-img {
  display: inline-block;
  width: 1rem;
  margin-right: 0.5rem;
}
@media (max-width: 640px) {
  .stack {
    font-size: 0.8rem;
  }
}
</style>
