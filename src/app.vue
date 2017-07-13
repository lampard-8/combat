<template>
  <div>
    <keep-alive>
      <router-view :baojie="baojie" :anmo="anmo" :weixiu="weixiu"></router-view>
    </keep-alive>
  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        baojie:[],
        anmo:[],
        weixiu:[]
      }
    },
    created(){
      axios.get('/api/home')
        .then(response =>{
          const result = response.data
          if(result.code ===0){
            this.baojie = result.data.server

          }
        })
      axios.get('/api/serve')
        .then(response => {

          const result = response.data

          if(result.code === 0){
            this.anmo = result.data.server

          }
        })
      axios.get('/api/item')
        .then(response => {

          const result = response.data

          if(result.code === 0){
            this.weixiu = result.data.server

          }
        })
    },




  }
</script>

<style>

</style>
