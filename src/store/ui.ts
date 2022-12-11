import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useUiStore = defineStore("ui", () => {
  let dark = ref<boolean>(true);

  const toggleColorscheme = () => {
    dark.value = !dark.value;
  };

  watch(
    () => dark,
    (state) => {
      localStorage.setItem("darktheme", JSON.stringify(state.value));
    },
    { deep: true }
  );

  return {
    dark,
    toggleColorscheme,
  };
});
