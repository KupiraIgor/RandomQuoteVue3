<script setup lang="ts">
import { onMounted } from 'vue'
import { useQuotes } from '@/stores/quotes'
import RandomQuote from '@/components/RandomQuote.vue'
import { storeToRefs } from 'pinia'

const store = useQuotes()

const fetchData = async () => {
  await store.getQuote()
}

const { errorRandomQuote } = storeToRefs(store)

onMounted(() => {
  fetchData()
})
</script>

<template>
  <main class="home-page">
    <h1 class="home-page__title">Quote Generator</h1>
    <div v-if="errorRandomQuote" class="home-page__error">
      {{ errorRandomQuote.message }}
    </div>
    <div v-else class="home-page__body">
      <RandomQuote />
    </div>
  </main>
</template>

<style scoped lang="scss">
.home-page {
  margin: 5rem 0;

  &__title {
    text-align: center;
    margin-bottom: 2rem;
  }

  &__error {
    text-align: center;
    color: var(--color-red);
  }
}
</style>
