<template>
    <h1> Galaxy Movie Database </h1>
<input type="button" id="Return" @click="Return3()" value="HomePage">

<input type="button" id="Signin" @click="Shoppingcart()" value="Shopping cart">

<br> <br>

<div class="objects">

<img id="picture" @click="testFunction(option)" :id="option.id" v-for="option in Options" :src="option.posterimage">
<h1 v-for="option in Options"> {{ option.text }} </h1>

<div id="myModal" class="modal">
    <div id="modalContent">
    <h1 id="modalTitle"> {{ Options.text }} </h1>
    <button id="closeButton" @click="close()"> Close </button>
    <button id="addToCart" @click="addItems()"> Add To Cart</button>
    </div>

</div>
</div>

</template>

<script setup>
import { storeToRefs } from 'pinia';
import { indexStore } from "../store/index.js";
import { ref, vModelRadio } from "vue";
import router from '../router';
import axios from "axios";
import { advancePositionWithMutation } from '@vue/compiler-core';

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
            posterimage: "https://image.tmdb.org/t/p/w500" + movies.data.results[i].poster_path
        });
    }
})

function testFunction(hi) {
    myModal.style.display = "block"
console.log(hi)

}

function close() {
    myModal.style.display ="none"
}

window.onclick = function(event) {
  if (event.target == myModal) {
    myModal.style.display = "none";
  }
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

.modal {
  display: none; 
  position: fixed; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%;
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

#modalContent{
  opacity: 100%;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 50vw; /* Could be more or less, depending on screen size */
  height: 20vw;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

#modalTitle{
    color: white;
}


</style>