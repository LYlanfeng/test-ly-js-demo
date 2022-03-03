<template>
  <div>test scroll</div>
  <div class="border">
    <ly-scroll scroll-y height="160px">
      <ul class="scrollbar-content">
        <li v-for="i of 40" :key="i" class="scrollbar-content-item">
          {{ `I am item ${i} ` }}
        </li>
      </ul>
    </ly-scroll>
  </div>
  <div class="border" style="width: 50%">
    <ly-scroll scroll-x>
      <div class="scroll-content">
        <div v-for="index in 45" :key="index" class="scroll-item">
          {{ index }}
        </div>
      </div>
    </ly-scroll>
  </div>

  <div class="border" style="height: 300px">
    <ly-scroll
      ref="pullDownRef"
      v-model:pullDownLoading="pullDownLoading"
      height="100%"
      :pull-down-disabled="pullDownDisabled"
      scroll-y
      pull-down-refresh
      @pulling-down="pullingDownHandler"
    >
      <ul class="pulldown-list">
        <li
          v-for="i of dataList"
          :id="`pull-down-${i}`"
          :key="i"
          class="pulldown-list-item"
        >
          {{ `I am item ${i} ` }}
        </li>
      </ul>
    </ly-scroll>
  </div>
  <div>
    <span>pullDownLoading: {{ pullDownLoading }}</span>
    <ly-e-button @click="handleOpenPullDown">打开下拉刷新</ly-e-button>
    <ly-e-button @click="handleClosePullDown">关闭下拉刷新</ly-e-button>
    <ly-e-button @click="handleDoPullDown">触发下拉</ly-e-button>
    <ly-e-button @click="handleOpenPullDown2">打开下拉刷新2</ly-e-button>
    <ly-e-button @click="handleClosePullDown2">关闭下拉刷新2</ly-e-button>
    <ly-e-button @click="handleScrollTo">滚动</ly-e-button>
  </div>

  <div class="border" style="height: 300px">
    <ly-scroll
      ref="pullUpRef"
      v-model:pullUpLoading="pullUpLoading"
      height="100%"
      :pull-up-disabled="pullUpDisabled"
      scroll-y
      pull-up-load
      pull-up-finished-text="没有更多数据"
      @pulling-up="pullingUpHandler"
    >
      <ul class="pulldown-list">
        <li v-for="i of dataList2" :key="i" class="pulldown-list-item">
          {{ i % 5 === 0 ? 'scroll up 👆🏻' : `I am item ${i} ` }}
        </li>
      </ul>
    </ly-scroll>
  </div>
  <div>
    <span>pullUpLoading: {{ pullUpLoading }}</span>
    <ly-e-button @click="handleOpenPullUp2">打开上拉加载2</ly-e-button>
    <ly-e-button @click="handleClosePullUp2">关闭上拉加载2</ly-e-button>
  </div>

  <div class="border" style="height: 300px">
    <ly-scroll
      ref="pullDownUpRef"
      v-model:pullDownLoading="pullDownLoading2"
      v-model:pullUpLoading="pullUpLoading2"
      height="100%"
      scroll-y
      pull-down-refresh
      :pull-down-disabled="pullDownDisabled2"
      pull-up-load
      :pull-up-disabled="pullUpDisabled2"
      @pulling-down="pullingDownHandler2"
      @pulling-up="pullingUpHandler2"
    >
      <ul class="pulldown-list">
        <li
          v-for="i of pdList"
          :key="i"
          class="pulldown-list-item"
          @click="handleScrollClick(i)"
        >
          {{ i % 5 === 0 ? 'scroll up 👆🏻' : `I am item ${i} ` }}
        </li>
      </ul>
    </ly-scroll>
  </div>
  <div>
    <span>pullDownLoading2: {{ pullDownLoading2 }}</span>
    <br />
    <span>pullUpLoading2: {{ pullUpLoading2 }}</span>
  </div>

  <div class="border" style="height: 400px">
    <ly-scroll class="outer-wrapper" scroll-y nested-scroll>
      <ul>
        <li
          v-for="(item, index) in outerOpenData"
          :key="index"
          class="outer-list-item"
          @click="handleScrollClick(index, 'outerOpen')"
        >
          {{ item }}
        </li>
      </ul>
      <ly-scroll class="middle-wrapper" scroll-y>
        <ul>
          <li
            v-for="(item, index) in middleOpenData"
            :key="index"
            class="middle-list-item"
            @click="handleScrollClick(index, 'middleOpen')"
          >
            {{ item }}
          </li>
        </ul>
        <ly-scroll class="inner-wrapper" scroll-y>
          <ul class="inner-content">
            <li
              v-for="(item, index) in innerData"
              :key="index"
              class="inner-list-item"
              @click="handleScrollClick(index, 'inner')"
            >
              {{ item }}
            </li>
          </ul>
        </ly-scroll>
        <ul>
          <li
            v-for="(item, index) in middleCloseData"
            :key="index + 100"
            class="middle-list-item"
            @click="handleScrollClick(index, 'middleClose')"
          >
            {{ item }}
          </li>
        </ul>
      </ly-scroll>
      <ul>
        <li
          v-for="(item, index) in outerCloseData"
          :key="index + 100"
          class="outer-list-item"
          @click="handleScrollClick(index, 'outerClose')"
        >
          {{ item }}
        </li>
      </ul>
    </ly-scroll>
  </div>
