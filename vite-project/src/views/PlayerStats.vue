<template>
    <h1> Login Page </h1>
    <input type="button" id="Return" @click="Return()" value="Back">

    <input type="button" id="Signin" @click="Login()" value="login">
    <br> <br> <br>
    <div id="Username"> Username:<input type="text"></div>
    <br>
    <div id="password"> Password: <input type="text"></div>
    
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { indexStore } from "../store/index.js";
import { ref } from "vue";
import router from '../router';

let x = 3

function Return() {
    router.push("/");
}

function Login() {
    if (x === "tmdb") {
        console.log(5)
    } else {
        router.push("/Popup");
    }
}

</script>

<style>
    #Return {
    position: relative;
    width: 125px;
    height: 25px;
    }
    #Signin {
    position: sticky;
    left: 50.25vw;
    width: 125px;
    height: 25px;
    }

    div {
        text-align: center;
    }

    body {
        color: white;
        background-image: url("https://parlonssciences.ca/sites/default/files/2019-09/Milky%20Way%20galaxy%20as%20seen%20from%20Australia.jpg");
        background-size: 1920px;
    }

</style>