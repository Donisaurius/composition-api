<template>
  <div>
    <h2>List de tareas de Thanos</h2>
    <div>Pendientes: {{ pending }}</div>
    <hr>
    <div>All: {{ all }}</div>
    <div>Completed: {{ completed }}</div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';


export default {

  setup() {

    const store = useStore();

    return {
      pending: computed(() => store.getters['pendingTodos']),
      all: computed(() => store.getters['allTodos']),
      completed: computed(() => store.getters['completedTodos']),
    }
  }
}

</script>