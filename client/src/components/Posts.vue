<template>
<div>
  <div class="post" v-for="item in postLists" :key="item.id">
      <a>
          <img style="width:680;height:440px;" :src="item.imageSrc" class="cover" />
      </a>
      <div class="else">
          <p>{{moment(item.lastEditTime).format('MMMM Do YYYY')}}</p>
          <h3><a class="posttitle" href="javascript:void(0)">{{item.title}}</a></h3>
          <p class="content-wrapper" v-text="item.excerpt"></p>
      </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Post',
  props:['postLists'],
  methods:{
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-wrapper{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}
</style>
