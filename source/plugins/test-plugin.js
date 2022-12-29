// 1. webpack 加载 webpack.config.js 中所有配置，此时就会 new TestPlugin() 执行插件的 constructor
// 2. webpack 创建 compiler 对象
// 3. 遍历所有 plugins 中插件， 调用插件的 apply 方法
// 4. 执行剩下编译流程(触发各个 hooks 事件)

class TestPlugin {
  constructor() {
    console.log('TestPlugin constructor')
  }

  apply(compiler) {
    console.log('TestPlugin apply')
  }
}

module.exports = TestPlugin