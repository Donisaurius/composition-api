<template>
  <h1 v-if="!pokemon && !errorMessage">Buscando...</h1>
  <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>
  <template v-else>
    <h3>{{ pokemon.name }}</h3>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" :title="pokemon.name">
    <br />
    <router-link :to="{ name: 'pokemon-search' }">Ir a buscar</router-link>
  </template>
</template>

<script>
import usePokemon from '@/composables/usePokemon';
import { watch } from 'vue';

import { useRoute, onBeforeRouteLeave } from 'vue-router';

export default {
  setup() {
    const route = useRoute();

    const pokemonId = route.params.id;
    const { isLoading, errorMessage, pokemon, searchPokemon } = usePokemon(pokemonId);

    watch(() => route.params.id, (value) => searchPokemon(value))

    onBeforeRouteLeave(() => {

      const answer = window.confirm('¿Esta seguro que desea salir?');

      if (!answer) return false

    })

    return { isLoading, errorMessage, pokemon }
  }
}
</script>