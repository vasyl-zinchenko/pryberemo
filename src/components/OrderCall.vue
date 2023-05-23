<script setup>
import { onMounted, ref, watch } from "vue";
import { useGeneralStore } from "../store/index";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
const store = useGeneralStore();

console.log(store.isMenuFooter);
</script>

<template>
  <div
    class="order-call"
    :class="{ active: isScrolled, hidden: store.isMenuFooter }"
  >
    Замовити прибирання
  </div>
</template>

<style scoped>
.order-call {
  margin: auto;
  height: 195px;
  width: 195px;
  background: #5a30f0;
  position: sticky;
  bottom: 10px;
  border-radius: 50%;
  transition: 1s ease;

  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #ffffff;
}

.active {
  bottom: -50px;
  height: 150px;
  width: 150px;
  font-size: 14px;
  transform: rotate(15deg);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.hidden {
  bottom: 30px;
  height: 0;
  width: 0;
  font-size: 0;
  transform: rotate(0);
  border: none;
}
</style>
