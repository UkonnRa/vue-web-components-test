<script setup lang="ts">
export type Props = {
  readonly color?: string;
  readonly label?: string;
};

defineProps<Props>();
</script>

<template>
  <button>
    <slot>{{ label }}</slot>
  </button>
</template>
