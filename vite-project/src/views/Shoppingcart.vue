<template>
    <h1> Shoppingcart</h1>
<input type="button" id="Return2" value="Store" @click="Return4()">
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { indexStore } from "../store/index.js";
import { ref } from "vue";
import router from '../router';

    function Return4() {
        router.push("/Mainstore");
    }
</script>

<style>

</style>