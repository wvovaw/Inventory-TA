<script setup lang="ts">
import InventoryCell from "./InventoryCell.vue";
import { reactive } from "vue";

const model = reactive({
  grid: [
    [
      {
        amount: 3,
        description: "boo",
      },
      {},
      {},
      {},
      {},
    ],
    [
      {},
      {
        amount: 1,
        description: "foo bar",
      },
      {},
      {},
      {
        amount: 5,
        description: "ssa",
      },
    ],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
  ],
});

const move = (from: Array<number>, to: Array<number>) => {
  if (JSON.stringify(model.grid[to[0]][to[1]]) === "{}") {
    model.grid[to[0]][to[1]] = model.grid[from[0]][from[1]];
    if (from.toString() !== to.toString()) model.grid[from[0]][from[1]] = {};
  }
};
</script>

<template>
  <div class="w-full h-full grid grid-cols-5 grid-rows-5">
    <InventoryCell
      :data="model.grid[0][0]"
      :coordinate="[0, 0]"
      @move="move"
      class="border-zinc-700 border-r border-b"
    ></InventoryCell>
    <InventoryCell
      :data="model.grid[0][1]"
      :coordinate="[0, 1]"
      @move="move"
      class="border-zinc-700 border-r border-b"
    >
    </InventoryCell>
    <InventoryCell
      :data="model.grid[0][2]"
      :coordinate="[0, 2]"
      @move="move"
      class="border-zinc-700 border-r border-b"
    ></InventoryCell>
    <InventoryCell
      :data="model.grid[0][3]"
      :coordinate="[0, 3]"
      @move="move"
      class="border-zinc-700 border-r border-b"
    ></InventoryCell>
    <InventoryCell
      :data="model.grid[0][4]"
      :coordinate="[0, 4]"
      @move="move"
      class="border-zinc-700 border-b"
    ></InventoryCell>
    <InventoryCell
      :data="model.grid[1][0]"
      :coordinate="[1, 0]"
      @move="move"
      class="border-zinc-700 border-r border-b"
    ></InventoryCell>
    <InventoryCell
      :data="model.grid[1][1]"
      :coordinate="[1, 1]"
      @move="move"
      class="border-zinc-700 border-r border-b"
    ></InventoryCell>
    <InventoryCell
      :data="model.grid[1][2]"
      :coordinate="[1, 2]"
      @move="move"
      class="border-zinc-700 border-r border-b"
    ></InventoryCell>
    <InventoryCell
      :data="model.grid[1][3]"
      :coordinate="[1, 3]"
      @move="move"
      class="border-zinc-700 border-r border-b"
    ></InventoryCell>
    <InventoryCell
      :data="model.grid[1][4]"
      :coordinate="[1, 4]"
      @move="move"
      class="border-zinc-700 border-b"
    ></InventoryCell>
    <InventoryCell
      :data="model.grid[2][0]"
      :coordinate="[2, 0]"
      @move="move"
      class="border-zinc-700 border-r border-b"
    ></InventoryCell>
    <InventoryCell
      :data="model.grid[2][1]"
      :coordinate="[2, 1]"
      @move="move"
      class="border-zinc-700 border-r border-b"
    ></InventoryCell>
    <InventoryCell
      :data="model.grid[2][2]"
      :coordinate="[2, 2]"
      @move="move"
      class="border-zinc-700 border-r border-b"
    ></InventoryCell>
    <InventoryCell
      :data="model.grid[2][3]"
      :coordinate="[2, 3]"
      @move="move"
      class="border-zinc-700 border-r border-b"
    ></InventoryCell>
    <InventoryCell
      :data="model.grid[2][4]"
      :coordinate="[2, 4]"
      @move="move"
      class="border-zinc-700 border-b"
    ></InventoryCell>
    <InventoryCell
      :data="model.grid[3][0]"
      :coordinate="[3, 0]"
      @move="move"
      class="border-zinc-700 border-r border-b"
    ></InventoryCell>
    <InventoryCell
      :data="model.grid[3][1]"
      :coordinate="[3, 1]"
      @move="move"
      class="border-zinc-700 border-r border-b"
    ></InventoryCell>
    <InventoryCell
      :data="model.grid[3][2]"
      :coordinate="[3, 2]"
      @move="move"
      class="border-zinc-700 border-r border-b"
    ></InventoryCell>
    <InventoryCell
      :data="model.grid[3][3]"
      :coordinate="[3, 3]"
      @move="move"
      class="border-zinc-700 border-r border-b"
    ></InventoryCell>
    <InventoryCell
      :data="model.grid[3][4]"
      :coordinate="[3, 4]"
      @move="move"
      class="border-zinc-700 border-b"
    ></InventoryCell>
    <InventoryCell
      :data="model.grid[4][0]"
      :coordinate="[4, 0]"
      @move="move"
      class="border-zinc-700 border-r"
    ></InventoryCell>
    <InventoryCell
      :data="model.grid[4][1]"
      :coordinate="[4, 1]"
      @move="move"
      class="border-zinc-700 border-r"
    ></InventoryCell>
    <InventoryCell
      :data="model.grid[4][2]"
      :coordinate="[4, 2]"
      @move="move"
      class="border-zinc-700 border-r"
    ></InventoryCell>
    <InventoryCell
      :data="model.grid[4][3]"
      :coordinate="[4, 3]"
      @move="move"
      class="border-zinc-700 border-r"
    ></InventoryCell>
    <InventoryCell
      :data="model.grid[4][4]"
      :coordinate="[4, 4]"
      @move="move"
      class="border-zinc-700"
    ></InventoryCell>
  </div>
</template>
