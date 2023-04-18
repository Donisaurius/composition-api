<template>
  <h2>Espere por favor</h2>
  <h2>Users</h2>
  <h5>Error en la carga...</h5>

  <div>
    <ul>
      <li>
        <h4>
          Nombre del usuario
        </h4>
        <h6>Email</h6>
      </li>
    </ul>
  </div>

  <button>Atras</button>
  <button>Siguiente</button>
  <span>Pagina: 3</span>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue';

export default {
  setup() {
    const users = ref([]);
    const isLoading = ref(true);
    const currentPage = ref(1)
    const errorMessage = ref(1)

    const getUsers = async (page = 1) => {

      if (page <= 0) page = 1

      isLoading.value = true;

      const { data } = await axios.get(`https://reqres.in/api/users?page=${page}`);

      console.log('data', data);

      if (data.length) {
        users.value = data.users;
        currentPage.value = page;
      } else if (currentPage.value > 0) {
        errorMessage.value = "No hay mas usuarios"
      }


    }

    getUsers()

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