<template>
  <div class="info" v-for="item in store.kitchenItems" :key="item.id">
    <BaseInfoIcon :item="item" />
  </div>
  <img :src="getImage" alt="kitchen" />
</template>

<script setup>
import { useGeneralStore } from "../../store";
import BaseInfoIcon from "../ui/BaseInfoIcon.vue";
const store = useGeneralStore();

defineProps({
  getImage: String,
});
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
.info {
  display: none;
}

@media (min-width: 1440px) {
  .info {
    display: block;
    position: absolute;
  }
  .info:nth-child(1) {
    top: 205px;
    right: 560px;
  }
  .info:nth-child(2) {
    top: 400px;
    right: 690px;
  }
  .info:nth-child(3) {
    top: 450px;
    right: 480px;
  }
  .info:nth-child(4) {
    top: 335px;
    right: 145px;
  }
  .info:nth-child(5) {
    top: 550px;
    right: 270px;
  }
  .info:nth-child(6) {
    top: 460px;
    right: 120px;
  }
  .info:nth-child(7) {
    top: 700px;
    right: 670px;
  }
}
</style>
