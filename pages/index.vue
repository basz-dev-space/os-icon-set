<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">OS Icon Set Prototype</h1>

    <!-- Search Bar -->
    <div class="mb-6">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search icons..."
        class="w-full p-2 border rounded"
      />
    </div>

    <!-- Icon Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-for="icon in filteredIcons"
        :key="icon.id"
        class="border rounded p-4 hover:shadow-lg transition-shadow"
      >
        <h3 class="font-semibold mb-2">{{ icon.name }}</h3>
        <img
          :src="icon.path"
          :alt="icon.name"
          class="w-full h-32 object-contain mb-2"
        />
        <button
          @click="downloadIcon(icon)"
          class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Download
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const searchQuery = ref('');
const icons = ref([
  {
    id: 1,
    name: "Windows 10 Logo",
    os: "windows",
    version: "10",
    path: "https://via.placeholder.com/150?text=Win10",
  },
  {
    id: 2,
    name: "Windows 11 Logo",
    os: "windows",
    version: "11",
    path: "https://via.placeholder.com/150?text=Win11",
  },
  {
    id: 3,
    name: "macOS Ventura Logo",
    os: "macos",
    version: "ventura",
    path: "https://via.placeholder.com/150?text=Ventura",
  },
]);

const filteredIcons = computed(() => {
  return icons.value.filter(icon =
    icon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
});

const downloadIcon = (icon) => {
  alert(`Downloading ${icon.name}`);
};
</script>