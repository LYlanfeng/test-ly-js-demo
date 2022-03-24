<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
  <ly-v-fixed-container direction="top">
    <div style="width: 100%; background-color: blueviolet">top</div>
  </ly-v-fixed-container>
  <ly-v-page>
    <div>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="success">成功按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
  </ly-v-page>
  <div>
    <ly-v-fixed-container
      direction="bottom"
      direction-full
      wrap-class="test-class"
      :offset="10"
    >
      <div style="width: 100%;background: #3a8ee6">bottom</div>
    </ly-v-fixed-container>
  </div>
  <div> {{ $store }} </div>
  <div> {{ $test }} </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  }
})
</script>
