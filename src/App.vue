<template>
  <div id="app">
    <h1>黑马头条</h1>
    <router-view />
    <div>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
    <div>
      <i class="toutiao toutiao-shipin"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="less"></style>
