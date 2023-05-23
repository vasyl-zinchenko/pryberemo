<template>
  <div
    class="flip-card"
    :style="{ transform: isVisibleFeature ? 'translateY(0)' : transform }"
    v-intersection-observer="onIntersectionObserver"
  >
    {{ store.isVisibleFeature }}
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <p>{{ text }}</p>
        <div class="features-item__image">
          <div v-for="img in image" :key="img">
            <img :src="img" alt="features item" />
          </div>
        </div>
      </div>
      <div class="flip-card-back">
        <p>
          Не треба витрачати час, сили та ресурси на розміщення вакансій,
          проведення співбесід, перевірку кандидатів на посаду прибиральниці. За
          рахунок великих обсягів ми можемо зробити це ефективнішим.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { vIntersectionObserver } from "@vueuse/components";
import { useGeneralStore } from "../../store";
const store = useGeneralStore();
import { ref } from "vue";

defineProps({
  text: String,
  image: Array,
  transform: String,
});

const isVisibleFeature = ref(false);

function onIntersectionObserver([{ isIntersecting }]) {
  isVisibleFeature.value = isIntersecting;
}
</script>

<style lang="scss" scoped>
.flip-card {
  background-color: transparent;
  width: 100%;
  min-height: 300px;
  max-width: 300px;
  perspective: 1000px;
  transition: all 1s ease-out;
  margin: auto;
}

img {
  width: 80%;
  display: flex;
  margin: auto;
}

.features-item__image {
  display: flex;
  align-items: end;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  min-height: 300px;

  align-content: stretch;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background: #f3f6fb;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & > p {
    padding: 20px 25px 0;
    font-size: 14px;
    line-height: 130%;
    text-align: center;
    color: #404040;
  }
}

.flip-card-back {
  background-color: #5a30f0;
  border-radius: 8px;
  font-size: 12px;
  color: #ffffff;
  transform: rotateY(180deg);

  & > p {
    padding: 10px;
    text-align: initial;
  }
}

@media (min-width: 768px) {
  .flip-card-back {
    font-size: 16px;
    line-height: 140%;
    color: #ffffff;
    transform: rotateY(180deg);

    & > p {
      padding: 30px;
    }
  }

  .flip-card-front {
    & > p {
      padding: 20px 45px 0;
      font-size: 24px;
      line-height: 130%;
      color: #404040;
    }
  }
}

@media (min-width: 1024px) {
  .flip-card-back {
    font-size: 12px;
    line-height: 140%;
    color: #ffffff;
    transform: rotateY(180deg);

    & > p {
      padding: 30px;
    }
  }
}

@media (min-width: 1440px) {
  .flip-card-back {
    font-size: 16px;
  }
}
</style>
