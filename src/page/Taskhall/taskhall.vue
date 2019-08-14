/* eslint-disable no-debugger */
<template>
  <!-- <div class="checkout"> -->
  <div class="taskhall">
    <y-header>
      <div slot="nav"></div>
    </y-header>

    <el-card class="box-card w1200">
      <div class="tablecontent">
        <!-- 表格展示 1 -->
        <el-table
          :data="
            taskHall.slice((currentPage - 1) * pagesize, currentPage * pagesize)
          "
          border
          stripe
          style="width: 100%"
          highlight-current-row
          @current-change="handleCurrentChange"
          align="center"
        >
          <!-- 复选框 -->
          <el-table-column type="selection" width="55" align="center">
          </el-table-column>
          <!-- 1自增主键 -->
          <el-table-column
            prop="id"
            label="自增主键"
            v-if="(show = false)"
            width="150"
            align="center"
          >
          </el-table-column>
          <!-- 2词条主键 -->
          <el-table-column
            prop="projectId"
            label="词条主键"
            width="150"
            align="center"
            v-if="(show = false)"
          >
          </el-table-column>
          <!-- 3子任务分类主键 -->
          <el-table-column
            prop="subCategoryId"
            label="子任务分类主键"
            width="150"
            align="center"
            v-if="(show = false)"
          >
          </el-table-column>
          <!-- 4任务对象主键 -->
          <el-table-column
            prop="targetId"
            label="任务对象主键"
            width="150"
            align="center"
            v-if="(show = false)"
          >
          </el-table-column>
          <!-- 5开始时间 -->
          <el-table-column
            id="startTime"
            prop="startTime"
            label="开始时间"
            align="center"
            sortable
            :default-sort="{ prop: 'date', order: 'descending' }"
            width="180"
          >
            <i class="el-icon-time"></i>
          </el-table-column>
          <!-- 6任务创建者 -->
          <el-table-column
            prop="creator"
            label="任务创建者"
            width="120"
            v-if="(show = false)"
            align="center"
          >
          </el-table-column>
          <!-- 7标注员 -->
          <el-table-column
            prop="commonUser"
            label="标注员"
            width="120"
            v-if="(show = false)"
            align="center"
          >
          </el-table-column>
          <!-- 8检查员 -->
          <el-table-column
            prop="inspector"
            label="检查员"
            width="120"
            v-if="(show = false)"
            align="center"
          >
          </el-table-column>
          <!-- 9质检员 -->
          <el-table-column
            prop="editor"
            label="质检员"
            width="120"
            v-if="(show = false)"
            align="center"
          >
          </el-table-column>
          <!-- 10专家 -->
          <el-table-column
            prop="expert"
            label="专家"
            width="120"
            v-if="(show = false)"
            align="center"
          >
          </el-table-column>
          <!-- 11创建时间 -->
          <el-table-column
            id="createTime"
            prop="createTime"
            label="创建时间"
            align="center"
            sortable
            :default-sort="{ prop: 'date', order: 'descending' }"
            v-if="(show = false)"
            width="180"
          >
            <i class="el-icon-time"></i>
          </el-table-column>
          <!-- 12标注员完成时间 -->
          <el-table-column
            id="commonTime"
            prop="commonTime"
            label="标注员完成时间"
            align="center"
            sortable
            :default-sort="{ prop: 'date', order: 'descending' }"
            width="180"
            v-if="(show = false)"
          >
            <i class="el-icon-time"></i>
          </el-table-column>
          <!-- 13检查员完成时间 -->
          <el-table-column
            id="inspectorTime"
            prop="inspectorTime"
            label="检查员完成时间"
            align="center"
            sortable
            :default-sort="{ prop: 'date', order: 'descending' }"
            width="180"
            v-if="(show = false)"
          >
            <i class="el-icon-time"></i>
          </el-table-column>
          <!-- 14质检员完成时间 -->
          <el-table-column
            id="editTime"
            prop="editTime"
            label="质检员完成时间"
            align="center"
            sortable
            :default-sort="{ prop: 'date', order: 'descending' }"
            width="180"
            v-if="(show = false)"
          >
            <i class="el-icon-time"></i>
          </el-table-column>
          <!-- 15专家完成时间 -->
          <el-table-column
            id="expertTime"
            prop="expertTime"
            label="专家完成时间"
            align="center"
            sortable
            :default-sort="{ prop: 'date', order: 'descending' }"
            width="180"
            v-if="(show = false)"
          >
            <i class="el-icon-time"></i>
          </el-table-column>
          <!-- 16任务类型(create/update) -->
          <el-table-column
            prop="type"
            label="任务类型"
            width="100"
            v-if="(show = false)"
            align="center"
          >
          </el-table-column>

          <!-- 17模板主键 -->
          <el-table-column
            prop="commentId"
            label="模板主键"
            width="150"
            align="center"
            v-if="(show = false)"
          >
          </el-table-column>
          <!-- 18二级菜单名称 -->
          <el-table-column
            prop="subCategoryName"
            label="二级菜单名称"
            width="100"
            v-if="(show = false)"
            align="center"
          >
          </el-table-column>
          <!-- 19词条名称 -->
          <el-table-column
            prop="targetName"
            label="词条名称"
            width="100"
            v-if="(show = false)"
            align="center"
          >
          </el-table-column>
          <!-- ============ 列名显示隐藏分界线 ======================================= -->
          <!-- 20任务操作内容类型（project、disease、gene、genePor、drug） 显-->
          <el-table-column
            prop="contentType"
            label="任务操作内容类型"
            v-if="(show = false)"
            width="150"
            align="center"
          >
          </el-table-column>
          <!-- 21结束时间 显-->
          <el-table-column
            id="endTime"
            prop="endTime"
            label="结束时间"
            align="center"
            sortable
            :default-sort="{ prop: 'date', order: 'descending' }"
            width="180"
          >
            <i class="el-icon-time"></i>
          </el-table-column>
          <!-- 22任务名称 显-->
          <el-table-column
            fixed
            prop="name"
            label="任务名称"
            width="200"
            align="center"
          >
          </el-table-column>
          <!-- 23任务创建者 显-->
          <el-table-column
            prop="createrName"
            label="任务创建者"
            width="120"
            align="center"
          >
          </el-table-column>
          <!-- 24操作 显-->
          <el-table-column
            label="操作"
            align="center"
            fixed="right"
            width="130"
          >
            <template slot-scope="scope">
              <el-button
                @click="getTask(scope.row.commentId)"
                type="text"
                size="small"
                >领取任务</el-button
              >
            </template>
          </el-table-column>
          <!-- 25任务状态 显-->
          <el-table-column
            prop="flag"
            label="任务状态"
            width="150"
            align="center"
          >
          </el-table-column>
          <!-- 26标注员 显-->
          <el-table-column
            prop="commonUserName"
            label="标注员"
            width="120"
            align="center"
          >
          </el-table-column>
          <!-- 27检查员 显-->
          <el-table-column
            prop="inspectorName"
            label="检查员"
            width="120"
            align="center"
          >
          </el-table-column>
          <!-- 28质检员 显-->
          <el-table-column
            prop="editorName"
            label="质检员"
            width="120"
            align="center"
          >
          </el-table-column>
          <!-- 29专家 显-->
          <el-table-column
            prop="expertName"
            label="专家"
            width="120"
            align="center"
          >
          </el-table-column>
          <!-- 30 版本号 显 -->
          <el-table-column
            prop="version"
            label="版本号"
            width="100"
            align="center"
          >
          </el-table-column>
        </el-table>
        <!-- 表格展示 2 -->
        <!-- 分页 1 -->
        <div class="fenye">
          <el-pagination
            @current-change="handleCurrentChanges"
            background
            layout="prev, pager, next"
            :total="taskHall.length"
            align="center"
          >
          </el-pagination>
        </div>
        <!-- 分页 2 -->
      </div>
    </el-card>

    <y-footer></y-footer>
    <!-- iframe弹窗 1-->
    <!-- <el-dialog :visible.sync="dialogVisible">
      <div>
        <iframe
          src="http://47.105.75.254/index"
          id="mobsf"
          scrolling="no"
          frameborder="0"
          class="iframe"
        ></iframe>
      </div>
    </el-dialog> -->
    <!-- iframe弹窗 2·-->
    <!-- pdf-iframe 1-->
    <el-dialog :visible.sync="dialogVisible">
      <div>
        <a
          href="../../../static/pdf/web/viewer.html?file=http://localhost:9999/static/pdf/web/111.pdf"
          target="_blank"
          >Open</a
        >
      </div>
    </el-dialog>
    <!-- pdf-iframe 2-->
  </div>
