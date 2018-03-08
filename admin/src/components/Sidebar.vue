<template>
    <div class="sidebar-container" :class="{ 'hide-sidebar': isCollapse }">
        <el-menu mode="vertical" :collapse="isCollapse" background-color="#304156" text-color="#fff" active-text-color="#409EFF">
          <el-menu-item index="1" @click="goList()">
              <i class="el-icon-menu"></i>
              <span slot="title" class="title">LIST</span>
          </el-menu-item>
          <el-menu-item index="2" @click="goDrafts()">
              <i class="el-icon-plus"></i>
              <span slot="title" class="title">NEW POST</span>
          </el-menu-item>
        </el-menu>
    </div>  
</template>

<script>
import { mapState } from 'vuex';
  export default {
    computed: {
        ...mapState(['isCollapse'])
    },
    methods: {
      goList() {
        this.$router.push({
          path:'/list'
        })
      },
      goDrafts() {
        this.$router.push({
          path: '/drafts/newDraft'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.el-menu{
    border: 0;
}
.sidebar-container{
   transition: width 0.28s;
   width: 180px;
   height: 100%;
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   background-color: #314156;
}
.hide-sidebar{
  width: 64px !important;
  .title{
      display: none;
  }
}
</style>
