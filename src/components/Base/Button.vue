<script setup>
defineProps({})

const emit = defineEmits(['click'])
</script>

<template>
  <button class="base-button" @click="emit('click')">
    <span><slot /></span>
  </button>
</template>

<style lang="scss" scoped>
.base-button {
  display: inline-flex;
  background: var(--color-green);
  color: var(--color-white);
  border-radius: 0.6rem;
  padding: 0.6rem 1.6rem;
}
</style>
