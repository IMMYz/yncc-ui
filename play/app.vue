<template>
  <!-- <div>启动测试</div> -->
  <cc-button type="primary">测试</cc-button>
  <cc-icon></cc-icon>
  <cc-input v-model="testValue"></cc-input>
  {{ testValue }}
</template>

<script setup lang="ts">
// import { Button } from "@yncc/components"
import{ref} from "vue"
const testValue = ref('')
</script>