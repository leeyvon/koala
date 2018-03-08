<template>
    <div class="table-container">
        <el-table :data="list" border fit highlight-current-row>
            <el-table-column align="center" label="序号" width="65">
                <template slot-scope="scope">
                    <span>{{scope.row.id}}</span>
                </template>
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
                    <el-tag v-if="scope.row.published === 'true'" type="success">published</el-tag>
                    <el-tag v-else type="warning">unpublished</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" label="操作">
                 <template slot-scope="scope">
                    <el-button type="primary" size="mini">编辑</el-button>
                    <el-button size="mini" type="success">发布</el-button>
                    <el-button size="mini" type="danger">删除</el-button>
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
      const {data} = await this.getDraftList();
      data.forEach((element,k)=> {
          element.id = k + 1;
      });
      this.list = data;
   },
   methods: {
       ...mapActions(['getDraftList'])
   }
}
</script>

<style lang="scss" scoped>
    .table-container{
        padding: 30px;
    }
</style>

