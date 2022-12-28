// raw loader 接受到 content 是 Buffer 数据格式

// module.exports = function(content) {
//   console.log(content)
//   return content 
// }

// module.exports.raw = true

function test3Loader(content) {
  return content
}

test3Loader.raw = true

module.exports = test3Loader