<template>
  <h1>
    POKEMON: {{ pokemonId }}
  </h1>
  <form @submit.prevent="searchPokemon">
    <input v-model="pokemonId" type="number" placeholder="Numero del pokemon" autofocus ref="input">

  </form>
  <br>
  <span>Presione enter para buscar el pokemon</span>
</template>

<script>
import { ref, onActivated } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {

    const router = useRouter();

    const pokemonId = ref(1);
    const input = ref();

    onActivated(() => {
      input.value.select()
    })

    return {
      pokemonId,
      input,

      searchPokemon: () => {
        router.push({ name: "pokemon-id", params: { id: pokemonId.value } })
      }
    }
  }
}
</script>