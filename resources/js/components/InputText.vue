<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    id: String,
    type: {
        type: String,
        default: 'text'
    },
    modelValue: String, // For v-model binding
    'aria-describedby': String
});

// Define emits to allow v-model to work properly
const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <input :type="type" :id="id" class="form-control" :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)" :aria-describedby="ariaDescribedby">
</template>
