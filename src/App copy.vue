<script setup>
import { RouterLink, RouterView } from 'vue-router';

/* 导入并暴露数据 mock/mockData.js */
// // ES6
// import mockData from '../mock/data/mockData.json'
// console.log(mockData);

/* 引入axios */
// import axios from 'axios'
// 构造url查询参数
// const params = new URLSearchParams()
// params.append('username', 'admin')
// params.append('password', '123')
</script>

<template>
  <div class="wrapper">
    <RouterView />
    <footer>
      <nav class="tab-wrapper">
        <!-- <a href="/films"></a> -->
        <RouterLink class="tab" to="/films/" active-class="active">电影</RouterLink>
        <RouterLink class="tab" to="/cinemas" active-class="active">影院</RouterLink>
        <RouterLink class="tab" to="/news" active-class="active">资讯</RouterLink>
        <RouterLink class="tab" to="/about" active-class="active">我的</RouterLink>
      </nav>
    </footer>
  </div>
</template>

<style lang="scss">
@import '@assets/variable.scss';
.tab-wrapper {
  display: flex;
  width: 100%;
  border-top: 1px solid $myLightGray;

  .tab {
    flex-grow: 1;
    // text-align: center;
    // height: 49px;
    // line-height: 49px;
    // 导入mixin定义的函数
    // @include textCenter(77px);
    // @include textCenter();
    @include textCenter;

    color: $myGray;
    // 新说法，&代表把空格吃了。不是后代下，变成当前下
    &.active {
      color: $myOrange;
    }
  }
}
</style>
