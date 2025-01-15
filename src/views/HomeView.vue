<script setup>
import { useTodoListStore } from "@/stores/todoListStore";
import { watch } from "vue";
import CompControl from "../components/CompControl.vue";
import CompForm from "../components/CompForm.vue";
import CompTitle from "../components/CompTitle.vue";
import TodoListTable from "../components/TodoListTable.vue";

//data
const store = useTodoListStore();

watch(
    () => store.listTask,
    (newTasks) => {
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    },
    { deep: true }
);
//methods
</script>

<template>
    <div id="app" class="bg-light py-5">
        <b-container>
            <!-- Title Section -->
            <header class="mb-4">
                <comp-title />
            </header>

            <!-- Control and Form Section -->
            <b-row class="align-items-start mb-4">
                <!-- Control Component -->
                <div class="col-12 col-lg-6">
                    <comp-control />
                </div>

                <!-- Form Component -->
                <div class="col-12 col-lg-6">
                    <comp-form />
                </div>
            </b-row>

            <!-- Todo List Table -->
            <section>
                <todo-list-table />
            </section>
        </b-container>
    </div>
</template>

<style scoped>
/* Body Padding */
body {
    padding: 100px 0;
    background-color: #f8f9fa; /* Nhẹ nhàng hơn với màu nền sáng */
    color: #333; /* Văn bản màu dễ đọc */
}

/* Bảng */
.table > tbody > tr > td,
.table > tbody > tr > th,
.table > tfoot > tr > td,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > thead > tr > th {
    vertical-align: middle;
}

/* Container Row Spacing */
.container > .row {
    margin-top: 20px;
    margin-bottom: 30px;
}

/* Badge Medium */
span.badge-medium {
    padding: 11px 10px;
    margin: 0 8px;
    font-size: 16px;
    display: inline-block;
    vertical-align: top;
    background-color: #ffc107; /* Màu vàng nhạt */
    color: #212529;
    border-radius: 0.25rem;
}

/* Responsive Add Task Section */
@media (max-width: 992px) {
    .add-task {
        margin-top: 50px;
    }
}

/* Header Styling */
header {
    text-align: center;
    margin-bottom: 30px;
}

header h1 {
    font-size: 2rem;
    color: #007bff; /* Màu xanh nhạt */
}

/* Section Styling */
section {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

section table {
    border-collapse: separate;
    border-spacing: 0;
}

section table thead th {
    background-color: #e9ecef; /* Header bảng màu sáng */
}

section table tbody tr:hover {
    background-color: #f1f1f1; /* Hover bảng */
}
</style>
