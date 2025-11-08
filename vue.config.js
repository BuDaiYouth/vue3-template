const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  devServer: {
    open: true,
    // frontend host
    host: 'localhost',
    port: 8080,
    https: false,
    proxy: {
      ['/frontend-prefix']: {
        // backend host
        target: 'http://localhost:9090',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          ['^/frontend-prefix']: '/backend-prefix'
        }
      }
    },

    client: {
      overlay: {
        warnings: false,
        errors: false,
      }
    }
  }
})
