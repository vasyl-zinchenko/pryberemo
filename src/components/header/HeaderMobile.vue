<template>
  <header class="header" :class="{ active: isScrolled, hidden: !isScrolled }">
    <div class="menu-icon" @click="isOpenedMenu = !isOpenedMenu">
      <div class="menu-icon__line"></div>
      <div class="menu-icon__line"></div>
    </div>
    <div v-if="isOpenedMenu" class="header__wrapper">
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
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useGeneralStore } from "../../store";
const store = useGeneralStore()

const isOpenedMenu = ref(false);

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

watch(
  () => isOpenedMenu.value,
  (newVal) => {
    document.body.style.overflow = newVal ? "hidden" : "auto";
  }
);
</script>

<style scoped lang="scss">
.menu-icon {
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 10px;
  gap: 5px;

  cursor: pointer;

  &:hover &__line {
    width: 17px;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }

  &__line {
    height: 2px;
    width: 15px;
    background-color: #404040;
    transition: 0.2s;
  }
}
.header {
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  z-index: 1;
  transition: 0.6s;

  &-logo__item {
    color: #404040;
    font-size: 20px;
    font-weight: 700;
  }

  &__wrapper {
    background-color: white;
    padding: 22px 20px;
    min-height: 100vh;
    transform: translateY(-35px);
    z-index: -1;
  }

  &-menu {
    &__list {
      display: flex;
      flex-direction: column;
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
  margin: 50px 0;
  width: fit-content;

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
  margin-top: 50px;
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

@media (min-width: 768px) {
  .header {
    &-logo__item {
      font-size: 36px;
    }

    &__wrapper {
      padding: 22px 55px;
    }

    &-menu {
      &__list {
        &_item {
          font-size: 22px;
        }
      }
    }
  }

  .type-place {
    margin: 70px 0;

    &__house {
      font-size: 16px;
    }

    &__office {
      font-size: 16px;
    }
  }

  .contact {
    font-size: 22px;
    margin-top: 100px;
  }
}

@media (min-width: 1024px) {
  .header {
    padding: 25px;
  }

  .menu-icon {
    &:hover &__line {
      width: 27px;
    }

    &__line {
      height: 5px;
      width: 25px;
    }
  }
}
</style>
