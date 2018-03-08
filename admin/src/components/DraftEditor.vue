<template>
  <div class="editor-container">
      <el-input style="margin-bottom:10px;" v-model="title" placeholder="请输入标题"></el-input>
      <el-input style="margin-bottom:10px;" v-model="imgSrc" placeholder="图片地址"></el-input>
      <textarea id="editor"></textarea>
      <el-button style="float:right;margin-top:10px;" type="primary" @click="addDraft()">ADD</el-button>
  </div>
</template>
<script>
import 'font-awesome/css/font-awesome.min.css'
import 'simplemde/dist/simplemde.min.css'
import SimpleMDE from 'simplemde' 
import md2html from '@/markdown'
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            simplemde: null,
            title: null,
            imgSrc: null,
            content: null
        }
    },
    mounted() {
    this.simplemde = new SimpleMDE({
        element: document.getElementById('editor'),
        previewRender: str => md2html(str),
        autoDownloadFontAwesome: false,
        toolbar: ['bold', 'italic', 'strikethrough', 'heading-1', 'heading-2', 'heading-3', 'clean-block', '|', 'code', 'quote', 'unordered-list', 'ordered-list', 'table', '|', 'link', 'image', 'horizontal-rule', {
        name: 'more',
            action: function customFunction (editor) {
            //  fix me
            },
            className: 'fa fa-chevron-circle-down',
            title: 'More'
        }, '|', 'preview', 'side-by-side', 'fullscreen', '|', 'guide'],
        spellChecker: false,
        insertTexts: {
            link: ['[', ']( )']
        },
        // hideIcons: ['guide', 'heading', 'quote', 'image', 'preview', 'side-by-side', 'fullscreen']
        });
        // 保存article
        this.simplemde.codemirror.on("change", ()=>{
            this.content = this.simplemde.value();
        })
    },
    methods:{
        ...mapActions(['createDraft']),
        async addDraft() {
            if(!this.title){
                this.$message({
                    message: '请填写标题',
                    type: 'warning'
                });
                return;
            };
           const {data} = await this.createDraft({
               title: this.title,
               imageSrc: this.imageSrc,
               content: this.content
           })
        }
    }
}
</script>
<style lang="scss" scoped>
.editor-container{
    padding: 20px;
}
</style>
