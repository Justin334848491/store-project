<template>
    <h1>The Movie Store</h1>
        <input type="text">
    </template>
        <!-- <p class="storyLine"> the </p>
        <select id="classOptions" ref="classInput">
            <option>Brute</option>
            <option>Diseased</option>
            <option>Thief</option>
            <option>Fraud</option>
            <option>Forgotten One</option>
        </select>
        <p class="storyLine"> has joined the hunt ...</p>
        <br>
        <br>
        <input type="button" value="Submit your Ticket" @click="setUser()">
    </div>
</template> -->

<!-- <script setup>
import { storeToRefs } from 'pinia';
import { indexStore } from "../store/index.js";
import { ref } from 'vue';
import router from '../router';

const nameInput = ref("");
const classInput = ref("");

const index = indexStore();

const { username } = storeToRefs(index)

function setUser() {
    if (nameInput.value.value == null || nameInput.value.value == "") {

    }
    else {
        index.setUser(nameInput.value.value, classInput.value.value);
        router.push("./playerStats");
    } -->
<!-- } -->

<!-- </script> -->

<style>

h1 {
    text-align: center;
}
</style>