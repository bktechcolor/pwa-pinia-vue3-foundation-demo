//const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })


module.exports = {
  pwa:{
    workboxPluginMode: 'GenerateSW',
    workboxOptions:{
      navigateFallback: '/index.html',
      runtimeCaching: [
        {
          urlPattern: new RegExp(`^(www|http:|https:)+[^\s]+[\w]`),
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds:20,
            cacheName: 'api-cache',
            cacheableResponse:{
              statuses:[0,200]
            }
          }
        }
      ]
    }
  }
}