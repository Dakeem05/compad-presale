export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', (html, { event }) => {
      // This will be an object representation of the html template.
      console.log(html)
      html.head.push(`<meta name="description" content="Compad private presale website" />`)
      html.head.push(`<link rel="icon" type="image/x-icon" href="images/logo.png" />`)
      html.head.push(`<title>Compad | Private Presale</title>`)
    })
    // You can also intercept the response here.
    nitroApp.hooks.hook('render:response', (response, { event }) => { console.log(response) })
  })
  