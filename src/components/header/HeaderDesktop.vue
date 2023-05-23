<template>
  <header class="header" :class="{ active: isScrolled, hidden: !isScrolled }">
    <section class="header-logo">
      <a class="header-logo__item" href="#">Приберемо.</a>
    </section>
    <section class="type-place">
      <span class="type-place__house">Будинок</span>
      <span class="type-place__office">Офіс</span>
    </section>
    <nav class="header-menu">
      <ul class="header-menu__list">
        <li
          class="header-menu__list_item"
          v-for="service in store.services"
          :key="service.id"
        >
          {{ service.title }}
        </li>
      </ul>
    </nav>
    <div class="contact">
      <a class="contact__tel" href="tel:+380674016977">+380 67 401 69 77</a>
      <p>|</p>
      <p>24/7</p>
    </div>
  </header>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useGeneralStore } from "../../store";
const store = useGeneralStore();

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 54px;
  position: sticky;
  top: 0;
  z-index: 1;
  transition: 0.6s;

  &-logo__item {
    color: #404040;
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
  }

  &-menu {
    &__list {
      display: flex;
      gap: 32px;

      &_item {
        list-style: none;
        font-weight: 500;
        font-size: 16px;
        line-height: 120%;
        letter-spacing: 0.2px;
        color: #404040;
      }
    }
  }
}

.type-place {
  display: flex;
  gap: 10px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 48px;
  padding: 3px;

  &__house {
    font-weight: 500;
    font-size: 14px;
    line-height: 110%;
    color: #ffffff;
    padding: 8px 12px;
    background: #5a30f0;
    border-radius: 34px;
  }

  &__office {
    font-weight: 500;
    font-size: 14px;
    line-height: 110%;
    padding: 8px 12px;
    color: #636c81;
  }
}

.contact {
  display: flex;
  gap: 15px;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  letter-spacing: 0.2px;
  color: #404040;
}

.active {
  background: #ffffff;
  box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.07);
}

.hidden {
  background: none;
  box-shadow: none;
}

.header-mob {
  padding: 10px;
}

a {
  text-decoration: none;
  color: #404040;
}
</style>
