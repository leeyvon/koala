<template>
<div class="archieve">
   <div class="article-list">
       <div v-for="value in archieveList" :key="value[1].id">
        <h3 class="al_year">{{value[0]}}年</h3>
        <ul class="al_mon_list" v-for="posts in Object.entries(value[1]).reverse()" :key="posts[1].id">
            <li>
                <span>{{posts[0]}}月（{{posts[1].length}}篇文章）</span>
            </li>
            <ul class="al_post_list" v-for="post in posts[1]" :key="post.id">
                <li><span @click="goDetails(post._id)"><span>{{moment(post.lastEditTime).format('D')}}</span>日：<i style="text-decoration:underline;">{{post.title}}</i></span></li>
            </ul>
        </ul>
       </div>
    <i class="iconfont icon-chacha close-archieve" @click="goIndex()"></i>
   </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Archieve',
  mounted() {
      $('body').removeClass('mu');
      this.getList();
  },
  data() {
      return {
          archieveList:{}
      }
  },
  methods: {
      getList() {
          axios.get('/api/archieve').then((response)=>{
            let res = response.data;
            if(res.success){
                this.archieveList = Object.entries(res.data).reverse()
            }
          })
      },
      goDetails(id) {
        this.$router.push({
            path:`/${id}`
        })
      },
      goIndex() {
        this.$router.push({
            path:'/'
        })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article-list{
    width: 700px;
    padding: 60px 0;
    margin: 0 auto;
    position: relative;
}
.al_year{
    font-size: 22px;
}
.article-list ul li{
    list-style-type: disc;
}
.article-list .al_mon_list{
    padding-left: 20px;
    margin: 20px 0;
}
.article-list .al_post_list{
    margin: 20px 0;
    padding-left: 20px;
}
.al_post_list li span{
    cursor: pointer;
}
.close-archieve{
    cursor: pointer;
    position: absolute;
    top: 60px;
    right: -40px;
}
</style>
