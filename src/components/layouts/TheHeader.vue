<template>
  <HeaderDesktop v-if="isVisibleHeader" />
  <HeaderMobile v-else />
</template>

<script setup>
import HeaderDesktop from "../header/HeaderDesktop.vue";
import HeaderMobile from "../header/HeaderMobile.vue";

import { ref, onMounted } from "vue";

const isVisibleHeader = ref(true);

const handleMediaQuery = () => {
  isVisibleHeader.value = window.innerWidth >= 1440;
};

onMounted(() => {
  handleMediaQuery();

  window.addEventListener("resize", handleMediaQuery);
});
</script>
<style scoped lang="scss"></style>
