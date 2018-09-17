<template>
  <div id="app">
    <el-container>
       <el-header>
         <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                  @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
           <el-menu-item index="1"><router-link to="/index">首页</router-link></el-menu-item>
           <el-menu-item index="2"><router-link to="/courses">课程列表页</router-link></el-menu-item>

           <el-menu-item index="2">
             <!--从全局取出存在在cookie中的用户名，若未登录则直接显示登录-->
             <span v-if="this.$store.state.token">{{this.$store.state.username}}</span>
             <span v-else="">
               <router-link to="/login">登录</router-link>
             </span>
           </el-menu-item>

           <!--1/3：使用localStorage方式-->
           <!--<el-menu-item index="3">-->
             <!--<span v-if="username" v-text="username"></span>-->
             <!--<span v-else><router-link to="/login">登录</router-link></span>-->
           <!--</el-menu-item>-->

           <el-menu-item index="4"><span v-on:click="logout">退出</span></el-menu-item>

         </el-menu>

      </el-header>

      <keep-alive>
         <el-main>
           <router-view/>
         </el-main>
    </keep-alive>

    </el-container>
    </div>
</template>

<script>
  import ElContainer from "../node_modules/element-ui/packages/container/src/main";
  export default {
    components: {ElContainer},
    name: 'App',
    data(){
        return{
          activeIndex: '1',
          activeIndex2: '1',
        }
    },

    methods:{
      handleSelect:function () {
        },
      logout:function () {
        this.$store.commit('clearToken')
        this.$router.push({name:'login'})

//        localStorage.removeItem('user');
//        localStorage.removeItem('token');
//        this.$router.push({name:'login'});


      }
    }
  }
</script>

<style>
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }

</style>




