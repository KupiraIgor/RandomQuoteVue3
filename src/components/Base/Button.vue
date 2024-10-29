<script setup>
defineProps({
  color: {
    type: String,
    default: 'green',
  },
})

const emit = defineEmits(['click'])
</script>

<template>
  <button class="base-button" :class="color" @click="emit('click')">
    <span><slot /></span>
  </button>
</template>

<style lang="scss" scoped>
.base-button {
  display: inline-flex;
  color: var(--color-white);
  border-radius: 0.6rem;
  padding: 0.6rem 1.6rem;

  &.green {
    background: var(--color-green);
  }

  &.blue {
    background: var(--color-blue);
  }
}
</style>
