<template>

    <aside :class="`${is_expanded ? 'is-expanded' : ''}`">

        <div class="logo">
            <img src="../assets/icons8-vue-js-240.png" alt="Vue">
        </div>

        <div class="menu-toggle-btn" @click="toggleMenu">
            <button class="menu-toggle"><span class="material-symbols-outlined">double_arrow</span>
            </button>
        </div>

        <div class="menus">

            <RouterLink to="/" class="menu-item">
                <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960"
                        width="32px" fill="#5f6368">
                        <path
                            d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                    </svg></span>
                <span class="label">Home</span>
            </RouterLink>

        </div>

    </aside>

</template>

<script setup>
import { ref } from 'vue';

let is_expanded = ref(false);
const toggleMenu = () => {
    is_expanded.value = !is_expanded.value;
}

</script>


<style scoped>
aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    background-color: var(--vt-c-black);
    color: var(--vt-c-white);
    transition: 0.3s ease-out;
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;

}

.is-expanded {
    width: var(--sidebar-width);
}

.is-expanded .menu-toggle-btn .menu-toggle {
    transform: rotate(-180deg);
    transition: transform 0.3s ease;
    top: -3rem;
}

.is-expanded .menu-toggle-btn {
    top: -2rem;
}

.logo img {
    width: 2rem;
}

.menu-toggle-btn {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: 0.2s ease-out;
}

.menu-toggle {
    color: var(--vt-c-white);
    transition: 0.2s ease-out;

}

.menu-toggle:hover {
    transform: translateX(0.4rem);
    color: var(--primary);
}

@media (max-width:768px) {
    aside {
        position: fixed;
        z-index: 999;
    }
}


.menu-title {
    opacity: 0.7;
    font-weight: normal;
    text-transform: uppercase;
}

.menu-item {
    display: flex;
    align-items: center;
    justify-content: start;
    color: var(--vt-c-white);
    gap: 1rem;
    padding: 0.5rem 0;
}

.menu-item .icon {
    font-size: 2rem;
}

.menu-item:hover {
    background-color: var(--primary-hover);
}
</style>
