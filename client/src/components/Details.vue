<template>
<div class="details">
    <div class="article-wrapper">
        <h1 class="title">{{article.title}}</h1>
        <div class="content">
            <p v-html="markdown(article.content+'')"></p>
        </div>	    
    </div>
</div>
</template>

<script>
import axios from 'axios';
import marked from 'marked';
export default {
  mounted() {
      this.getArticle();
  },
  data () {
    return {
      article:''
    }
  },
  methods: {
    getArticle() {
        axios.get(`/api/posts/${this.$route.params.id}`).then((response)=>{
            let res = response.data;
            if(res.success){
                this.article = res.data;
            }
        })
    }
  }
}
</script>

<style scoped>
.details{
    padding: 20px 15% 50px;
}
.article-wrapper .title{
    text-align: center;
}
.article-wrapper .content{
    margin-top: 30px;
}
</style>
