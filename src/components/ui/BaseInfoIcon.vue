<template>
  <div
    class="block"
    :class="{ visible: isHidenIcon, hidden: !isHidenIcon }"
  >
    <span
      class="block__text"
      :class="{ visible: isHovered, hidden: !isHovered }"
      >{{ item.text }}</span
    >
    <div
      class="icon"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    ></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

defineProps(["item"]);

const isHovered = ref(false);
const isHidenIcon = ref(false);

onMounted(() => {
  setTimeout(() => {
    isHidenIcon.value = true;
  }, 500);
});
</script>

<style lang="scss" scoped>
.block {
  transition: 1s;
}
.icon {
  position: relative;
  margin-left: 15px;
  height: 40px;
  width: 40px;
  background: #5a30f0;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: rotate(45deg);
  }

  &::after {
    content: "";
    height: 15px;
    width: 2px;
    background-color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &::before {
    content: "";
    height: 2px;
    width: 15px;
    background-color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.block__text {
  background-color: white;
  padding: 10px;
  display: inline-block;
  margin-bottom: 5px;
  transition: 0.3s;
}

.hidden {
  opacity: 0;
}

.visible {
  opacity: 1;
}

.icon:hover + .block__text {
  visibility: visible;
}
</style>
