<template>
  <div class="navbar">
    <div class="hamburger-container" @click="siwthCollapse">
        <i class="fa fa-bars" :class="{'fa-rotate-90':isCollapse}"></i>
    </div>
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
.hamburger-container{
    width: 50px;
    height: 50px;
    float: left;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
}
.navbar{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    color: black;
    text-align: left;
}
</style>


