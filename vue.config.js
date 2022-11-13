module.exports = {
  devServer: {
    port: 8080
  },
  runtimeCompiler: true,
  // NOTE: set alias via `configureWebpack` or `chainWebpack`
  chainWebpack: (config) => {
    config.resolve.alias
      .set('balm-ui-plus', 'balm-ui/dist/balm-ui-plus.js')
      .set('balm-ui-css', 'balm-ui/dist/balm-ui.css')
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true
    })
  }
}
