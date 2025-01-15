<script setup>
import { useTodoListStore } from "@/stores/todoListStore";

const store = useTodoListStore();
</script>

<template>
  <div class="form-group add-task">
    <button
      v-if="!store.isShowForm"
      @click="store.toggleForm()"
      type="button"
      class="btn btn-info btn-block"
    >
      Add Task
    </button>
    <button
      v-else
      @click="store.toggleForm()"
      type="button"
      class="btn btn-primary btn-block"
    >
      Close Form
    </button>
  </div>
</template>
