<template>
  <h2>Counter view</h2>
  <h3>{{ counter }}</h3>
  <button @click="increaseCounter">+</button>
  <button @click="decreaseCounter">-</button>
</template>

<script>
import useCounter from '@/composables/useCounter'

export default {
  name: "CounterView",
  setup() {

    const { counter, increaseCounter, decreaseCounter } = useCounter(25);

    return { counter, increaseCounter, decreaseCounter }
  }
}
</script>