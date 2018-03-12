<template>
    <div class="table-container">
        <el-table :data="list" border fit highlight-current-row>
            <el-table-column align="center" label="序号" type="index" width="65">
            </el-table-column>
            <el-table-column align="center" label="时间">
                 <template slot-scope="scope">
                    <span>{{moment(scope.row.createTime).format('YYYY-MM-DD hh:mm:ss')}}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" label="标题">
                 <template slot-scope="scope">
                    <span>{{scope.row.title}}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" label="状态">
                 <template slot-scope="scope">
                    <el-tag v-if="scope.row.published == true" type="success">published</el-tag>
                    <el-tag v-else type="warning">unpublished</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" label="操作">
                 <template slot-scope="scope">
                    <el-button type="primary" size="mini" @click="modify(scope.row._id)">编辑</el-button>
                    <el-button v-if="scope.row.published == false" size="mini" type="success" @click="pub(scope.row._id)">发布</el-button>
                    <el-button v-else size="mini" type="warning" @click="deletePub(scope.row._id)">撤销</el-button>
                    <el-button size="mini" type="danger" @click="draftDelete(scope.row._id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
   data() {
       return {
           list: []
       }
   },
   async mounted() {
       this.init()
   },
   methods: {
       ...mapActions(['getDraftList','deleteDraft','publication']),
        async init() {
            const {data} = await this.getDraftList();
            this.list = data;
        },
        modify(id) {
            this.$router.push({
                path:`/drafts/post/${id}`
            })
        },
        async draftDelete (id) {
            this.$confirm('确定删除吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(async () => {
                const data = await this.deleteDraft(id);
                if(data.success){
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.init();
                }else{
                    this.$message({
                        type: 'error',
                        message: '删除失败!'
                    });
                }           
            }).catch(() => {
                this.$message({
                    type: 'error',
                    message: '删除失败'
                });          
            });
        },
        async pub (id) {
            this.$confirm('确定发布吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(async () => {
                console.log(id)
                const data = await this.publication(id);
                if(data.success){
                    this.$message({
                        type: 'success',
                        message: '发布成功!'
                    });
                    this.init();
                }else{
                    this.$message({
                        type: 'error',
                        message: '发布失败!'
                    });
                }           
            }).catch(() => {
                this.$message({
                    type: 'error',
                    message: '已取消'
                });          
            });
        },
        deletePub (){
            
        }
   }
}
</script>

<style lang="scss" scoped>
    .table-container{
        padding: 30px;
    }
</style>

