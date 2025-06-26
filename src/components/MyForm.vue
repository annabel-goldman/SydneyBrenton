<template>
    <div>
        <p>{{ name }}</p>
        <h1>My Form</h1>
        <form>
            <input type="text" placeholder="Enter your name" v-model="name" />
        </form>
        <button @click="handleSubmit">Submit</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const handleSubmit = () => {
    console.log(name.value);
}
</script>

<style>
    .form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>