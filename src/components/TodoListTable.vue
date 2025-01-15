<script setup>
import TodoListItem from "./TodoListItem.vue";

defineProps({
  listTask: {
    type: Array,
    default: [],
  },
});

const emit = defineEmits(["handleEdit", "handleDelete"]);

const handleEdit = (taskEdit) => {
  emit("handleEdit", taskEdit);
};
const handleDelete = (taskDelete) => {
  emit("handleDelete", taskDelete);
};
</script>

<template>
  <div class="card shadow-sm border-0">
    <!-- Card Header -->
    <div class="card-header text-white bg-success">
      <h4 class="mb-0">List Task</h4>
    </div>

    <!-- Card Body -->
    <div class="card-body p-0">
      <table class="table table-hover table-striped mb-0">
        <!-- Table Header -->
        <thead class="thead-dark">
          <tr>
            <th style="width: 10%" class="text-center">#</th>
            <th>Task</th>
            <th style="width: 20%" class="text-center">Level</th>
            <th style="width: 160px" class="text-center">Action</th>
          </tr>
        </thead>

        <!-- Table Body -->
        <tbody v-if="listTask.length !== 0">
          <todo-list-item
            v-for="(task, index) in listTask"
            :key="task.id"
            :task="task"
            :index="index + 1"
            @handleEdit="handleEdit"
            @handleDelete="handleDelete"
          />
        </tbody>

        <!-- Empty State -->
        <tbody v-else>
          <tr>
            <td colspan="4" class="text-center py-4">
              <h5 class="text-muted mb-0">No tasks available</h5>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
