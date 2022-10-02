<script setup>
defineProps({
  text: String,
  onClick: Function,
});
</script>

<template>
  <button @click="onClick">{{ text }}</button>
</template>
