<template>
  <div>
    <div>3</div>
    <div>
      <input type="text">
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'Test3'
})
onMounted(() => {
  console.log('mounted test3')
})
</script>

<style scoped></style>
