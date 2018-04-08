<template>
<div style="background:#fff;">
    <div class="nav">
        <ul id="menu-menu" class="menu">
            <li>文章归档</li>
        </ul>
    </div>
    <div id="container">
        <div id="screen">
            <div id="mark">
                <div class="layer" data-depth="0.4">
                    <img @load="imageLoaded" id="cover" crossorigin="anonymous" src="./../assets/wallhaven.jpeg" width="1920" height="1080"/>
                </div>
            </div>

            <div id="vibrant">
                <svg viewBox="0 0 2880 1620" height="100%" preserveAspectRatio="xMaxYMax slice">
                    <polygon opacity="0.7" points="2000,1620 0,1620 0,0 600,0 "/>
                </svg>
                <div></div>
            </div>

            <div id="header">
            <div>
                <div @click="toggleMenu" class="icon-menu switchmenu"></div>
            </div>
            </div>
            <div id="post0">
                <p>{{moment(topLine.lastEditTime).format('MMMM Do YYYY')}}</p>
                <h2 class="posttitle" @click="goDetails(topLine._id)">{{topLine.title}}</h2>
                <p class="p-content">{{topLine.excerpt}}</p>
            </div>
        </div>
        
        <div id="primary">
            <Posts :postLists="list"></Posts>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import Posts from '@/components/Posts'
export default {
  name: 'index',
  mounted () {
    this.load();
    this.resize();
    var scene = document.getElementById('mark');
    var parallaxInstance = new Parallax(scene); 
    this.getList();
  },
  data () {
    return {
      topLine:'',
      list:[]
    }
  },
  methods:{
        resize() {
            var _this = this;
            $(window).resize(function(){
                $('#mark').height(window.innerHeight);
                _this.adjustLayer();
            });
        },
        load() {
            $('#mark').height(window.innerHeight);
            this.adjustLayer();
        },
        adjustLayer() {
            var _w = $('#mark').width(), _h = $('#mark').height(), x, y, i, e;
            var cover_w = $('#cover').attr('width');
            var cover_h = $('#cover').attr('height');
            e = (_w >= 1000 || _h >= 1000) ? 1000 : 500;
            if (_w >= _h) {
                i = _w / e * 50;
                y = i;
                x = i * _w / _h;
            } else {
                i = _h / e * 50;
                x = i;
                y = i * _h / _w;
            }
            $('.layer').css({
                'width': _w + x,
                'height': _h + y,
                'marginLeft': - 0.5 * x,
                'marginTop': - 0.5 * y
            });
            $('#cover').width(_w + x);
            $('#cover').height(_h + y);

            this.adjustImgPosition($('#cover'), cover_w, cover_h)
        },
        adjustImgPosition(id, w, h) {
            var _height = id.parent().height(),
            _width = id.parent().width(),
            ratio = h / w;
            if (_height / _width > ratio) {
                id.css({
                    height: _height + 'px',
                    width: _height / ratio +'px'
                })
            } else {
                id.css({
                    width: _width + 'px',
                    height: _width * ratio +'px'
                })
            }
            id.css({
                left: (_width - parseInt(id.width())) / 2 +'px',
                top: (_height - parseInt(id.height())) / 2 +'px'
            })
        },
        imageLoaded() {
            var cover = document.getElementById('cover');
            var vibrant = new Vibrant(cover);
            var swatches = vibrant.swatches();
            if (swatches['DarkMuted']) {
                $('#vibrant polygon').css('fill', swatches['DarkMuted'].getHex())
                $('#vibrant div').css('background-color', swatches['DarkMuted'].getHex())
            }
            if (swatches['Vibrant']) {
                $('.icon-menu').css('color', swatches['Vibrant'].getHex())
            }
        },
        toggleMenu() {
            $('html, body').toggleClass('mu');
        },
        getList() {
            axios.get('/api/posts').then((response)=>{
                let res = response.data;
                if(res.success){
                    this.list = res.data.slice(1);
                    this.topLine = res.data[0];
                }
                this.loaded();
            })
        },
        goDetails(id) {
            this.$router.push({
                path:`/${id}`
            })
        }
  },
  components:{
    Posts
  }
}
</script>

<style scoped>
#post0 .p-content{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
}
.posttitle{
    color: #fff;
    cursor: pointer;
}
</style>
