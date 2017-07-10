<template>
  <div>
    <com-header></com-header>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <com-footer></com-footer>

  </div>

</template>

<script>
  import header from './components/header/header.vue'
  import footer from './components/footer/footer.vue'

    export default {

      components:{
        'com-header' : header,
        'com-footer' : footer,

      }

    }
</script>

<style>

</style>
