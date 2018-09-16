<template>
  <div id="app">
    <ul class="headers">
      <li><router-link to="/index">首页</router-link></li>
      <li><router-link to="/courses">课程列表页</router-link></li>
    </ul>
    <hr>
    <keep-alive>
      <div class="content">
         <router-view/>
      </div>

    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
li{
  display: inline-block;
  list-style: none;
}
</style>




