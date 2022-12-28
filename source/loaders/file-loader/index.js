const loaderUtils = require("loader-utils")

module.exports = function(content) {
  let interpolateName = loaderUtils.interpolateName(
    this, 
    "[hash].[ext][query]",
    {
      content,
    },
  )

  interpolateName = `images/${interpolateName}`
  
  this.emitFile(interpolateName, content)
  // 1. 根据文件内容生成 hash 值文件名
  // 2. 讲文件输出出去
  // 3. 返回 module.export = '文件路径（文件名）'

  return `module.exports = "${interpolateName}"`

}

// 需要处理图片、字体等文件，他们是 buffer 数据
// 需要使用 raw loader 才能处理

module.exports.raw = true