<script setup lang="ts">
import { ref } from "vue";

const dragStarted = ref<boolean>(false);

const props = defineProps({
  data: {
    type: Object,
    require: true,
  },
  coordinate: {
    type: Array<number>,
    require: true,
  },
});
const emits = defineEmits(["move", "add", "openOptions"]);

const onDragStart = (event: DragEvent) => {
  dragStarted.value = true;
  (event.dataTransfer as DataTransfer).effectAllowed = "move";
  (event.dataTransfer as DataTransfer).dropEffect = "move";
  (event.dataTransfer as DataTransfer).setData(
    "coordFrom",
    JSON.stringify(props.coordinate)
  );
};

const onDragEnd = (event: DragEvent) => {
  dragStarted.value = false;
};

const onDrop = (event: DragEvent) => {
  const from = JSON.parse(
    (event.dataTransfer as DataTransfer).getData("coordFrom")
  );
  emits("move", from, props.coordinate);
};
const openOptions = () => {
  if (JSON.stringify(props.data) !== "{}")
    emits("openOptions", props.coordinate);
};
const addItem = () => {
  emits("add", props.coordinate);
};
</script>

<template>
  <div class="flex items-end justify-end">
    <div
      :draggable="data?.amount !== undefined && data?.amount > 0"
      class="w-full h-full flex justify-center items-center overflow-hidden rounded-md"
      :class="{
        'bg-slate-300 dark:bg-neutral-800 border border-zinc-700': dragStarted,
      }"
      @dragstart="onDragStart($event)"
      @dragend="onDragEnd($event)"
      @drop="onDrop($event)"
      @dragover.prevent
      @dragenter.prevent
      @click.right.prevent="openOptions"
      @click.left.prevent="addItem"
    >
      <div v-if="data?.amount" class="h-4/5 aspect-square relative">
        <div class="h-5/6 aspect-square bg-yellow-300 absolute left-4"></div>
        <div
          v-if="data?.amount > 1"
          class="h-5/6 aspect-square bg-yellow-400 absolute top-2 left-2"
        ></div>
        <div
          v-if="data?.amount > 1"
          class="h-5/6 aspect-square bg-yellow-500 absolute top-4"
        ></div>
      </div>
    </div>
    <div
      v-if="data?.amount"
      class="absolute border-t border-l p-1 text-sm font-light rounded-[0.3rem] border-zinc-700 text-zinc-700 dark:text-zinc-300"
    >
      {{ data?.amount }}
    </div>
  </div>
</template>
