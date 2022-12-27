// 
// loader 是一个函数
// 当 webpack 解析资源的时候会调用相应的 Loader 去处理
// loader 接受到文件内容作为参数， 返回内容出去
//  content 是文件内容
//  map SourceMap 
//  meta 别的 loader 传递的数据
// 

module.exports = function(content, map, meta) {
  console.log(content)
  return content
}