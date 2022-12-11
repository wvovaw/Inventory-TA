<script setup lang="ts">
import InventoryGrid from "./components/InventoryGrid.vue";
import { useUiStore } from "./store/ui";
import { useInventoryStore } from "./store/inventory";

const ui = useUiStore();

const inventory = useInventoryStore();

if (localStorage.getItem("inventoryState")) {
  inventory.$state.inventory = JSON.parse(
    localStorage.getItem("inventoryState") as string
  );
}
if (localStorage.getItem("darktheme")) {
  ui.$state.dark = JSON.parse(localStorage.getItem("darktheme") as string);
}
</script>

<template>
  <div :class="{ dark: ui.dark }">
    <div
      class="w-full h-screen flex flex-col gap-5 p-5 bg-slate-100 dark:bg-neutral-900 transition-colors duration-200"
    >
      <main class="h-[85%] flex flex-row gap-5">
        <div
          class="w-1/3 p-3 overflow-hidden rounded-lg border-2 dark:border-zinc-700 border-zinc-400 bg-slate-300 dark:bg-neutral-800 transition-colors duration-200"
        >
          <div
            class="w-full h-[50%] flex justify-center items-center overflow-hidden rounded-lg"
          >
            <img
              src="https://picsum.photos/800/800/?grayscale=1"
              class="shrink-0 min-w-full min-h-full"
            />
          </div>
          <div class="px-5 mt-5 flex flex-col gap-2">
            <div class="w-full h-8 rounded-lg bg-slate-400"></div>
            <div class="w-16 h-3 rounded-lg bg-slate-400"></div>
            <div class="w-32 h-3 rounded-lg bg-slate-400"></div>
            <div class="w-24 h-3 rounded-lg bg-slate-400"></div>
            <div class="w-16 h-3 rounded-lg bg-slate-400"></div>
            <div class="w-32 h-3 rounded-lg bg-slate-400"></div>
            <div class="w-52 h-3 rounded-lg bg-slate-400"></div>
            <div class="w-52 h-3 rounded-lg bg-slate-400"></div>
            <div
              class="w-52 h-3 mt-6 self-center rounded-lg bg-slate-400"
            ></div>
          </div>
        </div>
        <div
          class="w-full h-full rounded-lg border-2 dark:border-zinc-700 border-zinc-400 bg-slate-300 dark:bg-neutral-800 transition-colors duration-200"
        >
          <InventoryGrid />
        </div>
      </main>
      <div
        class="h-[15%] p-4 rounded-lg border-2 dark:border-zinc-700 border-zinc-400 bg-slate-300 dark:bg-neutral-800 transition-colors duration-200"
      >
        <div
          class="w-full h-full rounded-lg flex justify-center items-center text-2xl text-teal-900 dark:text-teal-200 font-semibold bg-slate-400 dark:bg-neutral-600 transition-colors duration-200"
          @click="ui.toggleColorscheme()"
        >
          {{ ui.dark ? "dark" : "light" }}
        </div>
      </div>
    </div>
  </div>
</template>
