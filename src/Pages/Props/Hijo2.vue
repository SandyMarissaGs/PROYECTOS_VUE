<script setup>
import {ref} from 'vue'

defineProps({
    edad: String
});

</script>

<template>
        <p class="text-center">Tengo la edad de: {{ edad }}</p>
</template>
