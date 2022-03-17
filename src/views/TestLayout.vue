<template>
  <ly-layout
    :mode="layoutOptions.mode"
    :fixed-header="layoutOptions.fixedHeader"
    :fixed-aside="layoutOptions.fixedAside"
    :menus="menus"
  >
    <div style="background: #ffffff; padding: 24px">
      <span>mode</span>
      <el-radio-group v-model="layoutOptions.mode">
        <el-radio label="1">Option 1</el-radio>
        <el-radio label="2">Option 2</el-radio>
        <el-radio label="3">Option 3</el-radio>
      </el-radio-group>
      <span>fixedAside</span>
      <el-switch
        v-model="layoutOptions.fixedAside"
        active-color="#13ce66"
        inactive-color="#ff4949"
        :active-value="true"
        :inactive-value="false"
      />
      <span>fixedHeader</span>
      <el-switch
        v-model="layoutOptions.fixedHeader"
        active-color="#13ce66"
        inactive-color="#ff4949"
        :active-value="true"
        :inactive-value="false"
      />
    </div>
    <div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
      >
        <el-menu-item index="1">Processing Center</el-menu-item>
        <el-sub-menu index="2">
          <template #title>Workspace</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
          <el-sub-menu index="2-4">
            <template #title>item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="3" disabled>Info</el-menu-item>
        <el-menu-item index="4">Info 4</el-menu-item>
        <el-menu-item index="5">Info 5</el-menu-item>
        <el-menu-item index="6">Info 6</el-menu-item>
        <el-menu-item index="7">Info 7</el-menu-item>
        <el-menu-item index="8">Info 8</el-menu-item>
        <el-menu-item index="9">Info 9</el-menu-item>
        <el-menu-item index="11">Info 11</el-menu-item>
        <el-menu-item index="12">Info 12</el-menu-item>
        <el-menu-item index="10">
          <el-sub-menu index="10-1">
            <template #title>Info 10</template>
            <el-menu-item index="10-1-1">item one</el-menu-item>
            <el-menu-item index="10-1-2">item two</el-menu-item>
            <el-menu-item index="10-1-3">item three</el-menu-item>
          </el-sub-menu>
        </el-menu-item>
      </el-menu>
    </div>
    <div>
      <p v-for="i in 30">我是：{{ i }}</p>
    </div>
  </ly-layout>
</template>

<script lang="ts" setup>
import LyLayout from '../components/layout/src/index.vue'
import { menus } from '../components/data'

defineOptions({
  name: 'TestLayout'
})

const layoutOptions = reactive({
  mode: '3',
  fixedAside: true,
  fixedHeader: true
})
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background: #fff;
}
</style>
<style lang="scss" scoped>
p {
  margin: 0;
  padding: 24px;
  background: #ffffff;
}
</style>
