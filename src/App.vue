<template>
  <div id="app">
    <router-view/>
    <h1>20241225</h1>
    <div>
      <i class="toutiao toutiao-shipin"></i>
    </div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button plain type="primary">朴素按钮</van-button>
    <van-button plain type="success">朴素按钮</van-button>
    <div class="box">
      <h1>hello word!</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="less">
.box {
  width: 375px;
  height: 64px;
  background-color: pink;
}
</style>
