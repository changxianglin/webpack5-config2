const schema = require('./schema.json')

module.exports = function(content) {
  // schema 对 options 的验证规则
  // schema 符合 JSON Schema 的规则
  const options = this.getOptions()

  const prefix = `
    /*
    * Author: ${options.author}
    */
  `

  return prefix + content
}