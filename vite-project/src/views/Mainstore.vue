<template>
    <h1> Galaxy Movie Database </h1>
<input type="button" id="Return" @click="Return3()" value="HomePage">

<input type="button" id="Signin" @click="Shoppingcart()" value="Shopping cart">

</template>

<script setup>
import { storeToRefs } from 'pinia';
import { indexStore } from "../store/index.js";
import { ref } from "vue";
import router from '../router';

function Return3() {
    router.push("/");
}

function Shoppingcart() {
    router.push("/Shoppingcart");
}

</script>

<style>

</style>