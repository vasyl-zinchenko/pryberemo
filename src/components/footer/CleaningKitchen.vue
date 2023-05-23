<template>
  <div class="info" v-for="item in items" :key="item.id">
    <BaseInfoIcon :item="item" />
  </div>
  <img :src="getImage" alt="kitchen" />
</template>

<script setup>
import BaseInfoIcon from "../ui/BaseInfoIcon.vue";

defineProps({
  getImage: String,
});

const items = [
  {
    id: 1,
    text: "Чистимо фасад витяжки",
  },
  {
    id: 2,
    text: "Чистимо плиту",
  },
  {
    id: 3,
    text: "Виносимо сміття",
  },
  {
    id: 4,
    text: "Чистимо фасади кухонних гарнітурів",
  },
  {
    id: 5,
    text: "Протираємо стільницю",
  },
  {
    id: 6,
    text: "Миємо посуд",
  },
  {
    id: 7,
    text: "Миємо підлогу",
  },
];
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
