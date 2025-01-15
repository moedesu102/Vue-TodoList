<script setup>
import { useTodoListStore } from "@/stores/todoListStore";

const store = useTodoListStore();

const handleClear = () => {
  store.handleSearch("");
};
const handleSearch = (e) => {
  store.handleSearch(e.target.value);
};
</script>

<template>
  <div class="col-12 col-md-6 mx-auto">
    <div class="input-group shadow-sm">
      <input
        :value="store.strSearch"
        @input="handleSearch"
        type="text"
        class="form-control"
        placeholder="Search for..."
        aria-label="Search for"
      />
      <button @click="handleClear" class="btn btn-outline-info" type="button">
        Clear!
      </button>
    </div>
  </div>
</template>
