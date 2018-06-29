<template>
 <div>
   <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="按接口号查询">
      <el-input v-model="formInline.user" placeholder="接口"></el-input>
    </el-form-item>
    <el-form-item label="按时间段查询">
      <el-date-picker
      v-model="value7"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions2">
    </el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">查询</el-button>
    </el-form-item>
  </el-form>

    <el-table
    :data="tableData"
    stripe
    border
    style="width: 100%; height: 600px"
    class="res-table"
    >
    <el-table-column
      prop="id"
      label="ID号"
      width="100">
    </el-table-column>

    <el-table-column
      prop="name"
      label="接口名称"
      width="180">
    </el-table-column>

    <el-table-column
      prop="counter"
      label="使用次数"
      width="120">
    </el-table-column>

     <el-table-column
      prop="fee"
      label="费用"
      width="120">
    </el-table-column>

     <el-table-column
      prop="expire"
      label="过期时间"
      width="220">
    </el-table-column>

    <el-table-column
      prop="operate"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page.sync="pageNo"
    :page-sizes="pageSizeList"
    :page-size="pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="totalDataNumber">
  </el-pagination>

 </div>
</template>

<script>
import { ProfileService } from '@/services/profile';
let profileService = new ProfileService();

export default {
  name: 'profile-index',
  metaInfo: {
    title: 'profile-index'
  },
  created () {
    this.initApiList();
  },
  components: {
  },
  methods: {
    initApiList () {
      let result = profileService.getApiList();
        console.log(result)
        // if (result.list.length > 0) {
        //   this.tableData = result.list;
        //   this.totalDataNumber = result.list.length;
        //   this.listLoading=false;
        // } else {
        //   this.tableData = [];
        //   this.totalDataNumber = 0;
        // }
    },

    handleSizeChange (val) {

    },

    handleCurrentChange () {}
  },
  data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value6: '',
        value7: '',
        formInline: {
          user: '',
          region: ''
        },
        pageNo: 1,
        pageSize: 10,
        pageSizeList: [10, 15, 20, 30, 50],
        tableData: [],
        totalDataNumber: 0,

      }
    }
};
</script>

<style>
  .res-table .cell{
    height:26px;
  }
</style>
