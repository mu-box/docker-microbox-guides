module.exports = {
  title : "Microbox",
  dest  : ".build",
  head  : [
    ['script', { src:"https://use.typekit.net/cqd5kth.js" }],
    ['script', { content:"try{Typekit.load({ async: true });}catch(e){}" }]
  ],

  // Assets
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': '../../assets',
        '@svgs': '../../assets/svg/compiled'
      }
    }
  },


  // ------------ Preprocessors
  chainWebpack: config => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
        .loader('pug-plain-loader')
        .end()
    config.module
      .rule('coffee')
      .test(/\.coffee/)
      .use('coffee-loader')
        .loader('coffee-loader')
        .end()
    // config.module.rules.delete('svg')
    config.module
      .rule('svgx')
      .test(/\.(svgx)(\?.*)?$/)
      .use('vue-svg-loader')
        .loader('vue-svg-loader')
        .end()
  }
}
