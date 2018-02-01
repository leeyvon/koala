<template>
  <div class="navbar-container" :class="{ 'hide-sidebar': isCollapse }">
    <el-button type="primary" @click="siwthCollapse">展开</el-button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['isCollapse'])
    },
    methods: {
        siwthCollapse() {
            this.$store.commit('TOGGLE_COLLAPSE');
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar-container{
    transition: margin-left 0.28s;
    margin-left: 180px;
    height: 50px;
    background-color: #fff;
    color: black;
    text-align: left;
    border-bottom: 1px solid #eee;
    line-height: 50px; 
}
.hide-sidebar{
    margin-left: 64px !important;
}
</style>


