export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', (html, { event }) => {
      // This will be an object representation of the html template.
      html.head.push(`<meta name="viewport" content="width=device-width, initial-scale=1"/>`);
      html.head.push(`<meta name="description" content="Compad private presale website" />`);
      html.head.push(`<link rel="icon" type="image/x-icon" href="images/logo.png" />`);
      html.head.push(`<title>Compad | Private Presale</title>`);
      html.head.push(`<meta property="og:type" content="website" />`);
      html.head.push(`<meta property="og:url" content="https://edidiong-samuel.vercel.app/" />`);
      html.head.push(`<meta property="og:title" content="Compad | Private Presale" />`);
      html.head.push(`<meta property="og:description" content="Compad private presale website" />`);
      html.head.push(`<meta property="og:image" content="images/logo.png" />`);
      html.head.push(`<meta name="twitter:card" content="Compad private presale website" />`);
      html.head.push(`<meta name="twitter:url" content="https://x.com/Compadofficial?t=O7E36yY3IgiypnzQ9f9MwQ&s=09" />`);
      html.head.push(`<meta name="twitter:title" content="Compad | Private Presale" />`);
      html.head.push(`<meta name="twitter:description" content="Compad private presale website" />`);
      html.head.push(`<meta name="twitter:image" content="https://pbs.twimg.com/profile_images/1685353964450004993/7q2iSxcW_400x400.jpg" />`);
      html.head.push(`<meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>`);
    })
    // You can also intercept the response here.
    nitroApp.hooks.hook('render:response', (response, { event }) => { console.log(response) })
  })
  