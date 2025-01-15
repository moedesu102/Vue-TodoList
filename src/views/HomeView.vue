<script setup>
import { computed, onMounted, ref, watch } from "vue";
import CompControl from "../components/CompControl.vue";
import CompForm from "../components/CompForm.vue";
import CompTitle from "../components/CompTitle.vue";
import TodoListTable from "../components/TodoListTable.vue";

//data
const listTask = ref([]);
const orderBy = ref("");
const orderDir = ref("asc");
const strSearch = ref("");
const isShowForm = ref(false);
const taskSelected = ref(null);

//created
onMounted(() => {
  const tasks = localStorage.getItem("tasks");
  if (tasks !== null) {
    listTask.value = JSON.parse(tasks);
  } else {
    listTask.value = [];
  }
});

watch(
  listTask,
  (newTasks) => {
    console.log("123");
    const tasksString = JSON.stringify(newTasks);
    localStorage.setItem("tasks", tasksString);
  },
  { deep: true }
);

// computed
const listTaskSearch = computed(() => {
  return listTask.value.filter((item) =>
    item.name.toLowerCase().includes(strSearch.value.toLowerCase())
  );
});

const listTaskSort = computed(() => {
  const listTask = [...listTaskSearch.value];
  listTask.sort(compareSort);
  return listTask;
});

//methods
const handleSort = (data) => {
  orderBy.value = data.orderBy;
  orderDir.value = data.orderDir;
};

const handleSearch = (data) => {
  strSearch.value = data;
};

const toggleForm = () => {
  if (isShowForm.value) taskSelected.value = null;
  isShowForm.value = !isShowForm.value;
};

const handleAddNewTask = (task) => {
  listTask.value.push(task);
};

const handleEditTaskById = (taskEdit) => {
  let index = listTask.value.findIndex((item) => item.id === taskEdit.id);

  if (index !== -1) {
    listTask.value.splice(index, 1, taskEdit);
    toggleForm();
  }
};

const compareSort = (a, b) => {
  var numberSort = orderDir.value === "asc" ? -1 : 1;

  if (a[orderBy.value] < b[orderBy.value]) return numberSort;
  else if (a[orderBy.value] > b[orderBy.value]) return numberSort * -1;
  return 0;
};

const handleEdit = (taskEdit) => {
  isShowForm.value = true;
  taskSelected.value = taskEdit;
};

const handleDelete = (taskDelete) => {
  listTask.value = listTask.value.filter((item) => item.id !== taskDelete.id);
};
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
          <comp-control
            :orderBy="orderBy"
            :orderDir="orderDir"
            :strSearch="strSearch"
            @handleSort="handleSort"
            @handleSearch="handleSearch"
          />
        </div>

        <!-- Form Component -->
        <div class="col-12 col-lg-6">
          <comp-form
            :isShowForm="isShowForm"
            :taskSelected="taskSelected"
            @toggleForm="toggleForm"
            @handleAddNewTask="handleAddNewTask"
            @handleEditTaskById="handleEditTaskById"
          />
        </div>
      </b-row>

      <!-- Todo List Table -->
      <section>
        <todo-list-table
          :listTask="listTaskSort"
          @handleEdit="handleEdit"
          @handleDelete="handleDelete"
        />
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