</template>
<script>
import YShelf from '/components/shelf'
import YButton from '/components/YButton'
import YHeader from '/common/header'
import YFooter from '/common/footer'
import $ from 'jquery'
import 'element-ui'
import axios from 'axios'
// import { taskHall } from '/api/index.js'
import { getStore } from '/utils/storage'
export default {
  // 生命周期函数
  created() {
    this.getTaskHall()
    // this.test()
  },
  // name: 'hello',
  data() {
    return {
      dialogVisible: false,
      showPrise: false,
      currentPage: 1, // 初始页
      pagesize: 10, //    每页的数据
      iframeState: false,
      goBackState: false,
      taskHall: [] // 暂存请求到的任务大厅数据
    }
  },
  mounted() {
    // 点击首页跳转页面 1
    $('.index').click(function() {
      $('a', this)[0].click()
    })
    // 点击首页跳转页面 2
    // 通过iframe领取任务 1
    // 通过iframe领取任务 2
  },
  methods: {
    // iframe弹窗
    goBack() {
      this.goBackState = false
      this.iframeState = false
    },
    // 点击领取任务判断是否登录
    getTask(a) {
      console.log(a)
      if (getStore('userId') !== '') {
        alert(1111)
        // eslint-disable-next-line no-debugger
        // debugger
        this.$router.push({
          path: '/taskhall'
        })
      } else {
        alert(222222)
        // eslint-disable-next-line no-debugger
        // debugger
        this.$router.push({
          path: '/login'
        })
      }
      this.showPrise = true
      this.dialogVisible = true
    },
    // 切换页面
    handleCurrentChange(val) {
      this.currentRow = val
    },
    handleCurrentChanges: function(currentPage) {
      this.currentPage = currentPage
      // console.log(this.currentPage) // 点击第几页
    },
    // 任务大厅假数据
    getTaskHall() {
      var url = 'static/data/taskhall.json'
      axios({
        method: 'get',
        url: url
      }).then(res => {
        // console.log(res)
        // console.log(res.data[0].columnTitle)
        // 把获得好的数据 taskhall 给成员
        this.taskHall = res.data
      })
    },
    // 测试任务大厅数据展示
    test() {
      //   let data = {
      //     orderType: 'asc',
      //     search: 'false',
      //     order: 'convert(t.`create_time` USING gbk) COLLATE gbk_chinese_ci',
      //     rows: '10',
      //     page: '1'
      //   }
      //   taskHall(data).then(res => {
      //     console.log(res)
      //   })
    }
  },
  components: {
    YShelf,
    YButton,
    YHeader,
    YFooter
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" >
.iframe {
  position: absolute;
  top: -90px;
  right: 0;
  bottom: 0;
  z-index: 120;
  width: 100%;
  height: 640px;
}
.el-dialog--small {
  width: 90% !important;
}
</style>
