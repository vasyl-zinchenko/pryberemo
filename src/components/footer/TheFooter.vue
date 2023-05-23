<template>
  <section class="footer" v-intersection-observer="onIntersectionObserver">
    <section :class="['menu', { 'menu-visible': store.isMenuFooter }]">
      <p>Як ми прибираємо</p>
      <ul>
        <li
          v-for="item in store.menuCleanItems"
          :key="item.id"
          @click="currentMenu = item"
          :class="{ active: currentMenu.tab === item.tab }"
        >
          {{ item.title }}
        </li>
      </ul>
    </section>
    <div
      v-if="currentMenu.image"
      class="info-picture"
      :class="{ 'info-picture__visible': store.isMenuFooter }"
    >
      <component :is="tabs[currentMenu.tab]" :getImage="getImage"></component>
    </div>

    <div class="without-data" v-else>
      <img src="../../assets/images/footer/no-image.png" alt="image not found"/>
    </div>
  </section>
</template>

<script setup>
import { vIntersectionObserver } from "@vueuse/components";
import { computed, onMounted, ref } from "vue";
import { useGeneralStore } from "../../store";
import CleaningKitchen from "./CleaningKitchen.vue";
import CleaningBath from "./CleaningBath.vue";

const tabs = {
  CleaningKitchen,
  CleaningBath,
};

const store = useGeneralStore();

const isMenuVisible = ref(false);

const currentMenu = ref(store.menuCleanItems[0]);

const getImage = computed(() => currentMenu.value.image);

function onIntersectionObserver([{ isIntersecting }]) {
  store.isMenuFooter = isIntersecting;
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: space-between;
  transition: all 1s ease-out;
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
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  color: #ffffff;
  padding-bottom: 50px;
}

.info-picture {
  position: relative;
  display: flex;
  transform: translateX(100%);
  opacity: 0;
  transition: 1s;
}

.info-picture__visible {
  transform: translateX(0);
  opacity: 1;
}

.menu {
  display: flex;
  flex-direction: column;
  background-color: #5a30f0;
  padding: 35px 60px;
  opacity: 0;
  transform: translateX(-400px);
  transition: 1s;

  &.menu-visible {
    opacity: 1;
    transform: translateX(0);
  }

  & > p {
    font-weight: 500;
    font-size: 13px;
    padding-top: 10px;
    line-height: 130%;
    color: #ffffff;
  }

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 280px;
  }

  & > ul > li {
    font-size: 20px;
    line-height: 120%;
    list-style: none;
    cursor: pointer;
    transition: 0.3s;

    color: #ffffff;
    opacity: 0.7;

    &:hover {
      opacity: 1;
      transform: skewX(-15deg);
    }
  }

  & > ul > li.active {
    opacity: 1;
    transform: skewX(-15deg);
    &::before {
      content: "→ ";
    }
  }
}

li {
  transition: 0.3s;
}
.menu-image {
  opacity: 0;
  transition: all 1s ease-out;
  transform: translateX(400px);
  width: -moz-available;
  width: -webkit-fill-available;

  &.menu-image-visible {
    opacity: 1;
    transform: translateX(0);
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease-out;
}

.v-enter-from {
  transform: translateX(100%);
  opacity: 0.2;
}
.v-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.without-data {
  display: grid;
  place-items: center;
  width: 100%;
  font-size: 40px;
}

@media (min-width: 550px) {
  .menu {
    align-items: center;
    padding: 0;
  }
  p {
    font-size: 12px;
  }

  ul {
    padding-bottom: 20px;
  }

  li {
    text-align: center;
  }
}

@media (min-width: 1024px) {
  .footer {
    display: grid;
    grid-template-columns: 0.1fr 2fr;
    margin-top: 140px;
    transition: all 1s ease-out;
  }

  li {
    text-align: left;
  }

  .menu {
    padding: 35px 30px 150px;
    align-items: start;

    & > p {
      font-weight: 500;
      font-size: 16px;
      line-height: 130%;
      color: #ffffff;
      padding-bottom: 140px;
      text-align: left;
    }

    & > ul {
      gap: 20px;
    }

    & > ul > li {
      font-size: 40px;
      line-height: 120%;
    }
  }
}

@media (min-width: 1440px) {
  .menu {
    padding: 35px 50px 150px;
    transform: translateX(-100%);
    opacity: 0;
  }
}
</style>
