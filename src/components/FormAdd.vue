<script setup>
defineProps({
  isShowForm: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["handleToggleForm"]);

const onClickAddTask = () => {
  emit("handleToggleForm");
};
</script>

<template>
  <div class="form-group add-task">
    <button
      v-if="!isShowForm"
      v-on:click="onClickAddTask"
      type="button"
      class="btn btn-info btn-block"
    >
      Add Task
    </button>
    <button
      v-else
      v-on:click="onClickAddTask"
      type="button"
      class="btn btn-primary btn-block"
    >
      Close Form
    </button>
  </div>
</template>

<style scoped></style>
