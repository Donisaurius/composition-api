<template>
  <h2 v-if="isLoading">Espere por favor</h2>
  <h2 v-else>Users</h2>
  <h5 v-if="!users.length && errorMessage">{{ errorMessage }}</h5>
  <div v-if="users.length">
    <ul>
      <li v-for="(user, index) in users" :key="index">
        <h4>
          Nombre del usuario: {{ user.first_name }}
        </h4>
        <h5>Email: {{ user.email }}</h5>
      </li>
    </ul>
  </div>

  <button @click="prevPage">Atras</button>
  <button @click="nextPage">Siguiente</button>
  <span>Pagina: {{ currentPage }}</span>
</template>

<script>
import useUsers from '../composables/useUsers'

export default {
  setup() {

    return {

      ...useUsers()

    }

  }
}
</script>

<style scoped>
h2 {
  text-align: center;
  width: 100%;
}

div {
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>