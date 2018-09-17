<template>
  <el-row>
    <el-col :span="12">
      <div class="grid-content bg-purple-dark">
        <h2>用户登录</h2>
        <el-form label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="username"></el-input>
          </el-form-item>

          <el-form-item label="密码">
            <el-input v-model="password"></el-input>
          </el-form-item>

          <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import ElRow from "element-ui/packages/row/src/row";
    export default {
      components: {ElRow},
      name: "Login",
      data(){
          return{
            username:'',
            password:'',
          }
      },
      methods:{
         onSubmit:function () {
            var that = this;
            this.$axios.request({
              url:'http://127.0.0.1:8002/api/login/',
              method:"POST",
              data:{
                user:that.username,
                pwd:that.password
              },
              headers:{
//                'Content-Type':'application/json',
              },
            }).then(function (response) {
                console.log(response.data);
                if(response.data.code===1000){
                    that.$store.commit('saveToken',{token:response.data.token,username:that.username});
                    alert(1)
                    var url = that.$route.query.backUrl;
                    console.log('url>>>>',url);
                    if(url){
                      that.$router.push({path:url})
                    }else{
                      that.$router.push({name:'index'})
                    }

                    // 3/3：使用localStorage
//                    localStorage.setItem('user',that.username);
//                    localStorage.setItem('token',response.data.token);
                }
                else {
                    alert(response.data.error);
                    that.username='';
                    that.password='';
                }
            }).catch(function (response) {
            })
         }
      }
    }

</script>

<style scoped>

</style>
