import { ref } from "vue";

const useCounter = (initialValue = 0) => {
  const counter = ref(initialValue);

  return {
    // reactive
    counter,
    // methods
    decreaseCounter: () => {
      counter.value--;
    },
    increaseCounter: () => {
      counter.value++;
    },
  };
};

export default useCounter;
