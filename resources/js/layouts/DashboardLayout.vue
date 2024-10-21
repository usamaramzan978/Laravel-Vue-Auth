<script setup>
import Sidebar from '../components/Sidebar.vue';
</script>
<template>
    <div class="dashboard-layout">

        <Sidebar />

        <main>
            <router-view />
        </main>
    </div>
</template>

<style scoped>
.dashboard-layout {
    display: flex;
    font-weight: normal;
}

.dashboard-layout main {
    flex: 1 1 0;
    padding: 1rem;
}
</style>
