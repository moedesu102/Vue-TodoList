<script setup>
import ControlSort from "./ControlSort.vue";
import ControlSearch from "./ControlSearch.vue";

defineProps({
  strSearch: {
    type: String,
    default: "",
  },
  orderBy: {
    type: String,
    default: "name",
  },
  orderDir: {
    type: String,
    default: "asc",
  },
});

const emit = defineEmits(["handleSearch", "handleSort"]);
const handleSearch = (data) => {
  emit("handleSearch", data);
};
const handleSort = (data) => {
  emit("handleSort", data);
};
</script>

<template>
  <div class="col-12">
    <div class="row">
      <!-- SORT : START -->
      <control-sort
        :orderBy="orderBy"
        :orderDir="orderDir"
        @handleSort="handleSort"
      />
      <!-- SORT : END -->

      <!-- SEARCH : START -->
      <control-search
        @handleSearch="handleSearch"
        :strSearch="strSearch"
      />
      <!-- SEARCH : END -->
    </div>
  </div>
</template>
