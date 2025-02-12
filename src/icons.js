const icons = require.context('../node_modules/@akryum/md-icons-svg/svg/', true, /materialicons\/24px\.svg$/)

export default {
  install (Vue) {
    let html = ''
    // Load all the SVG symbols
    icons.keys().forEach(key => {
      let result = icons(key)
      const [, iconName] = /(\w+)\/materialicons/.exec(key)
      const [, content] = /<svg.+?>(.*)<\/svg>/.exec(result)
      result = `<svg xmlns="http://www.w3.org/2000/svg" id="ic_${iconName}_standard" viewBox="0 0 24 24">${content}</svg>`
      html += result
    })
    const iconsWrapper = document.createElement('div')
    iconsWrapper.style.display = 'none'
    iconsWrapper.innerHTML = html
    document.body.insertBefore(iconsWrapper, document.body.firstChild)
  },
}

export function generateHtmlIcon (icon) {
  return `<div class="vue-ui-icon"><svg><use href="#ic_${icon}_standard"></use></svg></div>`
}
