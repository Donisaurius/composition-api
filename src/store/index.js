import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      {
        id: 1,
        text: "Find infinity stones",
        completed: false,
      },
      {
        id: 2,
        text: "Find soul stone",
        completed: true,
      },
      {
        id: 3,
        text: "Find reality stone",
        completed: false,
      },
      {
        id: 4,
        text: "Find power stone",
        completed: false,
      },
      {
        id: 5,
        text: "Find time stone",
        completed: false,
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  getters: {
    pendingTodos(state) {
      return state.todos.filter((t) => !t.completed).length;
    },
    allTodos(state) {
      return state.todos.length;
    },
    completedTodos(state) {
      return state.todos.filter((t) => t.completed).length;
    },
  },
  modules: {},
});
