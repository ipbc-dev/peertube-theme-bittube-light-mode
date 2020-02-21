function register ({ registerHook, peertubeHelpers }) {
  
  const baseStaticUrl = peertubeHelpers.getBaseStaticRoute()
  const filterUrl = baseStaticUrl + '/images/filter_black.png';
  const keyboardUrl = baseStaticUrl + '/images/keyboard_black.png';
  const languagesUrl = baseStaticUrl + '/images/languages_black.png';
  const image404 = baseStaticUrl + '/images/404.svg'
  const style = document.createElement('style')
  document.head.appendChild(style)
  // STYLES START
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
  // STYLES END

  /* ANGULAR NAVIGATION-END */
    registerHook({
      target: 'action:router.navigation-end',
      handler: params => {
        if(document.querySelector('my-page-not-found')){
          const img = document.querySelector('my-page-not-found').querySelector('img')
          if(img){
            img.src = image404
          }
        }
      }
    })
}

export {
  register
}
