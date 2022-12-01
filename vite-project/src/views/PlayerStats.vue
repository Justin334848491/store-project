<template>
    <h1>Player Stats</h1>
    <p>Hunter: {{ playerName }} -- Class: {{ sessionClassName }}</p>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { indexStore } from "../store/index.js";
import { ref } from "vue";

const index = indexStore();

const { username, className } = storeToRefs(index)

let playerName = ref(username);
let sessionClassName = ref(className);

</script>

<style>

</style>