//const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

// install npm install dotenv-webpack --save-dev
// then add const Dotenv = require('dotenv-webpack');
// then add configureWebpack to vue.config.js files

const Dotenv = require('dotenv-webpack');
module.exports = {
  configureWebpack: {
    plugins: [
      new Dotenv()
    ]
  },
  //transpileDependencies: true,
  pwa:{
    workboxPluginMode: 'GenerateSW',
    workboxOptions:{
      navigateFallback: '/index.html',
      cleanupOutdatedCaches: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp(`^https://(firestore.googleapis|www.themealdb|foundation-pwa-vue)`),
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds:40,
            cacheName: 'api-cache-new',
            cacheableResponse:{
              statuses:[0,200]
            }
          }
        }
      ]
    }
  }
}