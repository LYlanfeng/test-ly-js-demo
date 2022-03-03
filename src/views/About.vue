<script lang="ts" setup>
import { ref, getCurrentInstance, reactive, watch } from 'vue'
// import { LyTable } from 'element-plus'
import { eventHub } from '@ly-js/ui'
import { usePagination, useSWR } from '@ly-js/element'
import type { FormInstance } from '@ly-js/element'

const formRef = ref<FormInstance>()

const count = ref(0)
const add = () => {
  count.value++
}
const handleClickOutside = () => {
  console.log('click add outside')
  formRef.value?.validate(() => {})
  eventHuber.emit('foo', '123')
}
const proxy = getCurrentInstance()!.proxy!
const eventHuber = eventHub<{ foo: string }>()
eventHuber.on('foo', e => {
  console.log('监听 foo', e)
})
eventHuber.once('foo', e => {
  console.log('只会响应一次的监听 foo', e)
})
const formInline = reactive({
  user: '',
  region: ''
})
const onSubmit = () => {
  console.log('submit!')
}
const form = ref({
  name: '',
  number: '',
  int: '',
  phone: '',
  money: '',
  sex: '',
  images: []
})
const handleQuery = () => {
  console.log('query')
}
const handleSubmit = () => {
  console.log('submit')
}

let currentPage = 1
const pageSize = 10
const total = 1000
const { pagination, render: renderPagination } = usePagination({ total: 1000 })
const { mutate, data } = useSWR(
  async () => {
    return {
      page: ++currentPage,
      size: 10,
      t: 1000
    }
  },
  {
    page: pagination
  }
)
watch(pagination, () => {
  console.log('pagination', pagination)
})
const onCurrentChange = () => {
  mutate()
}

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  }
]

let dialogVisible = $ref(false)
</script>

