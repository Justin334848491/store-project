<template>
    <h1> Galaxy Movie Database </h1>
<input type="button" id="Return" @click="Return3()" value="HomePage">

<input type="button" id="Signin" @click="Shoppingcart()" value="Shopping cart">

<br> <br>

<div class="objects">
<img id="picture" @click="testFunction(option)" :id="option.id" v-for="option in Options" src="https://image.tmdb.org/t/p/w500/2l9LbxBSkJseoxYcIJjclnmxyq.jpg">

</div>


</template>

<script setup>
import { storeToRefs } from 'pinia';
import { indexStore } from "../store/index.js";
import { ref } from "vue";
import router from '../router';
import axios from "axios";

const index = indexStore()
let idOptions = ref([])

let Options = ref([])

function Return3() {
    router.push("/");
}

function Shoppingcart() {
    router.push("./Shoppingcart");
}

let movies = axios.get(`https://api.themoviedb.org/3/trending/all/day?`, {
    params: {
        api_key: "e06cb446302dcf3a3cb1358720141aad",
        append_to_response: "videos",
    },
})

.then((movies) => {
    for(let i = 0; i < movies.data.results.length; i++) {
        Options.value.push({
            text: movies.data.results[i].original_title,
            id: movies.data.results[i].id,
            posterimage: movies.data.results[i].poster_path
        });
    }
    
})

function testFunction(message) {
    console.log(message);

}

</script>

<style>

.objects{
    display: grid;
    align-self: center;
    grid-template-columns: 15vw 15vw 15vw 15vw 15vw;
    grid-template-rows: 12vw 12vw 12vw 12vw;
    column-gap: 5vw;
    row-gap: 10vw;
    width: 10vw;
    height: 15vw;
    position: relative;
    left: 2vw;
}

#picture {
    width: 15vw;
    height: 20vw;
}

</style>