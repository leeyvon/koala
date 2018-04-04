<template>
<div>
  <div class="post" v-for="item in postLists" :key="item.id">
      <a>
          <img style="width:680;height:440px;" :src="item.imageSrc" class="cover" />
      </a>
      <div class="else">
          <p>{{moment(item.lastEditTime).format('MMMM Do YYYY')}}</p>
          <h3 class="posttitle" @click="goDetails(item._id)">{{item.title}}</h3>
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
    goDetails(id) {
      this.$router.push({
        path:`/${id}`
      })
    }
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
.posttitle{
  cursor: pointer;
}
</style>
