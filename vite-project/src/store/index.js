import { defineStore } from 'pinia';

export const indexStore = defineStore("main", {
    state: () => ({
        username: "nullPlayer",
        className: "nullClass",
        shopingcart: []
    }),
    actions: {
        // setUser(name, className){
        //     this.username = name;
        //     this.className = className;
        }
    }
)

// Methods can also be async
// Learn getters - modify state variables without actually changing them 
