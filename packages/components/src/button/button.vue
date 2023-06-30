<template>
  <button class="cc-button"
          :class="buttonStyle">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'cc-button'
}
</script>

<script lang="ts" setup>
import "./style/index.scss"
import { computed } from "vue"
type ButtonProps = {
  type?: string
}
const buttonProps = defineProps<ButtonProps>()

const buttonStyle = computed(() => {
  return { [`cc-button--${buttonProps.type}`]: buttonProps.type }
})
</script>