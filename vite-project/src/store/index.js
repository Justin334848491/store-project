import { defineStore } from "pinia";
import axios from "axios";

export const indexStore = defineStore("main", {
  state: () => ({
    shoppingcart: [],
    movies: [],
    startup: 0,
    testcount: 0,
  }),
  actions: {
    displayMovies(text, id, posterimage) {
      this.movies.push({
        text,
        id,
        posterimage,
      });
    },
  },
});
// Methods can also be async
// Learn getters - modify state variables without actually changing them
