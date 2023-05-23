import { defineStore } from "pinia";
import { computed, reactive, ref, watch } from "vue";

export const useGeneralStore = defineStore("generalStore", () => {
	const isMenuVisible = ref(false);
  const featureItems = reactive([
    {
      id: 1,
      text: "Ретельно підібраний персонал",
      img: ["src/assets/images/features/feature-1.png"],
      transform: "translateY(0)",
    },
    {
      id: 2,
      text: "Якісна еко-хімія",
      img: [
        "src/assets/images/features/feature-2_1.png",
        "src/assets/images/features/feature-2_2.png",
        "src/assets/images/features/feature-2_3.png",
      ],
      transform: "translateY(30px)",
    },
    {
      id: 3,
      text: "Контролюємо якість",
      img: ["src/assets/images/features/feature-3.png"],
      transform: "translateY(60px)",
    },
    {
      id: 4,
      text: "Працюємо цілодобово",
      img: ["src/assets/images/features/feature-4.png"],
      transform: "translateY(90px)",
    },
  ]);

  const menuCleanItems = reactive([
    {
      id: 1,
      title: "Кухня",
      tab: "CleaningKitchen",
      image: "src/assets/images/footer/kitchen.png",
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
      image: "src/assets/images/footer/bathroom.png",
    },
    {
      id: 4,
      title: "Вестибюль",
      tab: "vestibule",
    },
  ]);

  return { featureItems, menuCleanItems, isMenuVisible };
});