</template>

<script lang="ts" setup>
// import LyScroll from '../../components/scroll/src/index.vue'
// import { ScrollInstance } from '@/components/scroll/src/types'
// import { Scroll as LyScroll } from '@ly-js/scroll'
// import '@ly-js/scroll/es/components/scroll/style/index'
import type { ScrollInstance } from '@ly-js/scroll'

function generateData() {
  const BASE = 30
  const begin = BASE * STEP
  const end = BASE * (STEP + 1)
  let ret = []
  for (let i = end; i > begin; i--) {
    ret.push(i)
  }
  return ret
}
// pulldownRefresh state
// const PHASE = {
//   default: 'fetching',
//   moving: {
//     enter: 'enter',
//     leave: 'leave'
//   },
//   fetching: 'fetching',
//   succeed: 'succeed'
// }
const REQUEST_TIME = 2000
let STEP = 0

const dataList = ref(generateData())
// const tipText = ref('')
// const bsWrapper = ref<HTMLElement | null>(null)

let pullDownLoading = $ref(false)
let pullDownDisabled = $ref(false)

function mockFetchData(): Promise<number[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      const dataList = generateData()
      resolve(dataList)
    }, REQUEST_TIME)
  })
}
async function getData() {
  const newData = await mockFetchData()
  dataList.value = newData.concat(dataList.value)
}
async function pullingDownHandler(finishPullDown: Function) {
  // setTipText(PHASE.fetching)
  STEP += 1
  await getData()

  // setTipText(PHASE.succeed)
  // tell BetterScroll to finish pull down
  finishPullDown()
}

// type LyScrollInstance = InstanceType<typeof LyScroll>
const pullDownRef = ref<ScrollInstance | null>(null)
const handleOpenPullDown = () => {
  pullDownRef.value?.openPullDown()
}
const handleOpenPullDown2 = () => {
  pullDownDisabled = false
}
const handleClosePullDown = () => {
  pullDownRef.value?.closePullDown()
}
const handleClosePullDown2 = () => {
  pullDownDisabled = true
}
const handleScrollTo = () => {
  // pullDownRef.value?.scrollTo(0, -100)
  pullDownRef.value?.scrollToElement('#pull-down-15')
}
const handleDoPullDown = () => {
  console.log(pullDownRef.value?.scroll)
  pullDownRef.value?.autoPullDownRefresh()
}

let dataList2 = $ref(2)
const pullingUpHandler = async (finshPullUp: Function) => {
  await requestData2()
  finshPullUp()
}
async function requestData2() {
  try {
    const newData = await ajaxGet2(/* url */)
    dataList2 += newData
  } catch (err) {
    // handle err
    console.log(err)
  }
}
function ajaxGet2(): Promise<number> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(20)
    }, 4000)
  })
}
let pullUpLoading = $ref(false)
let pullUpDisabled = $ref(false)

const handleOpenPullUp2 = () => {
  pullUpDisabled = false
}
const handleClosePullUp2 = () => {
  pullUpDisabled = true
}

let pdList = $ref(10)
let pullDownLoading2 = $ref(false)
let pullDownDisabled2 = $ref(false)

let pullUpLoading2 = $ref(false)
let pullUpDisabled2 = $ref(false)

const pullingDownHandler2 = async (finsh: Function) => {
  await timeout()
  pdList = 10
  finsh()
}
const pullingUpHandler2 = async (finsh: Function) => {
  await timeout()
  pdList += 10
  finsh()
}

function timeout(time = 8000) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

const handleScrollClick = (i: number, flag?: string) => {
  console.log('click scroll ', i, flag)
}

const outerOpenData = [
  '----Outer Start----',
  '👆🏻 outer scroll 👇🏻 ',
  '🙂 🤔 😄 🤨 😐 🙃 ',
  '👆🏻 outer scroll 👇🏻 '
]

