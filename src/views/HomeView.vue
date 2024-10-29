<script setup lang="ts">
import { onMounted } from 'vue'
import { useQuotes } from '@/stores/quotes'
import RandomQuote from '@/components/RandomQuote.vue'

const store = useQuotes()

const fetchData = async () => {
  await store.getQuote()
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <main class="home-page">
    <h1 class="home-page__title">Quote Generator</h1>
    <RandomQuote />
  </main>
</template>

<style scoped lang="scss">
.home-page {
  margin: 5rem 0;

  &__title {
    text-align: center;
    margin-bottom: 2rem;
  }
}
</style>
