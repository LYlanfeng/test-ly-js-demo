<template>
  <el-config-provider :size="size">
    <ly-e-layout
      title="ly-vue-admin"
      logo="/logo.png"
      :mode="layoutOptions.mode"
      :tabs="layoutOptions.tabs"
      :breadcrumb="layoutOptions.breadcrumb"
      :fixed-aside="layoutOptions.fixedAside"
      :fixed-header="layoutOptions.fixedHeader"
      :fixed-tabs="layoutOptions.fixedTabs"
      :fixed-breadcrumb="layoutOptions.fixedBreadcrumb"
      :menus="menus"
      transition-name="slide-fadein-right"
      search
      :refresh="handleRefresh"
      screenfull
      :size="size"
      :size-change="onSizeChange"
      @logout="onLogout"
    >
<!--      <template #user="{userInfo}">-->
<!--        user: {{userInfo}}-->
<!--      </template>-->
    </ly-e-layout>
  </el-config-provider>
</template>

<script lang="ts" setup>
import LyELayout from '../components/layout/src/index.vue'
import '@ly-js/element/es/components/layout/style/index'
// import '../components/layout/style.scss'
// import 'element-plus/es/components/menu/style/index'
// import 'element-plus/es/components/tabs/style/index'
// import 'element-plus/es/components/tab-pane/style/index'
// import 'element-plus/es/components/breadcrumb/style/index'
// import 'element-plus/es/components/breadcrumb-item/style/index'
// import 'element-plus/es/components/dropdown/style/index'
// import 'element-plus/es/components/dropdown-item/style/index'
// import 'element-plus/es/components/dropdown-menu/style/index'
// import 'element-plus/es/components/space/style/index'
// import 'element-plus/es/components/icon/style/index'
import { menus } from '../components/data'

defineOptions({
  name: 'BaseLayout'
})

const layoutOptions = reactive({
  mode: '3',
  tabs: true,
  breadcrumb: true,
  fixedAside: true,
  fixedHeader: true,
  fixedTabs: true,
  fixedBreadcrumb: true
})

const timeout = (time = 3000) => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

const handleRefresh = async () => {
  console.log('刷洗')
  await timeout()
}

let size = $ref('default')
const onSizeChange = (s: string) => {
  console.log('size', s)
  size = s
}

const onLogout = () => {
  console.log('logout')
}
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
