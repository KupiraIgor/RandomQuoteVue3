<script setup lang="ts">
import { useQuotes } from '@/stores/quotes'
import { storeToRefs } from 'pinia'
import Button from '@/components/Base/Button.vue'

const store = useQuotes()

const getNewQuote = async () => {
  await store.getQuote()
}

const { randomQuote } = storeToRefs(store)
</script>

<template>
  <div class="random-quote">
    <div class="container">
      <div v-if="randomQuote" class="random-quote__body">
        <div class="random-quote__quote">
          {{ randomQuote.quote }}
        </div>
        <div class="random-quote__author">- {{ randomQuote.author }}</div>
        <div class="random-quote__buttons">
          <Button @click="getNewQuote">Generate Quote</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.random-quote {
  &__body {
    background: var(--color-white);
    border-radius: 0.6rem;
    padding: 3rem 2rem 2rem;
  }

  &__quote {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  &__author {
    text-align: center;
    margin-bottom: 2rem;
  }

  &__buttons {
    display: flex;
    justify-content: center;
  }
}
</style>
