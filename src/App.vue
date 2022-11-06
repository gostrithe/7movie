<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="wrapper">
    <RouterView />
    <footer>
      <nav class="tab-wrapper">
        <!-- <a href="/films"></a> -->
        <RouterLink class="tab" to="/films" active-class="active">电影</RouterLink>
        <RouterLink class="tab" to="/cinemas" active-class="active">影院</RouterLink>
        <RouterLink class="tab" to="/news" active-class="active">资讯</RouterLink>
        <RouterLink class="tab" to="/about" active-class="active">我的</RouterLink>
      </nav>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import '@assets/variable.scss';
.tab-wrapper {
  display: flex;
  width: 100%;
  border-top: 1px solid $myLightGray;

  .tab {
    flex-grow: 1;
    text-align: center;
    height: 49px;
    line-height: 49px;
    color: $myGray;
    // 新说法，&代表把空格吃了。不是后代下，变成当前下
    &.active {
      color: $myOrange;
    }
  }
}
</style>
