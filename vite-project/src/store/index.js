import { defineStore } from "pinia";

export const indexStore = defineStore("main", {
  state: () => ({
    shoppingcart: [],
    startup: 0,
    testcount: 0,
  }),
  actions: {
    addCount() {
        this.testcount++;
        console.log(this.testcount)
    },
    Login2() {
        this.testcount
  },
}});

// Methods can also be async
// Learn getters - modify state variables without actually changing them
