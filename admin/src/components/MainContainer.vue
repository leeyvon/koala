<template>
  <div class="main-container" :class="{ 'hide-sidebar': isCollapse }">
      <navbar></navbar>
      <draft-editor></draft-editor>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import DraftEditor from '@/components/DraftEditor'
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['isCollapse'])
    },
    components:{
      Navbar,
      DraftEditor
    }
}
</script>
<style lang="scss" scoped>
.main-container{
    transition: margin-left 0.28s;
    margin-left: 180px;
}
.hide-sidebar{
    margin-left: 64px !important;
}
</style>
