import { defineStore } from "pinia";
import { computed, reactive, ref, watch } from "vue";
import feature1 from "../assets/images/features/feature-1.png";
import feature2_1 from "../assets/images/features/feature-2_1.png";
import feature2_2 from "../assets/images/features/feature-2_2.png";
import feature2_3 from "../assets/images/features/feature-2_3.png";
import feature3 from "../assets/images/features/feature-3.png";
import feature4 from "../assets/images/features/feature-4.png";
import kitchenImg from "../assets/images/footer/kitchen.png";
import bathImg from "../assets/images/footer/bathroom.png";

export const useGeneralStore = defineStore("generalStore", () => {
  const isMenuVisible = ref(false);
  const isMenuFooter = ref(false);
	const services = reactive([
    { id: 1, title: "Після ремонту" },
    { id: 2, title: "Генеральне прибирання" },
    { id: 3, title: "Регулярне прибирання" },
    { id: 4, title: "Мийка вікон" },
  ]);

  const featureItems = reactive([
    {
      id: 1,
      text: "Ретельно підібраний персонал",
      img: [feature1],
      transform: "translateY(0)",
    },
    {
      id: 2,
      text: "Якісна еко-хімія",
      img: [feature2_1, feature2_2, feature2_3],
      transform: "translateY(30px)",
    },
    {
      id: 3,
      text: "Контролюємо якість",
      img: [feature3],
      transform: "translateY(60px)",
    },
    {
      id: 4,
      text: "Працюємо цілодобово",
      img: [feature4],
      transform: "translateY(90px)",
    },
  ]);

  const menuCleanItems = reactive([
    {
      id: 1,
      title: "Кухня",
      tab: "CleaningKitchen",
      image: kitchenImg,
    },
    {
      id: 2,
      title: "Кімнати",
      tab: "rooms",
    },
    {
      id: 3,
      title: "Ванна",
      tab: "CleaningBath",
      image: bathImg,
    },
    {
      id: 4,
      title: "Вестибюль",
      tab: "vestibule",
    },
  ]);

  const bathItems = reactive([
    {
      id: 1,
      text: "Миємо дзеркала",
    },
    {
      id: 2,
      text: "Чистимо мебель",
    },
    {
      id: 3,
      text: "Чистимо туалети",
    },
    {
      id: 4,
      text: "Миємо плитку",
    },
    {
      id: 4,
      text: "Миємо ванну",
    },
  ]);

  const kitchenItems = reactive([
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
  ]);
  return {
    featureItems,
    menuCleanItems,
    isMenuVisible,
    isMenuFooter,
    bathItems,
    kitchenItems,
    services,
  };
});
