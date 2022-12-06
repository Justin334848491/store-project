<template>
    <h1>The Endless Galaxy Movie Store</h1>
    <input id="loginbutton" type="button" value="login" @click="login()">
    </template>
<script setup>

import { storeToRefs } from 'pinia';
import { indexStore } from "../store/index.js";
import { ref } from 'vue';
import router from '../router';

    const index = indexStore()

   
    function login() {
        router.push("./playerStats")

  
  
    }

</script>

<style>

h1 {
    text-align: center;
}

#loginbutton{
    position: relative;
    width: 125px;
    height: 25px;
}


</style>