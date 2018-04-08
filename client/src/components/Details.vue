<template>
<div class="details">
    <div class="article-wrapper">
        <header>
            <h1 class="article-title">{{title}}</h1>
            <time>
                <i class="iconfont icon-riqi"></i>
                <span>{{moment(time).format('LL')}}</span>
            </time>
        </header>
        <div class="article-content">
            <p v-html="markdown(content+'')"></p>
        </div>	    
    </div>
</div>
</template>

<script>
import axios from 'axios';
import './../assets/icon/iconfont.css';
export default {
  mounted() {
      this.getArticle();
  },
  data () {
    return {
      title:'',
      content:'',
      time:''
    }
  },
  methods: {
    getArticle() {
        axios.get(`/api/posts/${this.$route.params.id}`).then((response)=>{
            let res = response.data;
            if(res.success){
                this.title = res.data.title;
                this.content = res.data.content;
                this.time = res.data.lastEditTime;
            }
        })
    }
  }
}
</script>

<style scoped>
.details{
    padding: 40px 10% 20px;
    background: #e5e5e5;
}
.article-wrapper{
    background: #fff;
}
.article-wrapper header{
   padding: 30px 0 15px 65px;
   border-left: 5px solid #4d4d4d;
   overflow: hidden;
}
.article-title{
    float: left;
    color: #696969;
    font-weight: 500;
}
.article-wrapper time{
    float: right;
    margin-right: 70px;
    margin-top: 12px;
    color: #999;
}
.article-content p{
    padding: 0 70px 50px;
}
.article-wrapper .article-content{
    margin-top: 30px;
}
@media screen and (max-width: 900px) {
    .details{
        padding: 40px 5% 10px;
        background: #e5e5e5;
    }
}
@media screen and (max-width: 780px) {
    .article-wrapper time{
        float: left;
    }
    .article-wrapper .article-title{
        width: 100%;
    }
    .article-wrapper header{
        padding: 30px 0 15px 25px;
        border-left: 5px solid #4d4d4d;
        overflow: hidden;
    }
    .article-content p{
        padding: 0 30px 10px;
    }   
}
@media screen and (max-width: 480px) {
    .details{
        padding: 40px 0 10px;
        background: #e5e5e5;
    }
    .article-wrapper header{
        padding: 30px 0 15px 10px;
        border-left: 5px solid #4d4d4d;
        overflow: hidden;
    }
    .article-content p{
        padding: 0 15px 10px;
    }   
}
</style>
