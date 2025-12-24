<template>
  <UContainer>
    <h1 class="text-2xl font-bold mb-4">OS Icon Set</h1>
    <UInput
      v-model="searchQuery"
      placeholder="Search icons..."
      class="mb-4"
    />

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <UCard
        v-for="icon in filteredIcons"
        :key="icon.id"
        class="hover:shadow-lg transition-shadow"
      >
        <template #header>
          <h3>{{ icon.name }}</h3>
        </template>

        <img
          :src="icon.path"
          :alt="icon.name"
          class="w-full h-32 object-contain"
        />

        <template #footer>
          <UButton
            :to="icon.path"
            target="_blank"
            download
            class="w-full"
          >
            Download
          </UButton>
        </template>
      </UCard>
    </div>
  </UContainer>
</template>

<script setup>
import { mockIcons } from '~/utils/mockIcons';

const searchQuery = ref('');

const filteredIcons = computed(() => {
  return mockIcons.filter(icon =
    icon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
});
</script>