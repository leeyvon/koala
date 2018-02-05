<template>
  <div class="navbar">
    <el-button type="primary" @click="siwthCollapse">展开</el-button>
  </div>
</template>

<script>
export default {
    methods: {
        siwthCollapse() {
            this.$store.commit('TOGGLE_COLLAPSE');
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    color: black;
    text-align: left;
}
</style>


