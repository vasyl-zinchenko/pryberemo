<template>
  <section class="cleaning">
    <div class="cleaning__text">
      <h2>Як ми прибираємо</h2>
      <p>
        Клінер приїжджає у призначений час з усім необхідним і одразу приступає
        до справи. Вам залишається лише оцінити результат.
      </p>
    </div>
    <div>
      <img
        class="cleaning__image"
        src="../assets/images/cleaning/cleaning.png"
        alt="cleaning image"
        :class="{ enter: isVisible }"
        v-intersection-observer="onIntersectionObserver"
      />
    </div>
  </section>
</template>

<script setup>
import { vIntersectionObserver } from "@vueuse/components";
import { ref } from "vue";

const isVisible = ref(false);

function onIntersectionObserver([{ isIntersecting }]) {
  isVisible.value = isIntersecting;
}
</script>

<style lang="scss" scoped>
.cleaning {
  margin: 0;
  padding: 20px;
  flex-direction: column;
  color: #404040;

  &__text {
    flex-direction: column;
    gap: 20px;
  }
}

h2 {
  font-size: 32px;
}

img {
  margin-top: 50px;
  width: 100%;
  transform: translateY(50px);
  transition: all 1s ease-out;
}

@media (min-width: 768px) {
  .cleaning {
    &__text {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  h2 {
    font-weight: 400;
    font-size: 36px;
  }
  p {
    font-size: 18px;
    line-height: 140%;
  }
}

@media (min-width: 1024px) {
  .cleaning {
    margin: 100px 173px 0;

    &__text {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
    }
  }

  h2 {
    display: flex;
    flex: 1;

    font-weight: 400;
    font-size: 44px;
    line-height: 120%;
    color: #404040;
    max-width: 450px;
  }

  p {
    display: flex;
    flex: 1;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: #404040;
    max-width: 450px;
  }

  img {
    margin-top: 50px;
  }
}

.enter {
  transform: translateY(0px);
}
</style>
