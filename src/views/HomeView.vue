<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <p>{{ ironman }}</p>
    <p>{{ hulk }}</p>
    <button @click="changeIronman">changeIronman</button>
    <button @click="changeHulk">changeHulk</button>

    <h1>Ironman: {{ ironmanIsAlive }}</h1>
    <h1>Hulk: {{ hulkIsAlive }}</h1>

    <button @click="changeStatus">Change status</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';


export default {
  name: 'HomeView',
  setup() {
    const ironman = ref({ name: "Tony", age: 50 })
    const hulk = reactive({ name: "Bruce", age: 50 }) //Reactive solo funciona con {}, objetos

    const ironmanIsAlive = reactive(false)
    const hulkIsAlive = ref(true)

    const changeStatus = () => {
      // ironmanIsAlive = !ironmanIsAlive;
      hulkIsAlive.value = !hulkIsAlive.value
    }

    return {
      ironman, hulk, ironmanIsAlive, hulkIsAlive,

      changeStatus,
      changeIronman: () => {
        ironman.value.name = "Tony Stark"
        ironman.value.age = 55
      },

      changeHulk: () => {
        hulk.name = "Bruce banner"
        hulk.age = 45
      },
    }
  }
}
</script>
