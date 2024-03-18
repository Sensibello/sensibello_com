<template>
    <h3 :id="id">
      
        <slot />

    </h3>
  </template>
  
  <script setup lang="ts">
  import { computed, useRuntimeConfig } from '#imports'
  
  const props = defineProps<{ id?: string }>()
  
  const { headings } = useRuntimeConfig().public.mdc
  const generate = computed(() => props.id && headings?.anchorLinks?.h2)
  </script>

<style>
h3 {
    font-size: 1.5rem;
    font-weight: 900;
}
</style>