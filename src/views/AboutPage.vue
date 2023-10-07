<template>
  <div class="my-8 px-4 text-black">
    <div class="image h-[300px] overflow-hidden my-8 rounded-2xl ">
      <img
        :src="`/img/meal-background.jpg`"
        alt="meal-background-image"
      >
    </div>
    <div class="main-content">
      <div class="app-infor">
        <h2 class="text-amber-500 my-2">
          <i class="fa-solid fa-bolt mr-2" /><strong>Application information:</strong>
        </h2>
        <p>This is demo application bulding in VueJS3 & Pinia. In this project we implement PWA for offline mode. That means our web application execute 2 type of data caching. We use CacheStorage and indexDB for storing data</p>
        <h3><strong><italic>1. What things is stored in CacheStorage</italic></strong></h3>
        <ul class="text-black list-disc">
          <li class="ml-6">
            Static files caching ( files in public folder and cdn files )
          </li>
          <li class="ml-6">
            Dynamic files caching ( Dynamic html page depend on server's url )
          </li>
        </ul>
        <h3><strong><italic>2. What things is stored in indexDB</italic></strong></h3>
        <p>We cache user's input data inside form fiels in offline mode . That means user can access the meals web application and fill in the form to add new meals in case the internet was dropped down. But the new meal can not submit to the server. Because we lost the internet connection, the information was filled in the form by user which is cached and storing in indexDB. So, when the internet connection is backed. These form information automatically submit to the server </p>
      </div>

      <div class="app-tutorials">
        <h2 class="text-amber-500 my-2">
          <i class="fa-solid fa-bolt mr-2" /><strong>Application tutorials:</strong>
        </h2>
        <p><strong>1. Install PWA package</strong></p>
        <p>Through Vue CLI we run the bellow command to install PWA package for our project. This package should be installed right after creating our project. The offline mode is only executed in production environment</p>
        <pre><code>vue add pwa</code></pre>
        <p><strong>2. Configure vue.config.js file for PWA mode</strong></p>
        <pre>
                    <code>
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
                    </code>
                </pre>
        <p>In this project we implement PWA for offline mode. That means our web application execute 2 type of data caching in Cache Storage </p>
        <ul class="text-black list-disc">
          <li class="ml-6">
            Static files caching ( files in public folder and cdn files )
          </li>
          <li class="ml-6">
            Dynamic files caching ( Dynamic html page depend on server's url )
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
</style>