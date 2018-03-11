export default ({app, env}, options = {}) => {
  const disableTracking = Boolean(env.DISABLE_TRACKING)

  if (process.browser && !disableTracking) {
    !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";
    }}();

    analytics.load(process.env.SEGMENT_KEY)
    analytics.page()

    const config = Object.assign({
      debug: false,
      pageCategory: '',
    }, options)
    /* eslint-enable */
    /*
    ** Every time the route changes (fired on initialization too)
    */
    app.router.afterEach((to, from) => {
      const data = {
        'path': to.fullPath,
        'referrer': from.fullPath,
        'search': location.search,
        'title': document.title,
        'url': location.href
      }
      analytics.page(config.pageCategory || to.name || '', data)
    })
  }
}
