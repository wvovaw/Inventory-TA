import { defineStore } from "pinia";
import { reactive, ref, watch } from "vue";

export const useInventoryStore = defineStore("inventory", () => {
  let inventory = ref<Array<Array<Object>>>([
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, { amount: 2, description: "foo bar" }, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, { amount: 5, description: "what i've done" }, {}],
  ]);

  const move = (from: Array<number>, to: Array<number>) => {
    if (JSON.stringify(inventory.value[to[0]][to[1]]) === "{}") {
      inventory.value[to[0]][to[1]] = inventory.value[from[0]][from[1]];
      if (from.toString() !== to.toString())
        inventory.value[from[0]][from[1]] = {};
    }
  };

  watch(
    () => inventory,
    (state) => {
      localStorage.setItem("inventoryState", JSON.stringify(state.value));
    },
    { deep: true }
  );

  return {
    inventory,
    move,
  };
});
