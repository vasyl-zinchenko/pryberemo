<template>
  <section class="features">
    <FeatureItem
      v-for="item in store.featureItems"
      :key="item.id"
      :text="item.text"
      :image="item.img"
      :transform="item.transform"
    />
  </section>
</template>

<script setup>
import FeatureItem from "./FeatureItem.vue";
import { useGeneralStore } from "../../store";
const store = useGeneralStore();
</script>

<style lang="scss" scoped>
.features {
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr;
  margin: 0 60px;
}

@media (min-width: 768px) {
  .features {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 60px 100px;
  }
}

@media (min-width: 1024px) {
  .features {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
