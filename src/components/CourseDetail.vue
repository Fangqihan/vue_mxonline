<template>
  <div class="course">
    <h2>课程详情页面</h2>
    <p><span>名称：</span>{{course.title}}</p>
    <p><span>描述：</span>{{course.description}}</p>
    <p><span>讲师：</span>{{course.teacher}}</p>
    <p><span>类别：</span>{{course.category}}</p>
    <p><span>须知：</span>{{course.notice}}</p>
    <div class="chapters">
      <h3>章节列表</h3>
      <div v-for="chapter in chapters">
        <a :href="chapter.url">{{chapter.title}}</a>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
      name: "BookDetail",
      data(){
        return{
         course:'',
          chapters:''
        }
      },
      mounted(){
        this.initCourseDetail()
      },
      methods:{
        initCourseDetail:function () {
          var b_id=this.$route.params.id;
          var that = this;
          var url= 'http://127.0.0.1:8002/api/courses/'+b_id+'/';
          this.$axios.request({
            url:url,
            method:"GET"
          }).then(function (response) {
            console.log(response);
            that.course=response.data.data
            that.chapters=response.data.data.chapters
          })
        }
      }

    }
</script>

<style scoped>
.course span{
  font-size: 13px;
  color: #acb3ba;
}

</style>
