<script setup>
  defineProps(['href']);
</script>

<template>
  <a v-bind:href="href" target="_blank"></a>
</template>
