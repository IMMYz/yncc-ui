<template>
  <div class="cc-input">
    <input class="cc-input__inner"
           :value="InputProps.modelValue"
           @input="changeInputVal" />
  </div>
</template>

<script lang="ts">
//组件命名
export default {
  name: "cc-input"
}
</script>
<script lang="ts" setup>
//组件接收的值的类型
type InputProps = {
  modelValue?: string | number
}

//组件发送事件类型
type InputEmits = {
  (e: "update:modelValue", value: string): void;
}

//withDefaults 可以为props添加默认值等
const InputProps = withDefaults(defineProps<InputProps>(), {
  modelValue: ""
})
const inputEmits = defineEmits<InputEmits>()

const changeInputVal = (event: Event) => {
  inputEmits("update:modelValue", (event.target as HTMLInputElement).value);
}
</script>