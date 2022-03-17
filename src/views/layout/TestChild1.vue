<template>
  <div>
    <div>test-child-1</div>
    <input type="text" />
  </div>
</template>

<script lang="ts" setup>
import { useLayout } from '../../components/layout'

defineOptions({
  name: 'TestChild1'
})

const { updateTabTitle } = useLayout()

updateTabTitle('我是测试的标题')
</script>

<style scoped></style>