const outerCloseData = [
  '👆🏻 outer scroll 👇🏻 ',
  '🙂 🤔 😄 🤨 😐 🙃 ',
  '👆🏻 outer scroll 👇🏻 ',
  '😔 😕 🙃 🤑 😲 😲 ',
  '🙂 🤔 😄 🤨  😐 🙃 ',
  '👆🏻 outer scroll 👇🏻 ',
  '----Outer End----'
]

const middleOpenData = [
  '----Middle Start----',
  '👆🏻 middle scroll 👇🏻 ',
  '🐣 🐣 🐣 🐣 🐣 🐣 '
]

const middleCloseData = [
  '👆🏻 middle scroll 👇🏻 ',
  '🤓 🤓 🤓 🤓 🤓 🤓 ',
  '👆🏻 middle scroll 👇🏻 ',
  '🦔 🦔 🦔 🦔 🦔 🦔 ',
  '👆🏻 middle scroll 👇🏻 ',
  '🙈 🙈 🙈 🙈 🙈 🙈 ',
  '👆🏻 middle scroll 👇🏻 ',
  '🚖 🚖 🚖 🚖 🚖 🚖 ',
  '👆🏻 middle scroll 👇🏻 ',
  '✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ',
  '----Middle End----'
]

const innerData = [
  '------Inner Start-----',
  '😀 😁 😂 🤣 😃 🙃 ',
  '👆🏻 inner scroll 👇🏻 ',
  '🙂 🤔 😄 🤨 😐 🙃 ',
  '👆🏻 inner scroll 👇🏻 ',
  '😔 😕 🙃 🤑 😲 😐 🙃 ',
  '👆🏻 inner scroll 👇🏻 ',
  '🐣 🐣 🐣 🐣 🐣 🐣 ',
  '👆🏻 inner scroll 👇🏻 ',
  '🐥 🐥 🐥 🐥 🐥 🐥 ',
  '👆🏻 inner scroll 👇🏻 ',
  '🤓 🤓 🤓 🤓 🤓 🤓 ',
  '👆🏻 inner scroll 👇🏻 ',
  '🦔 🦔 🦔 🦔 🦔 🦔 ',
  '👆🏻 inner scroll 👇🏻 ',
  '🙈 🙈 🙈 🙈 🙈 🙈 ',
  '👆🏻 inner scroll 👇🏻 ',
  '🚖 🚖 🚖 🚖 🚖 🚖 ',
  '👆🏻 inner scroll 👇🏻 ',
  '✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ',
  '-----Inner End-----'
]
</script>

<style lang="scss" scoped>
.border {
  border: 1px solid #3a8ee6;
  margin: 16px 0;
}
.scrollbar-content {
  margin: 0;
  .scrollbar-content-item {
    padding: 10px 0;
    list-style: none;
    border-bottom: 1px solid #ccc;
    text-align: left;
  }
}
.scroll-content {
}
.scroll-item {
  opacity: 0.6;
  color: white;
  box-sizing: border-box;
  height: 50px;
  width: 50px;
  line-height: 50px;
  border-radius: 50%;
  font-size: 18px;
  display: inline-block;
  text-align: center;
  padding: 0 10px;
  margin: 0 10px;
  &:nth-child(4n) {
    background-color: #06f;
  }
  &:nth-child(4n + 1) {
    background-color: #0f9d00;
  }
  &:nth-child(4n + 2) {
    background-color: #f00;
  }
  &:nth-child(4n + 3) {
    background-color: #ffea00;
  }
}

.pulldown-list {
  padding: 0;
  margin: 0;
  .pulldown-list-item {
    padding: 10px 0;
    list-style: none;
    border-bottom: 1px solid #ccc;
  }
}

.my-test {
  position: absolute;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  transform: translateY(-100%) translateZ(0);
  text-align: center;
  color: #999;
}
</style>

<style lang="stylus" rel="stylesheet/stylus">
.container
  height: 100%
.outer-wrapper
.middle-wrapper
.inner-wrapper
  border: 2px solid #62B791
  border-radius: 5px
  transform: rotate(0deg)
  position: relative
  overflow: hidden
.outer-wrapper
  height: 100%
  border: 1px solid rgba(0, 0, 0, .1)
.middle-wrapper
  height: 480px !important
  background-color rgba(240,65,85, 0.2)
  border: 2px solid #f04155
.inner-wrapper
  height: 240px !important
  background-color rgb(98,183,145)
.middle-list-item
.inner-list-item
  height: 50px
  line-height: 50px
  text-align: center
  list-style: none
  color: white

.middle-list-item
  color: #894e06

.outer-list-item
  height: 40px
  line-height: 40px
  text-align: center
  list-style: none
</style>
