<script setup>
import { useTodoListStore } from "@/stores/todoListStore";
import { onMounted, watch } from "vue";
import TodoListItem from "./TodoListItem.vue";

const store = useTodoListStore();

//created
onMounted(() => {
    const tasks = localStorage.getItem("tasks") || `[]`;
    store.changeTasks(JSON.parse(tasks));
});
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
                <tbody v-if="store.listTaskSearchSort.length !== 0">
                    <todo-list-item
                        v-for="(task, index) in store.listTaskSearchSort"
                        :key="task.id"
                        :task="task"
                        :index="index + 1"
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
