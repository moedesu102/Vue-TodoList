<script setup>
import { useTodoListStore } from "@/stores/todoListStore";
import { v4 as uuidv4 } from "uuid";
import { ref, watch } from "vue";
import FormAdd from "./FormAdd.vue";

const taskname = ref("");
const level = ref(0);
const store = useTodoListStore();

watch(
    () => store.taskSelected, // Theo dõi props.taskSelected
    (newData, oldData) => {
        if (newData !== null) {
            // Người dùng có click vào button edit
            taskname.value = newData.name;
            level.value = newData.level;
        }
    }
);

const handleAddNew = () => {
    if (!taskname.value || taskname.value.trim() === "") {
        alert("Task name is required.");
        return;
    }
    let objTask = {
        id: uuidv4(),
        name: taskname.value,
        level: parseInt(level.value),
    };

    store.handleAddNewTask(objTask);
    handleCancel();
};

const handleCancel = () => {
    store.toggleForm();
    handleResetData();
};

const handleResetData = () => {
    taskname.value = "";
    level.value = 0;
};

const handleEditTask = () => {
    let objTaskEdit = {
        id: store.taskSelected.id,
        name: taskname.value,
        level: parseInt(level.value),
    };
    store.handleEditTaskById(objTaskEdit);
    handleResetData();
};
</script>

<template>
    <b-col cols="12" lg="6">
        <!-- ADD : START -->
        <form-add />
        <!-- ADD : END -->

        <!-- Form Section -->
        <form
            v-if="store.isShowForm"
            action=""
            method="POST"
            class="p-3 rounded shadow-sm bg-light"
        >
            <!-- Task Name Input -->
            <div class="form-group mb-3">
                <label for="taskname" class="form-label">Task Name</label>
                <input
                    id="taskname"
                    v-model="taskname"
                    type="text"
                    class="form-control"
                    placeholder="Enter task name"
                />
            </div>

            <!-- Level Dropdown -->
            <div class="form-group mb-3">
                <label for="level" class="form-label">Priority Level</label>
                <select
                    id="level"
                    v-model="level"
                    class="form-control"
                    required="required"
                >
                    <option value="0">Small</option>
                    <option value="1">Medium</option>
                    <option value="2">High</option>
                </select>
            </div>

            <!-- Buttons -->
            <div class="d-flex justify-content-end gap-2">
                <button
                    v-if="store.taskSelected === null"
                    @click="handleAddNew"
                    type="button"
                    class="btn btn-primary"
                >
                    Submit
                </button>
                <button
                    v-else
                    @click="handleEditTask"
                    type="button"
                    class="btn btn-warning"
                >
                    Update
                </button>
                <button
                    @click="handleCancel"
                    type="button"
                    class="btn btn-secondary"
                >
                    Cancel
                </button>
            </div>
        </form>
    </b-col>
</template>
