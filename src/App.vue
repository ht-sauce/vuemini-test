<template>
  <div>
    内部有两个预解析的组件，app.vue下是ion-b<br />
    HelloWorld里面是ion-a，app.vue下的是ion-b<br />
    我已经在main.js配置了isCustomElement，还有vue.config.js也配置了对应的修改<br />
    其中isCustomElement配置没有任何用处，vue.config.js中的配置仅仅是做到了template内部解析不会警告，但是jsx下面还是会提示警告<br />
    <HelloWorld />
    app.vue中的没有发生警告
    <ion-b />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
</style>
