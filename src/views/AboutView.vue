<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <button @click="changeTitle">Change title</button>
  </div>
</template>


<script>
import { onMounted, onUpdated, onUnmounted, onDeactivated, ref } from 'vue';

export default {
  setup() {
    const title = ref("About")
    console.log('SETUP LLAMADO',);

    onMounted(() => {
      console.log('onMounted',);
    })

    onUpdated(() => {
      console.log('onUpdated',);
    })

    onUnmounted(() => {
      console.log('onUnmounted',);
    })

    onDeactivated(() => {
      // Si se utiliza el keep alive del router este es el evento llamado en lugar del unmounted
      console.log('onDeactivated',);
    })

    return {
      title,

      changeTitle: () => {
        title.value += " !"
      }
    }
  }
}
</script>