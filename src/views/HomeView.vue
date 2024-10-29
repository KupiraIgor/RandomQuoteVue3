<script setup lang="ts">
import { onMounted } from 'vue'
import { useQuotes } from '@/stores/quotes'
import RandomQuote from '@/components/RandomQuote.vue'
import HistoryQuotes from '@/components/HistoryQuotes.vue'

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
    <RandomQuote />
    <HistoryQuotes />
  </main>
</template>

<style scoped lang="scss">
.home-page {
  margin: 5rem 0;
}
</style>
