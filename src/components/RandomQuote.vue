<script setup lang="ts">
import { useQuotes } from '@/stores/quotes'
import { storeToRefs } from 'pinia'
import { toast } from 'vue3-toastify'
import Button from '@/components/Base/Button.vue'

const store = useQuotes()

const getNewQuote = async () => {
  await store.getQuote()
}

const { randomQuote, errorRandomQuote } = storeToRefs(store)

const copyQuote = () => {
  const tempInput = document.createElement('input')
  tempInput.value = randomQuote.value.quote
  document.body.appendChild(tempInput)

  tempInput.select()
  tempInput.setSelectionRange(0, 99999)

  document.execCommand('copy')

  toast('Quote copied', {
    autoClose: 1500,
    hideProgressBar: true,
    type: 'success',
    theme: 'colored',
  })

  document.body.removeChild(tempInput)
}

const shareToTelegram = () => {
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(`${randomQuote.value.quote} ${randomQuote.value.author}`)}`
  window.open(telegramUrl, '_blank')
}

const shareToTwitter = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${randomQuote.value.quote} ${randomQuote.value.author}`)}`
  window.open(twitterUrl, '_blank')
}
</script>

<template>
  <div class="random-quote">
    <div class="container">
      <div>
        <h1 class="random-quote__title">Quote Generator</h1>
        <div v-if="errorRandomQuote" class="random-quote__error">
          {{ errorRandomQuote.message }}
        </div>
        <div v-if="randomQuote" class="random-quote__body">
          <div class="random-quote__quote">
            {{ randomQuote.quote }}
          </div>
          <div class="random-quote__author">- {{ randomQuote.author }}</div>
          <div class="random-quote__buttons">
            <Button @click="copyQuote">Copy quote</Button>
            <Button @click="getNewQuote">Generate Quote</Button>
          </div>
          <div class="random-quote__buttons">
            <Button @click="shareToTelegram">Share to Telegram</Button>
            <Button @click="shareToTwitter">Share to Twitter</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.random-quote {
  margin-bottom: 4rem;

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
    gap: 1rem;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

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
