<script setup>
import { useTodoListStore } from "@/stores/todoListStore";

const store = useTodoListStore();
</script>

<template>
  <div class="col-12 col-md-3">
    <div class="form-group">
      <!-- Dropdown Sort -->
      <b-dropdown
        text="Sort by"
        variant="primary"
        class="w-100 text-center"
        menu-class="shadow"
      >
        <b-dropdown-item @click="store.handleSort('name', 'asc')">
          Name ASC
        </b-dropdown-item>
        <b-dropdown-item @click="store.handleSort('name', 'desc')">
          Name DESC
        </b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item @click="store.handleSort('level', 'asc')">
          Level ASC
        </b-dropdown-item>
        <b-dropdown-item @click="store.handleSort('level', 'desc')">
          Level DESC
        </b-dropdown-item>
      </b-dropdown>

      <!-- Order Display -->
    </div>
  </div>
  <div class="col-12 col-md-3">
    <span class="order badge text-bg-danger">
      {{ store.orderBy.toUpperCase() }} - {{ store.orderDir.toUpperCase() }}
    </span>
  </div>
</template>

<style scoped>
.order {
  text-transform: uppercase;
}
</style>
