<script setup lang="ts">
import { ref, Transition, unref } from "vue";
import { useInventoryStore } from "../store/inventory";

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  itemCoordinate: {
    type: Array<number>,
    required: true,
  },
});
const emits = defineEmits(["close"]);

const inventoryStore = useInventoryStore();
const amountToRemove = ref<number>(0);

const remove = () => {
  inventoryStore.removeItems(props.itemCoordinate, amountToRemove.value);
  showRemoveInput.value = false;
  emits("close");
};

const showRemoveInput = ref<boolean>(false);
</script>

<template>
  <!-- <Transition
    enter-from-class="translate-x-[150%] opacity-0"
    leave-to-class="translate-x-[150%] opacity-0"
    enter-active-class="transition duration-300 transform-gpu"
    leave-active-class="transition duration-300 transform-gpu"
    name="modal"
  > -->
  <Transition
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
    enter-active-class="transition duration-150 transform-gpu"
    leave-active-class="transition duration-150 transform-gpu"
    name="modal"
  >
    <div
      v-if="show"
      class="bg-slate-300/60 dark:bg-neutral-800/80 backdrop-blur-lg fixed w-2/5 h-full float-right rounded-r-md"
    >
      <div class="relative h-full">
        <div class="flex flex-col justify-center items-center pt-10">
          <div class="h-[40%] w-[40%] aspect-square bg-yellow-300"></div>
          <div class="px-5 mt-5 flex flex-col gap-2">
            <div class="w-32 h-3 rounded-lg bg-slate-400"></div>
            <div class="w-24 h-3 rounded-lg bg-slate-400"></div>
            <div class="w-32 h-3 rounded-lg bg-slate-400"></div>
            <div class="w-16 h-3 rounded-lg bg-slate-400"></div>
            <div class="w-52 h-3 rounded-lg bg-slate-400"></div>
            <div class="w-16 h-3 rounded-lg bg-slate-400"></div>
            <div class="w-52 h-3 rounded-lg bg-slate-400"></div>
          </div>
        </div>
        <div class="absolute inset-x-0 bottom-0 h-36">
          <hr class="border-x border-zinc-500 dark:border-zinc-700 m-2" />
          <div
            v-if="showRemoveInput == false"
            class="m-5 flex flex-col items-center justify-center"
          >
            <button
              type="button"
              class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-md hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out"
              @click="showRemoveInput = true"
            >
              Удалить предмет
            </button>
          </div>
          <div v-else class="m-5">
            <input
              type="number"
              v-model="amountToRemove"
              class="block w-full px-2 py-3 text-sm font-normal text-zinc-700 dark:text-zinc-300 border-zinc-500 dark:border-zinc-700 bg-inherit bg-clip-padding border border-solid rounded-md transition ease-in-out focus:outline-none"
              placeholder="Введите количество"
            />
            <div class="w-full mt-5 flex flex-row justify-between">
              <button
                type="button"
                class="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-md hover:bg-gray-300 focus:bg-gray-300 focus:outline-none focus:ring-0 active:bg-gray-400 transition duration-150 ease-in-out"
                @click="showRemoveInput = false"
              >
                Отмена
              </button>
              <button
                type="button"
                class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-md hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out"
                @click="remove"
              >
                Подтвердить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
