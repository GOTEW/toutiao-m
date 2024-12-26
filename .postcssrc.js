// postcss.config.js
module.exports = {
  plugins: {
    // 配置使用 postcss-pxtorem 插件
    // 作用 ：把 px 转为 rem
    'postcss-pxtorem': {
      // lib-flexible 的 REM 适配方案：把一行分成10 份，每份就是 1/10
      // 所以 rootValue 应该设置为你的设置稿宽度的 1/10
      // 我们的设计稿是 750 所以应该设置 750 / 10 = 75
      // 但是 Vant 建议设置为 37.5 为什么？ 因为 Vant  是基于 375 写的
      // 所以必须设置为 37.5，唯一的缺点就是使用我们的设计稿的尺寸都必须 / 2
      // 有没有更好的办法：
      //  如果是 Vant 的样式，就按照 37.5 来转换
      //  如果是 我们自己的样式， 就按照75 来转换
      // 通过查阅文本，我们发现 rootvalue 支持两种类型
      //    数字：固定的数值
      //    函数：可以动态处理返回
      //          postcss-pxtorem 处理 CSS 文件的时候都会来调用这个函数
      //          它会把被处理的 CSS 文件相关的信息通过参数传递给改函数
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      // 配置要转换的 CSS 属性
      // * 表示所有
      propList: ['*']
    }
  }
}
