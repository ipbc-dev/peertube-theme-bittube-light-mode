function register ({ registerHook, peertubeHelpers }) {
  
  const baseStaticUrl = peertubeHelpers.getBaseStaticRoute()
  const filterUrl = baseStaticUrl + '/images/filter_black.png';
  const keyboardUrl = baseStaticUrl + '/images/keyboard_black.png';
  const languagesUrl = baseStaticUrl + '/images/languages_black.png';
  const style = document.createElement('style')
  document.head.appendChild(style)
  const sheet = style.sheet
      // Change filter icon
      let rule = "#custom-css .icon.icon-filter { "
      rule+= " background-image: url('"+ filterUrl +"');"
      rule+= " } "
      sheet.insertRule(rule, 0)
      // Change keyboard icon
      rule = " #custom-css .icon.icon-language { "
      rule+= " background-image: url('"+ languagesUrl +"');"
      rule+= " } "
      sheet.insertRule(rule, 0)
      // Change languages icon
      rule = " #custom-css .icon.icon-shortcuts{ "
      rule+= " background-image: url('"+ keyboardUrl +"'); -webkit-filter: none; filter: none"
      rule+= " } "
      sheet.insertRule(rule, 0)
  // END
}

export {
  register
}
