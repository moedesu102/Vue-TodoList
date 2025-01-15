<script setup>
defineProps({
  orderBy: {
    type: String,
    default: "name",
  },
  orderDir: {
    type: String,
    default: "asc",
  },
});

const emit = defineEmits(["handleSort"]);

const handleSort = (orderBy, orderDir) => {
  let data = { orderBy, orderDir };
  emit("handleSort", data);
};
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
        <b-dropdown-item @click="handleSort('name', 'asc')">
          Name ASC
        </b-dropdown-item>
        <b-dropdown-item @click="handleSort('name', 'desc')">
          Name DESC
        </b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item @click="handleSort('level', 'asc')">
          Level ASC
        </b-dropdown-item>
        <b-dropdown-item @click="handleSort('level', 'desc')">
          Level DESC
        </b-dropdown-item>
      </b-dropdown>

      <!-- Order Display -->
      <div class="mt-3 text-center">
        <span class="order badge badge-success px-3 py-2">
          {{ orderBy.toUpperCase() }} - {{ orderDir.toUpperCase() }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.order {
  text-transform: uppercase;
}
</style>
