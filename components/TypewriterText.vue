<!-- components/TypewriterText.vue -->
<template>
  <span class="typewriter-text">
    <span v-for="(word, index) in wordList" :key="index" class="word">
      <span
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: index * staggerDelay,
            ease: 'easeOut',
          },
        }"
      >
        {{ word }}
      </span>
      {{ " " }}
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  staggerDelay: {
    type: Number,
    default: 80, // Default delay of 80ms
  },
});

const wordList = computed(() => {
  return props.text.trim().split(/\s+/);
});
</script>

<style scoped>
.typewriter-text {
  font-family: "Fira Code", "Courier New", monospace;
}
</style>
