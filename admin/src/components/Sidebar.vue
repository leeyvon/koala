<template>
    <div class="sidebar-container" :class="{ 'hide-sidebar': isCollapse }">
        <el-menu mode="vertical" :collapse="isCollapse" background-color="#304156" text-color="#fff" active-text-color="#409EFF">
        <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title" class="title">导航一</span>
        </el-menu-item>
        <el-menu-item index="2">
            <i class="el-icon-setting"></i>
            <span slot="title" class="title">导航二</span>
        </el-menu-item>
        </el-menu>
    </div>  
</template>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
import { mapState } from 'vuex';
  export default {
    computed: {
        ...mapState(['isCollapse'])
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss" scoped>
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
   z-index: 100;
   background-color: #314156;
}
.hide-sidebar{
  width: 64px !important;
  .title{
      display: none;
  }
}
</style>
