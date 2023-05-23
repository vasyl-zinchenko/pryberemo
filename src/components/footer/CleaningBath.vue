<template>
  <div class="info" v-for="item in items" :key="item.id">
    <BaseInfoIcon :item="item" />
  </div>
  <img :src="getImage" alt="image bath"/>
</template>

<script setup>
import BaseInfoIcon from "../ui/BaseInfoIcon.vue";

const items = [
  {
    id: 1,
    text: "Миємо дзеркала",
  },
  {
    id: 2,
    text: "Чистимо мебель",
  },
  {
    id: 3,
    text: "Чистимо туалети",
  },
  {
    id: 4,
    text: "Миємо плитку",
  },
  {
    id: 4,
    text: "Миємо ванну",
  },
];

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
    right: 660px;
  }
  .info:nth-child(2) {
    top: 670px;
    right: 590px;
  }
  .info:nth-child(3) {
    top: 650px;
    right: 300px;
  }
  .info:nth-child(4) {
    top: 335px;
    right: 145px;
  }
  .info:nth-child(5) {
    top: 630px;
    right: 70px;
  }
}
</style>
