module.exports = function (content) {
  const script =  `
    const styleEl = document.createElement('style')
    styleEl.innerHTM = ${JSON.stringify(content)}
    document.head.appendChild(styleEl)
  `

  return script
}