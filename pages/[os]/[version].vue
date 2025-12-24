<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">
      Icons for {{ $route.params.os }} {{ $route.params.version }}
    </h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="icon in icons"
        :key="icon.id"
        class="border rounded p-4"
      >
        <img
          :src="icon.path"
          :alt="icon.name"
          class="w-full h-32 object-contain"
        />
        <h3 class="mt-2">{{ icon.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const icons = ref([
  {
    id: 1,
    name: `${route.params.os} ${route.params.version} Logo`,
    path: `https://via.placeholder.com/150?text=${route.params.os}+${route.params.version}`,
  },
]);
</script>