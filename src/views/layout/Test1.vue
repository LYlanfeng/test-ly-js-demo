<template>
  <div class="test-page">
    <div class="top">top</div>
    <div class="content">
      <div class="m">
        <input type="text" />
        <button @click="$go('/test-1/0')">go detail</button>
        <div>
          <el-row>
            <el-button size="large">Large</el-button>
            <el-button size="default">Default</el-button>
            <el-button size="small">Small</el-button>
          </el-row>
          <el-row>
            <el-button>normal</el-button>
          </el-row>
        </div>
        <p class="">1</p>
        <p class="">1</p>
        <p class="">1</p>
        <p class="">1</p>
        <p class="">1</p>
        <p class="">1</p>
        <p class="">1</p>
      </div>
    </div>
    <div class="bottom">bottom</div>
  </div>
</template>

<script lang="ts" setup>
import { provideGlobalConfig } from 'element-plus'

defineOptions({
  name: 'Test1'
})

const c = provideGlobalConfig({})
console.log('terst1 context', c.value)
</script>

<style lang="scss" scoped>
.test-page {
//  position: absolute;
//  top: 0;
//  right: 0;
//  bottom: 0;
//  left: 0;
//  height: 100%;
//  display: flex;
//  flex-direction: column;
//  overflow: hidden;
//  .content {
//    position: relative;
//    flex: 1;
//    //overflow: hidden;
//    //.m {
//    //  position: absolute;
//    //  top: 0;
//    //  left: 0;
//    //  right: 0;
//    //  bottom: 0;
//    //  width: 100%;
//    //  height: 100%;
//    //  overflow: auto;
//    //}
//  }
  p {
    padding: 100px;
    border: 1px solid chartreuse;
  }
}
</style>
