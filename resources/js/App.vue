<template>
    <div>
        <div class="container">

            <Navbar />
            <main>
                <router-view />
            </main>
        </div>
    </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>

<style lang="css" scoped></style>