<template>
  <div class="about">
    <div>
      <ly-e-table :data="tableData" style="width: 100%">
        <ly-e-table-column prop="date" label="Date" width="180" />
        <ly-e-table-column prop="name" label="Name" width="180" />
      </ly-e-table>
    </div>
    <div style="margin-top: 8px">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="Date" width="150" />
        <el-table-column label="Delivery Info">
          <el-table-column prop="name" label="Name" width="120" />
          <el-table-column label="Address Info">
            <el-table-column prop="state" label="State" width="120" />
            <el-table-column prop="city" label="City" width="120" />
            <el-table-column prop="address" label="Address" />
            <el-table-column prop="zip" label="Zip" width="120" />
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>
    <div style="height: 200px; position: relative">
      <ly-e-page full>
        <ly-e-table-layout :render-pagination="renderPagination">
          <template #search> search </template>
          <template #button> button </template>
          <template #default>
            <el-pagination
              v-model:currentPage="pagination.currentPage"
              v-model:page-size="pagination.pageSize"
              :page-sizes="[10, 100, 200, 300, 400]"
              layout="sizes, prev, pager, next"
              :total="1000"
              @current-change="onCurrentChange"
            >
            </el-pagination>
          </template>
        </ly-e-table-layout>
      </ly-e-page>
    </div>
    <h1>1 count: {{ count }}</h1>
    <div>
      <el-row class="mb-4">
        <el-button
          v-click-outside="handleClickOutside"
          @click="$open($fullUrl('www.baidu.com'))"
        >
          Default
        </el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
        <ly-e-button ripple>中文</ly-e-button>
      </el-row>
    </div>
    <div>
      <ly-icon type="ly-iconfullscreen-shrink" style="color: red"></ly-icon>
      <ly-icon type="ly-iconfullscreen-expand" class="blue"></ly-icon>
      <ly-icon type="ly-iconfullscreen-expand"></ly-icon>
      <el-tag>1</el-tag>
      <ly-e-page :full="false">
        <template #default>
          <!--          <ly-e-button type="primary" ripple>test</ly-e-button>-->
        </template>
      </ly-e-page>
      <!--      <el-button v-ripple></el-button>-->
      <!--      <ly-e-button ripple>test</ly-e-button>-->
    </div>
    <div>
      <!--      <el-form-->
      <!--        :model="form"-->
      <!--      >-->
      <!--        <el-form-item label="姓名" prop="name" required>-->
      <!--          <el-input v-model="form.name"></el-input>-->
      <!--        </el-form-item>-->
      <!--        <el-form-item label="数字" prop="number" number>-->
      <!--          <el-input v-model.number="form.number"></el-input>-->
      <!--        </el-form-item>-->
      <!--        <el-form-item label="整数" prop="int" integer>-->
      <!--          <el-input v-model="form.int"></el-input>-->
      <!--        </el-form-item>-->
      <!--        <el-form-item label="手机号" prop="phone" mobile>-->
      <!--          <el-input v-model="form.phone"></el-input>-->
      <!--        </el-form-item>-->
      <!--        <el-form-item label="金钱" prop="money" money>-->
      <!--          <el-input v-model="form.money"></el-input>-->
      <!--        </el-form-item>-->
      <!--      </el-form>-->
    </div>
    <div>
      <ly-e-form
        :model="form"
        show-search-button
        show-reset-button
        ripple-button
        width-full
        show-submit-button
        @query="handleQuery"
        @submit="handleSubmit"
      >
        <!--        <el-form-item label="姓名" prop="name" required>-->
        <!--          <el-input v-model="form.name"></el-input>-->
        <!--        </el-form-item>-->
        <ly-e-form-item label="姓名" prop="name" required trigger="change">
          <el-input v-model="form.name"></el-input>
        </ly-e-form-item>
        <ly-e-form-item label="数字" prop="number" number>
          <el-input v-model.number="form.number"></el-input>
        </ly-e-form-item>
        <ly-e-form-item label="性别" prop="sex" required>
          <ly-e-select
            v-model="form.sex"
            :data="[
              { label: '男', value: 'man' },
              { label: '女', value: 'woman' }
            ]"
            clearable
          ></ly-e-select>
        </ly-e-form-item>

        <ly-e-form-item label="图片" prop="images" required>
          <ly-e-upload
            v-model="form.images"
            draggable
            :limit="2"
            :auto-upload="false"
            list-type="picture-card"
            action="#"
          ></ly-e-upload>
        </ly-e-form-item>
        <ly-e-form-item label="整数" prop="int" integer>
          <el-input v-model="form.int"></el-input>
        </ly-e-form-item>
        <ly-e-form-item label="手机号" prop="phone" mobile>
          <el-input v-model="form.phone"></el-input>
        </ly-e-form-item>
        <ly-e-form-item label="金钱" prop="money" money>
          <el-input v-model="form.money"></el-input>
        </ly-e-form-item>
      </ly-e-form>
    </div>
    <ly-e-button @click="dialogVisible = true" type="primary" ripple>
      test
    </ly-e-button>
    <ly-e-form-dialog
      v-model="dialogVisible"
      title="新增"
      width="30%"
      draggable
      ripple-button
    >
      <ly-e-form :model="form" width-full layout :gutter="30">
        <ly-e-form-item label="姓名" prop="name" required :span="12">
          <el-input v-model="form.name"></el-input>
        </ly-e-form-item>
        <ly-e-form-item label="数字" prop="number" number :span="6">
          <el-input v-model.number="form.number"></el-input>
        </ly-e-form-item>
        <ly-e-form-item label="整数" prop="int" integer :span="6">
          <el-input v-model="form.int"></el-input>
        </ly-e-form-item>
        <ly-e-form-item label="手机号" prop="phone" mobile>
          <el-input v-model="form.phone"></el-input>
        </ly-e-form-item>
        <ly-e-form-item label="金钱" prop="money" money>
          <el-input v-model="form.money"></el-input>
        </ly-e-form-item>
        <ly-e-form-item label="性别" prop="sex" :span="12">
          <ly-e-select
            v-model="form.sex"
            :data="[
              { value: 'man', label: '男' },
              { value: 'woman', label: '女' }
            ]"
          ></ly-e-select>
        </ly-e-form-item>
        <ly-e-form-item label="性别" prop="sex" :span="24">
          <ly-e-upload
            v-model="form.images"
            draggable
            :limit="2"
            :auto-upload="false"
            list-type="picture-card"
            action="#"
          ></ly-e-upload>
        </ly-e-form-item>
      </ly-e-form>
    </ly-e-form-dialog>
    <div>我的最下面</div>
  </div>
</template>

<style lang="scss">
@use 'sass:map';
.blue {
  color: blue;
}
input {
  width: 200px;
}
//$colors: () !default;
//$colors: map.deep-merge(
//    (
//      'white': #ffffff,
//      'black': #000000,
//      'primary': (
//        'base': #409eff,
//      ),
//      'success': (
//        'base': #67c23a,
//      ),
//      'warning': (
//        'base': #e6a23c,
//      ),
//      'danger': (
//        'base': #f56c6c,
//      ),
//      'error': (
//        'base': #f56c6c,
//      ),
//      'info': (
//        'base': #909399,
//      ),
//    ),
//    $colors
//);
//
//$color-white: map.get($colors, 'white') !default;

$colors: (
  'primary': black,
  'secondary': white
);

@function color($color) {
  @return map.get($colors, $color);
}
</style>
