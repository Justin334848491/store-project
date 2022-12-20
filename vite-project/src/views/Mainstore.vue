<template>
    <h1> Galaxy Movie Database </h1>
    <input type="button" id="Return" @click="Return3()" value="HomePage">

    <input type="button" id="Signin" @click="Shoppingcart()" value="Shopping Cart">

    <br> <br>

    <div class="objects">

        <img id="picture" @click="testFunction(option.text.id)" :id="option.text.id" v-for="option in Options" :src="option.text.posterimage">


        <div id="myModal" class="modal">
            <div id="modalContent">
                <h1 id="modalTitle"> {{ title }} </h1>
                <button id="shoppingcartButton" @click="Shoppingcart()"> Shopping Cart </button>
                <button id="addToCart" @click="addItems()"> Add To Cart</button>
                <div id="summary"> {{ overview }} </div>
                <br>
                <img :src="poster" id="ModalImage" />
                <p> Release Date: {{ releasedate }} </p>
                <p> Runtime: {{ runtime }}</p>
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

const index = indexStore()
const { movies } = storeToRefs(index)
const { isMovie } = storeToRefs(index)

let checkMovieFlag = ref(isMovie.value);
let movieID = ref();
let title = ref("")
let releasedate = ref("")
let poster = ref("")
let runtime = ref("")
let overview = ref("")

index.finishedMovie()

function Return3() {
    router.push("/");
}

function Shoppingcart() {
    router.push("./Shoppingcart");
}

function addItems() {
    index.addItems({
        title: title.value,
        poster: poster.value
    });
}

let searchMovies = axios.get(`https://api.themoviedb.org/3/discover/movie?`, {
    params: {
        api_key: "e06cb446302dcf3a3cb1358720141aad",
        append_to_response: "videos",
    },
})

    .then((searchMovies) => {
        if (checkMovieFlag.value === true)
            return;

        for (let i = 0; i < searchMovies.data.results.length; i++) {
            index.displayMovies({
                text: searchMovies.data.results[i].original_title,
                id: searchMovies.data.results[i].id,
                posterimage: "https://image.tmdb.org/t/p/w500" + searchMovies.data.results[i].poster_path
            });
        }
    })

let Options = movies.value

function testFunction(id) {
    myModal.style.display = "block"

    let movies = axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
            api_key: "e06cb446302dcf3a3cb1358720141aad",
            append_to_response: "videos",
        },
    })

        .then((movies) => {

            title.value = movies.data.original_title
            overview.value = movies.data.overview
            poster.value = "https://image.tmdb.org/t/p/w500" + movies.data.poster_path
            releasedate.value = movies.data.release_date
            runtime.value = movies.data.runtime

            movieID.value = id;

        });
}

function close() {
    myModal.style.display = "none"
}

window.onclick = function (event) {
    if (event.target == myModal) {
        myModal.style.display = "none";
    }
}

</script>



<style>
.objects {
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

    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
    /* Black w/ opacity */
}

#modalContent {
    opacity: 100%;
    position: absolute;
    left: 8.75vw;
    top: 6.5vw;
    padding: 20px;
    border: 1px solid #888;
    width: 80vw;
    /* Could be more or less, depending on screen size */
    height: 40vw;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

#modalTitle {
    color: white;
}

#ModalImage {
    width: 18vw;
    height: 28vw;
    position: absolute;
    float: left;
    left: 1vw;

}

#modalTitle {
    font-size: 2vw;
}

p {
    left: 20vw;
    font-size: 1vw;
}



#summary {
    font-size: 1.25vw;
}
</style>