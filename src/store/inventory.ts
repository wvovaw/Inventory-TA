import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useInventoryStore = defineStore("inventory", () => {
  let inventory = ref<Array<Array<Object>>>([
    [{}, {}, {}, {}, {}],
    [{ amount: 1, description: "single" }, {}, {}, {}, {}],
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

  const removeItems = (coordinate: Array<number>, amount: number) => {
    const i = coordinate[0],
      j = coordinate[1];
    const item = JSON.parse(JSON.stringify(inventory.value[i][j]));

    if (item.amount <= amount) inventory.value[i][j] = {};
    else {
      item.amount -= amount;
      inventory.value[i][j] = item;
    }
  };

  const addItem = (coordinate: Array<number>) => {
    const i = coordinate[0],
      j = coordinate[1];

    if (JSON.stringify(inventory.value[i][j]) === "{}") {
      inventory.value[i][j] = { amount: 1, description: "default description" };
    } else {
      const item = JSON.parse(JSON.stringify(inventory.value[i][j]));
      item.amount += 1;
      inventory.value[i][j] = item;
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
    removeItems,
    addItem,
  };
});
