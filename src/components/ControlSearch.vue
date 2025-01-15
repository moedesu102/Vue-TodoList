<script setup>
defineProps({
  strSearch: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["handleSearch"]);

const handleClear = () => {
  emit("handleSearch", "");
};
const handleSearch = (e) => {
  emit("handleSearch", e.target.value);
};
</script>

<template>
  <div class="col-12 col-md-9 mx-auto">
    <div class="input-group shadow-sm">
      <input
        :value="strSearch"
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
