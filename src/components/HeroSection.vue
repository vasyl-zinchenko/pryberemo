<template>
  <section class="herro-section">
    <div class="herro-section__container">
      <section class="herro-section__image"></section>
      <section class="herro-section__text">
        <h1>Прибирання квартир в Києві</h1>
        <p>
          Ми приберемо у вас вдома або в офісі. Наведемо чистоту після ремонту
          та проведемо генеральне прибирання
        </p>
      </section>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.herro-section {
  display: flex;
  transform: translateY(-84px);
  z-index: -1;
  position: relative;

  &__container {
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  &__image {
    background-image: url("../assets/hero-section-picture.png");
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
  }

  &__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 30px;

    & > p {
      max-width: 400px;
    }
  }
}

h1 {
  font-weight: 400;
  font-size: 36px;
  line-height: 110%;
  color: #404040;
}

p {
  font-size: 18px;
  line-height: 140%;
  color: #404040;
}

@media (min-width: 550px) {
  .herro-section {
    transform: translateY(-40px);

    &__container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      flex-direction: row;
      margin: auto;
    }
    &__image {
      background-image: url("../assets/hero-section-picture.png");
      background-size: 100% auto;
      height: 300px;
    }

    &__text {
      padding-left: 35px;
      gap: 30px;

      & > p {
        max-width: 400px;
      }
    }
  }

  h1 {
    font-weight: 400;
    font-size: 26px;
    color: #404040;
  }

  p {
    font-size: 14px;
    line-height: 140%;
    color: #404040;
  }
}

@media (min-width: 768px) {
  .herro-section {
    margin-bottom: 80px;
  }

  h1 {
    font-size: 36px;
  }

  p {
    font-size: 18px;
  }
}

@media (min-width: 1024px) {
  .herro-section {
    transform: translateY(-84px);

    &__image {
      background-image: url("../assets/hero-section-picture.png");
      background-size: contain;
      background-repeat: no-repet;
      height: 600px;
    }

    &__text {
      display: flex;
      flex-direction: column;
      margin: 0 65px;
      gap: 30px;

      & > p {
        max-width: fit-content;
      }
    }
  }

  h1 {
    font-weight: 400;
    font-size: 56px;
    line-height: 110%;
    color: #404040;
  }

  p {
    font-size: 18px;
    line-height: 140%;
    color: #404040;
  }
}

@media (min-width: 1440px) {
  .herro-section {
    &__container {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    &__image {
      background-size: cover;
      height: 800px;
    }

    &__text {
      padding-left: 135px;
      margin: 0 65px 0 0;
    }
  }

  h1 {
    font-size: 76px;
  }
}
</style>
