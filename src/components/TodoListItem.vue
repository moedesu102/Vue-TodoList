<script setup>
import { computed } from "vue";
import mapLevel from "../mocks/level.js";

const props = defineProps({
  task: {
    type: Object,
    default: null,
  },
  index: Number,
});

const getLevelName = computed(() => {
  return mapLevel[props.task.level].name;
});

const classLevel = computed(() => {
  return mapLevel[props.task.level].class;
});

const emit = defineEmits(["handleEdit", "handleDelete"]);

const handleEdit = () => {
  emit("handleEdit", props.task);
};

const handleDelete = () => {
  if (confirm("Bạn có muốn xóa task có tên là " + props.task.name)) {
    emit("handleDelete", props.task);
  }
};
</script>

<template>
  <tr>
    <!-- Index -->
    <td class="text-center align-middle">{{ index }}</td>

    <!-- Task Name -->
    <td class="align-middle">{{ task.name }}</td>

    <!-- Task Level -->
    <td class="text-center align-middle">
      <span class="badge" :class="classLevel">{{ getLevelName }}</span>
    </td>

    <!-- Action Buttons -->
    <td class="align-middle text-center">
      <div class="d-flex justify-content-center gap-2">
        <button
          @click="handleEdit"
          type="button"
          class="btn btn-warning btn-sm px-3"
        >
          Edit
        </button>
        <button
          @click="handleDelete"
          type="button"
          class="btn btn-danger btn-sm px-3"
        >
          Delete
        </button>
      </div>
    </td>
  </tr>
</template>
