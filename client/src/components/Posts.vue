<template>
<div class="post">
    
    <a data-id="<?php the_ID() ?>" href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
        <img width="680" height="440" src="./../assets/timthumb01.jpeg" class="cover" />
    </a>
    <div class="else">
        <p>十二月 18, 2017</p>
        <h3><a class="posttitle" href="javascript:void(0)">我们都曾畏惧告别</a></h3>
        <p>我实际上是个十分口拙的人。而且，特别是在关键时刻尤为口拙。比如告别。 告别似乎是一个普遍公认的隆...</p>
    </div>
</div>
</template>

<script>
export default {
  name: 'Post',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
