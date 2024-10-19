<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    value: String,
    for: String,
});
</script>

<template>
    <label :for="for" class="form-label">
        <span v-if="value">{{ value }}</span>
    </label>
</template>
