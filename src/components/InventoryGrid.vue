<script setup lang="ts">
import ItemOptionsModal from "./ItemOptionsModal.vue";
import InventoryCell from "./InventoryCell.vue";
import { useInventoryStore } from "../store/inventory";
import { ref } from "vue";

const inventoryStore = useInventoryStore();

const showOptions = ref<boolean>(false);
const edititngCoordinate = ref<Array<number>>([]);

const openOptions = (coordinate: Array<number>) => {
  showOptions.value = true;
  edititngCoordinate.value = coordinate;
};
</script>

<template>
  <div class="w-full h-full relative z-0">
    <div class="w-full h-full grid grid-cols-5 grid-rows-5">
      <InventoryCell
        :data="inventoryStore.inventory[0][0]"
        :coordinate="[0, 0]"
        @move="inventoryStore.move"
        @open-options="openOptions"
        @add="inventoryStore.addItem"
        class="border-zinc-700 border-r border-b"
      ></InventoryCell>
      <InventoryCell
        :data="inventoryStore.inventory[0][1]"
        :coordinate="[0, 1]"
        @move="inventoryStore.move"
        @open-options="openOptions"
        @add="inventoryStore.addItem"
        class="border-zinc-700 border-r border-b"
      >
      </InventoryCell>
      <InventoryCell
        :data="inventoryStore.inventory[0][2]"
        :coordinate="[0, 2]"
        @move="inventoryStore.move"
        @add="inventoryStore.addItem"
        @open-options="openOptions"
        class="border-zinc-700 border-r border-b"
      ></InventoryCell>
      <InventoryCell
        :data="inventoryStore.inventory[0][3]"
        :coordinate="[0, 3]"
        @move="inventoryStore.move"
        @add="inventoryStore.addItem"
        @open-options="openOptions"
        class="border-zinc-700 border-r border-b"
      ></InventoryCell>
      <InventoryCell
        :data="inventoryStore.inventory[0][4]"
        :coordinate="[0, 4]"
        @move="inventoryStore.move"
        @add="inventoryStore.addItem"
        @open-options="openOptions"
        class="border-zinc-700 border-b"
      ></InventoryCell>
      <InventoryCell
        :data="inventoryStore.inventory[1][0]"
        :coordinate="[1, 0]"
        @move="inventoryStore.move"
        @add="inventoryStore.addItem"
        @open-options="openOptions"
        class="border-zinc-700 border-r border-b"
      ></InventoryCell>
      <InventoryCell
        :data="inventoryStore.inventory[1][1]"
        :coordinate="[1, 1]"
        @move="inventoryStore.move"
        @add="inventoryStore.addItem"
        @open-options="openOptions"
        class="border-zinc-700 border-r border-b"
      ></InventoryCell>
      <InventoryCell
        :data="inventoryStore.inventory[1][2]"
        :coordinate="[1, 2]"
        @move="inventoryStore.move"
        @add="inventoryStore.addItem"
        @open-options="openOptions"
        class="border-zinc-700 border-r border-b"
      ></InventoryCell>
      <InventoryCell
        :data="inventoryStore.inventory[1][3]"
        :coordinate="[1, 3]"
        @move="inventoryStore.move"
        @add="inventoryStore.addItem"
        @open-options="openOptions"
        class="border-zinc-700 border-r border-b"
      ></InventoryCell>
      <InventoryCell
        :data="inventoryStore.inventory[1][4]"
        :coordinate="[1, 4]"
        @move="inventoryStore.move"
        @add="inventoryStore.addItem"
        @open-options="openOptions"
        class="border-zinc-700 border-b"
      ></InventoryCell>
      <InventoryCell
        :data="inventoryStore.inventory[2][0]"
        :coordinate="[2, 0]"
        @move="inventoryStore.move"
        @add="inventoryStore.addItem"
        @open-options="openOptions"
        class="border-zinc-700 border-r border-b"
      ></InventoryCell>
      <InventoryCell
        :data="inventoryStore.inventory[2][1]"
        :coordinate="[2, 1]"
        @move="inventoryStore.move"
        @add="inventoryStore.addItem"
        @open-options="openOptions"
        class="border-zinc-700 border-r border-b"
      ></InventoryCell>
      <InventoryCell
        :data="inventoryStore.inventory[2][2]"
        :coordinate="[2, 2]"
        @move="inventoryStore.move"
        @add="inventoryStore.addItem"
        @open-options="openOptions"
        class="border-zinc-700 border-r border-b"
      ></InventoryCell>
      <InventoryCell
        :data="inventoryStore.inventory[2][3]"
        :coordinate="[2, 3]"
        @move="inventoryStore.move"
        @add="inventoryStore.addItem"
        @open-options="openOptions"
        class="border-zinc-700 border-r border-b"
      ></InventoryCell>
      <InventoryCell
        :data="inventoryStore.inventory[2][4]"
        :coordinate="[2, 4]"
        @move="inventoryStore.move"
        @add="inventoryStore.addItem"
        @open-options="openOptions"
        class="border-zinc-700 border-b"
      ></InventoryCell>
      <InventoryCell
        :data="inventoryStore.inventory[3][0]"
        :coordinate="[3, 0]"
        @move="inventoryStore.move"
        @add="inventoryStore.addItem"
        @open-options="openOptions"
        class="border-zinc-700 border-r border-b"
      ></InventoryCell>
      <InventoryCell
        :data="inventoryStore.inventory[3][1]"
        :coordinate="[3, 1]"
        @move="inventoryStore.move"
        @add="inventoryStore.addItem"
        @open-options="openOptions"
        class="border-zinc-700 border-r border-b"
      ></InventoryCell>
      <InventoryCell
        :data="inventoryStore.inventory[3][2]"
        :coordinate="[3, 2]"
        @move="inventoryStore.move"
        @add="inventoryStore.addItem"
        @open-options="openOptions"
        class="border-zinc-700 border-r border-b"
      ></InventoryCell>
      <InventoryCell
        :data="inventoryStore.inventory[3][3]"
        :coordinate="[3, 3]"
        @move="inventoryStore.move"
        @add="inventoryStore.addItem"
        @open-options="openOptions"
        class="border-zinc-700 border-r border-b"
      ></InventoryCell>
      <InventoryCell
        :data="inventoryStore.inventory[3][4]"
        :coordinate="[3, 4]"
        @move="inventoryStore.move"
        @add="inventoryStore.addItem"
        @open-options="openOptions"
        class="border-zinc-700 border-b"
      ></InventoryCell>
      <InventoryCell
        :data="inventoryStore.inventory[4][0]"
        :coordinate="[4, 0]"
        @move="inventoryStore.move"
        @add="inventoryStore.addItem"
        @open-options="openOptions"
        class="border-zinc-700 border-r"
      ></InventoryCell>
      <InventoryCell
        :data="inventoryStore.inventory[4][1]"
        :coordinate="[4, 1]"
        @move="inventoryStore.move"
        @add="inventoryStore.addItem"
        @open-options="openOptions"
        class="border-zinc-700 border-r"
      ></InventoryCell>
      <InventoryCell
        :data="inventoryStore.inventory[4][2]"
        :coordinate="[4, 2]"
        @move="inventoryStore.move"
        @add="inventoryStore.addItem"
        @open-options="openOptions"
        class="border-zinc-700 border-r"
      ></InventoryCell>
      <InventoryCell
        :data="inventoryStore.inventory[4][3]"
        :coordinate="[4, 3]"
        @move="inventoryStore.move"
        @add="inventoryStore.addItem"
        @open-options="openOptions"
        class="border-zinc-700 border-r"
      ></InventoryCell>
      <InventoryCell
        :data="inventoryStore.inventory[4][4]"
        :coordinate="[4, 4]"
        @move="inventoryStore.move"
        @add="inventoryStore.addItem"
        @open-options="openOptions"
        class="border-zinc-700"
      ></InventoryCell>
    </div>
    <div
      @click.stop="showOptions = false"
      v-if="showOptions"
      class="bg-black opacity-20 absolute inset-0"
    />

    <ItemOptionsModal
      class="absolute top-0 right-0 z-10 h-full w-full"
      :show="showOptions"
      :itemCoordinate="edititngCoordinate"
      @close="showOptions = false"
    />
  </div>
</template>
