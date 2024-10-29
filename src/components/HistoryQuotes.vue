<script setup lang="ts">
import { useQuotes } from '@/stores/quotes'
import { storeToRefs } from 'pinia'

const store = useQuotes()

const { quotesHistory } = storeToRefs(store)
</script>

<template>
  <div class="history-quotes">
    <div class="container">
      <div class="history-quotes__body">
        <h2 class="history-quotes__title">History</h2>
        <ul class="history-quotes__list">
          <li v-for="item of quotesHistory" class="history-quotes__item">
            <div class="history-quotes__item-quote">{{ item.quote }}</div>
            <div class="history-quotes__item-author">{{ item.author }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.history-quotes {
  &__title {
    text-align: center;
    margin-bottom: 2rem;
  }

  &__list {
    background: var(--color-white);
    border-radius: 0.6rem;
    padding: 1rem;
  }

  &__item {
    border-bottom: 1px solid #b8b8b8;
    padding: 1rem;

    &-quote {
      position: relative;
      margin-bottom: 0.5rem;
      font-size: 1.8rem;
      padding-left: 2rem;

      &::before {
        content: '“';
        position: absolute;
        left: 0;
        top: 0;
        font-size: 5rem;
        line-height: 1;
      }
    }

    &-author {
      text-align: end;
    }

    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
