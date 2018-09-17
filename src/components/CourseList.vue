<template>
    <div class="book_list">
       <div class="item" v-for="course in courses" style="width: 200px;float: left;margin-left: 30px">
         <img src="#"/>
         <div class="content">
           <router-link :to="{name:'course_detail',params:{id:course.id}}"><h1>{{course.title}}</h1></router-link>
           <p><label>等   级：</label>{{course.degree}}</p>
           <p><label>课程时长：</label>{{course.learn_times}}分钟</p>
         </div>
       </div>
    </div>
</template>

<script>
    export default {
      name: "courses",
      data(){
        return{
          courses:[]
        }
      },

      mounted(){
        this.initCourseList()
      },

      methods:{
        initCourseList:function () {
          var that = this;
          this.$axios.request({
            url:'http://127.0.0.1:8002/api/courses/',
            method:"GET",
            params:{
                token:that.$store.state.token,
            }
          }).then(function (response) {
            console.log(response);
            that.courses=response.data.data
          })
        }
      }
    }
</script>

<style scoped>
  .content{
    font-size: 10px;
    color: #777777;
  }

</style>
