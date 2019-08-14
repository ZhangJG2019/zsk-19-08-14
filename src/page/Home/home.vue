<template>
  <div class="home">
    <div class="activity-panel">
      <ul class="box">
        <!-- 左侧内容区域  start-->
        <li class="side-left left" style="margin-right:10px;">
          <div class="side_left fl">
            <!-- 最新事件 -->
            <div class="w326 news mb15" style="width:326px;">
              <h2>
                <a @click="See(columnLinkUrl)"><strong>最新事件</strong></a>
              </h2>
              <ul class="left_ul left_content">
                <li v-for="(item, key) in topNews" :key="key">
                  <span>{{ date | formatDate }}</span>
                  <a
                    @click="See(item.articleLinkUrl)"
                    v-text="item.articleTitle"
                  >
                  </a>
                </li>
              </ul>
            </div>
            <!-- 最新研究内容 -->
            <div class="w326 news" style="width:326px;margin-top:18px">
              <h2>
                <a @click="See(columnLinkUrl)"><strong>最新研究内容</strong></a>
              </h2>
              <ul id="newlog" class="left_content">
                <li v-for="(item, key) in newContent" :key="key">
                  <span v-text="item.id" class="new_content "></span>
                  <a
                    @click="See(item.articleLinkUrl)"
                    v-text="item.articleTitle"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <!-- 左侧内容区域  end-->
        <!-- 中间内容区域 start -->
        <li style="margin-right:10px;background-color:#fff;">
          <div class="slide_center fl ml20">
            <div class="w550 news bgc_white">
              <h2>
                <span href="####" style="cursor: pointer;"
                  ><strong>分类标签</strong></span
                >
              </h2>
              <ul>
                <li class="center_content" style="background-color:#fe6181;">
                  <!-- <li class="center_content"> -->
                  <img src="../../../static/images/jiyin.png" alt="" />
                  <a href="" class="title">基因</a>
                  <!-- <a class="num">123</a> -->
                  <a class="num" v-text="genenum">123</a>
                </li>
                <!-- <li class="center_content"> -->
                <li class="center_content" style="background-color:#5fc46d;">
                  <img src="../../../static/images/xianguanyaowu.png" alt="" />
                  <a href="" class="title">药物</a>
                  <!-- <a class="num">456</a> -->
                  <a class="num" v-text="drugnum">456</a>
                </li>
                <li class="center_content" style="background-color:#6661d5;">
                  <!-- <li class="center_content"> -->
                  <img src="../../../static/images/yaowujiyindui.png" alt="" />
                  <a href="" class="title">药物基因对</a>
                  <!-- <a class="num">789</a> -->
                  <a class="num" v-text="drugGenePairnum">789</a>
                </li>
                <li class="center_content" style="background-color:#01c4c3;">
                  <!-- <li class="center_content"> -->
                  <img src="../../../static/images/quanweizhinan.png" alt="" />
                  <a href="" class="title">权威指南</a>
                  <!-- <a class="num">987</a> -->
                  <a class="num" v-text="authoritynum">987</a>
                </li>
                <li class="center_content" style="background-color:#62b6e5;">
                  <!-- <li class="center_content"> -->
                  <img src="../../../static/images/yaowubiaoqian.png" alt="" />
                  <a href="" class="title">药物标签</a>
                  <!-- <a class="num">654</a> -->
                  <a class="num" v-text="drugLabelsnum">654</a>
                </li>
                <li class="center_content" style="background-color:#ff6765;">
                  <!-- <li class="center_content"> -->
                  <img src="../../../static/images/linchuangzhushi.png" />
                  <a href="" class="title">临床注释</a>
                  <!-- <a class="num">321</a> -->
                  <a class="num" v-text="clinicalNotesnum">321</a>
                </li>
                <li class="center_content" style="background-color:#7dc691;">
                  <!-- <li class="center_content"> -->
                  <img
                    src="../../../static/images/linchuangshiyan.png"
                    style="width:100px;height:80px"
                  />
                  <a href="" class="title">临床实验</a>
                  <!-- <a class="num">1314</a> -->
                  <a class="num" v-text="clinicalTrialsnum">1314</a>
                </li>
                <li class="center_content" style="background-color:#feab1c;">
                  <!-- <li class="center_content"> -->
                  <img src="../../../static/images/zhuanli.png" alt="" />
                  <a href="" class="title">专利</a>
                  <!-- <a class="num">521</a> -->
                  <a class="num" v-text="patentnum">521</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <!-- 中间内容区域 end-->
        <!-- 右侧内容区域 start-->
        <li class="right" style="background-color:#fff;">
          <div class="side_left ml18">
            <!-- 公告 -->
            <div class="w286 news">
              <h2>
                <a @click="See(columnLinkUrl)"><strong>公告</strong></a>
              </h2>
              <ul class="right_content left_content">
                <li v-for="(item, key) in notice" :key="key">
                  <span v-text="item.id"></span>
                  <a
                    @click="See(item.articleLinkUrl)"
                    v-text="item.articleTitle"
                  ></a>
                </li>
              </ul>
            </div>
            <!-- 联系 -->
            <div class="w286 news tel h535  mt20">
              <h2 class="w284">
                <a href="####"><strong>联系</strong></a>
              </h2>
              <div class="phone contents">
                <!-- <i class="iconfont icon-dianhua-1"></i> -->
                <a href="####" class="phone_ul"></a>
              </div>
              <div class="email contents">
                <!-- <i class="iconfont icon-huaban-"></i> -->
                <a href="####" class="email_ul"></a>
              </div>
            </div>
            <!-- 我要留言 -->
            <div class="w286 news Message">
              <h2 class="w284">
                <a href="####"><strong>我要留言</strong></a>
              </h2>
              <div class="right_bottom">
                <el-form
                  ref="form"
                  :model="sizeForm"
                  label-width="80px"
                  size="large"
                  label-position="top"
                >
                  <el-form-item
                    label="昵称:"
                    prop="name"
                    style="font-size:18px"
                  >
                    <el-input
                      v-model="sizeForm.name"
                      placeholder="请输入您的昵称："
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="留言内容:" prop="textarea">
                    <el-input
                      v-model="sizeForm.textarea"
                      placeholder="请输入留言内容"
                      type="textarea"
                      :rows="2"
                    >
                    </el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button size=" small" type="primary">提交</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </li>
        <!-- 右侧内容区域 end-->
      </ul>
      <!-- 业务划分区域 start -->
      <ul class=" guide_ul">
        <li style="background-color:#35be9b;">
          <!-- <li> -->
          <router-link to="####">
            <i class="iconfont icon-yonghuguanli"></i>
            <p>知识库用户</p>
          </router-link>
        </li>
        <li style="background-color:#8bc255;">
          <!-- <li> -->
          <router-link to="####">
            <i class="iconfont icon-xiazai"></i>
            <p>下载</p>
          </router-link>
        </li>
        <li style="background-color:#56bde3;">
          <!-- <li> -->
          <router-link to="####">
            <i class="iconfont icon-bangzhu"></i>
            <p>帮助</p>
          </router-link>
        </li>
        <!-- <li> -->
        <li style="background-color:#f78228;">
          <router-link to="/taskhall">
            <i class="iconfont icon-job"></i>
            <p>任务大厅</p>
          </router-link>
          <!-- <a href="http://47.105.75.254/index" target="_blank"> -->
          <!-- <a href="http://47.105.75.254/index"> -->
          <!-- <a href="http://192.168.1.162/index" target="_blank">
            <i class="iconfont icon-job"></i>
            <p>任务大厅</p> 
          </a>-->
        </li>
      </ul>
      <!-- 业务划分区域 end -->
    </div>
    <!-- 报错提示页 1-->
    <div class="no-info" v-if="error">
      <div class="no-data">
        <img src="/static/images/g" />
        <br />
        抱歉！出错了...
      </div>
    </div>
    <!-- 报错提示页 2-->
  </div>
</template>
<script>
import YShelf from '/components/shelf'
import 'element-ui'
import 'jquery'
import axios from 'axios'
// 时间补位函数 1
var padDate = function(value) {
  return value < 10 ? '0' + value : value
}
// 事件补位函数 2
// 格式化时间函数 1
var formatDate = function(value) {
  // 这里的value就是需要过滤的数据
  var date = new Date(value)
  var year = date.getFullYear()
  var month = padDate(date.getMonth() + 1)
  var day = padDate(date.getDate())
  return year + '-' + month + '-' + day
}
// 格式化时间函数 2
export default {
  // 生命周期函数
  created() {
    this.getTopNews()
    this.getNewContent()
    this.getNotice()
    this.getNum()
  },
  data() {
    return {
      // 中间八个分类 1
      genenum: '',
      drugnum: '',
      drugGenePairnum: '',
      authoritynum: '',
      drugLabelsnum: '',
      clinicalNotesnum: '',
      clinicalTrialsnum: '',
      patentnum: '',
      // 中间八个分类 2
      total: '',
      articleTitle: '', // 小标题
      articleLinkUrl: '', // 小标题链接=具体内容页面
      columnTitle: '', // 分组大标题
      columnLinkUrl: '', // 分组大标题链接【最新事件，最新研究内容，公告】
      date: new Date(),
      error: false,
      home: [],
      loading: true,
      notify: '1',
      dialogVisible: false,
      timer: '',
      sizeForm: {
        textarea: '',
        name: ''
      },
      // 接收最新事件列表信息
      topNews: [],
      // 接收最新研究内容列表信息
      newContent: [],
      // 接收公告列表信息
      notice: []
    }
  },
  methods: {
    // 获取各分类标签数量
    getNum() {
      var url = 'static/data/home_center.json'
      axios({
        method: 'get',
        url: url
      }).then(res => {
        // console.log(res)
        // console.log(res.data[0].genenum)
        this.genenum = res.data[0].genenum
        this.drugnum = res.data[0].drugnum
        this.drugGenePairnum = res.data[0].drugGenePairnum
        this.authoritynum = res.data[0].authoritynum
        this.drugLabelsnum = res.data[0].drugLabelsnum
        this.clinicalNotesnum = res.data[0].clinicalNotesnum
        this.clinicalTrialsnum = res.data[0].clinicalTrialsnum
        this.patentnum = res.data[0].patentnum
      })
    },
    // 最新事件
    getTopNews() {
      // var topNew = '最新事件'
      // var url = '/apis/cms/api/getColumnNewList?title=' + topNew
      var url = 'static/data/home_topNews.json'
      axios({
        method: 'get',
        url: url
      }).then(res => {
        // console.log(res)
        // console.log(res.data[0].columnTitle)
        // 把获得好的最新事件 赋予topNews 给成员
        this.topNews = res.data
        this.columnLinkUrl = res.data[0].columnLinkUrl
      })
    },
    // 最新研究内容
    getNewContent() {
      // var newContent = '最新研究内容'
      // var url = '/apis/cms/api/getColumnNewList?title=' + newContent
      var url = 'static/data/home_newContent.json'
      axios({
        method: 'get',
        url: url
      }).then(res => {
        // 把获得好的最新事件 赋予 给NewContent成员
        this.newContent = res.data
        this.columnLinkUrl = res.data[0].columnLinkUrl
      })
    },
    // 公告
    getNotice() {
      // var gonggao = '公告'
      // var url = '/apis/cms/api/getColumnNewList?title=' + gonggao
      var url = 'static/data/home_notice.json'
      axios({
        method: 'get',
        url: url
      }).then(res => {
        // 把获得好的最新事件 赋予 给notice成员
        this.notice = res.data
        this.columnLinkUrl = res.data[0].columnLinkUrl
      })
    },
    // cms页面跳转
    See(e) {
      window.location = e
    }
  },
  mounted() {
    // 背景添加函数
    function bgc(color, tagName) {
      $(tagName).each(function(i, e) {
        $(e).css('background-color', color[i])
      })
    }
    // 最新研究内容
    // bgc(['orange', 'orange', 'orange'], '.news ul .new_content')
    // 业务划分区域
    bgc(['#35be9b', '#8bc255', '#56bde3', '#f78228'], '.guide_ul li')
    // 中间内容区域
    bgc(
      [
        '#fe6181',
        '#5fc46d',
        '#6661d5',
        '#01c4c3',
        '#62b6e5',
        '#ff6765',
        '#7dc691',
        '#feab1c'
      ],
      ' .slide_center ul li'
    )
    // 业务划分区域页面跳转 1
    $('.guide_ul li').click(function() {
      $('a', this)[0].click()
    })
  },
  components: {
    YShelf
  },
  filters: {
    formatDate: formatDate // 最新事件的时间处理函数
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
// 自己加的
// .notice_num {//具体数据在展开
//   float: right;
//   padding-right: 60px;
// }
.el-textarea .el-textarea__inner {
  // 然后找到对应的类名，在这里将拉伸去掉即可
  resize: none;
}

.slide_center .center_content img {
  width: 80px;
  height: 80px;
}
#box {
  display: flex;
}
.left {
  width: 326px;
}
.right {
  width: 286px;
}
#center {
  background: pink;
  /*flex:1*/
  /*等价于*/
  flex-grow: 1;
  text-align: center;
}

.news h2 {
  height: 56px;
  line-height: 56px;
  background: #ffffff;
  color: rgb(66, 126, 236);
  border: 1px solid #ddd;
  border-bottom: 3px solid #cdcdcd;
  border-radius: 3px 3px 0 0;
  -webkit-border-radius: 3px 3px 0 0;
}
.news h2 a {
  color: rgb(66, 126, 236);
  box-sizing: border-box;
  display: block;
  text-decoration: none;
}
.news h2 strong {
  font: bold 16px 'microsoft yahei';
  height: 56px;
  padding: 0px 24px;
  box-sizing: border-box;
}
.news h2 strong:hover {
  border-bottom: 3px solid #417eec;
  padding-bottom: 15px;
}
.left_content {
  border: 1px solid #ddd;
  border-top: 0;
  padding-top: 10px;
  box-sizing: border-box;
  background-color: #fff;
}
.news .left_ul {
  height: 334px;
  overflow: hidden;
}
.news #newlog {
  height: 386px;
  overflow: hidden;
  padding-top: 15px;
  box-sizing: border-box;
}
.news ul li {
  width: 263px;
  height: 40px;
  line-height: 40px;
  padding: 0 0 0 20px;
  float: left;
  overflow: hidden;
}
.news ul li a {
  color: #666;
  font-weight: 700;
}
.news ul .new_content:nth-child(1),
.news ul .new_content:nth-child(2),
.news ul .new_content:nth-child(3) {
  width: 30px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  padding-left: 12px;
  box-sizing: border-box;
  margin-right: 5px;
}
#newlog li:nth-child(1) span,
#newlog li:nth-child(2) span,
#newlog li:nth-child(3) span {
  background-color: orange;
}
.side_left ul li {
  width: 300px;
  box-sizing: border-box;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.side_left ul span {
  margin-right: 25px;
  width: 10px;
  height: 10px;
}

.slide_center ul {
  height: 791px;
  padding-left: 15px;
  box-sizing: border-box;
}
.slide_center ul li {
  width: 268px;
  height: 174px;
  margin: 20px 0 0 0;
  box-sizing: border-box;
  position: relative;
}
.slide_center ul li:nth-of-type(even) {
  margin-left: 20px !important;
}
.slide_center ul .title {
  position: absolute;
  bottom: 5px;
  left: 15px;
  font-size: 17px;
  color: white;
}
.slide_center ul .num {
  position: absolute;
  bottom: 5px;
  right: 20px;
  font-size: 30px;
  color: white;
}

.side_left .news .right_content {
  height: 217px;
  background-color: #fafafa;
}
.side_left .right_content li {
  width: 260px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.side_left .new .right_phone {
  height: 508px;
}
.side_left .contents {
  width: 266px;
  height: 72px;
  margin: 20px 10px 0 10px;
}
.side_left .phone {
  background-color: #04c891;
}
.side_left .email {
  background-color: #39b8e8;
}
.side_left .email div,
.side_left .phone div {
  margin-left: 15px;
}
.phone ul li,
.email ul li {
  width: 60px;
  height: 72px;
  float: left;
}
.phone ul li:nth-child(2),
.email ul li:nth-child(2) {
  width: 100px;
  height: 72px;
  line-height: 72px;
  float: left;
  font-size: 20px;
  color: #fff;
}
.phone ul li i,
.email ul li i {
  font-size: 50px;
  line-height: 72px;
  color: #fff;
}
.phone:hover {
  background-image: url(../../../static/images/phone.png);
}
.phone {
  background-image: url(../../../static/images/phone1.png);
}
.email:hover {
  background-image: url(../../../static/images/email.png);
}
.email {
  background-image: url(../../../static/images/email1.png);
}
.phone,
.email {
  cursor: pointer;
}
.tel {
  margin-top: 20px;
  background-color: #fff;
  border-left: 1px solid #ccc;
  // padding-bottom: 20px;
}
.Message {
  background-color: #fff;
  margin-top: 20px;
}
.Message h2 {
  line-height: 56px;
  font-size: 15px;
  color: black;
  background-color: #f1f1f1;
}
.el-form--label-top .el-form-item__label {
  font-size: 16px !important;
  padding-left: 10px;
}
.el-form-item {
  margin: 10px 0 10px 0;
}
// .el-form-item {
//   margin-bottom: 0;
// }
.left_form {
  margin-left: 10px;
}
.Message .left_form label {
  font-size: 14px;
  margin: 15px 0 5px 0 !important;
  display: inline-block;
}
.left_form input {
  height: 26px;
  width: 238px;
  // background-color: #f8f8f8;
}
.left_form .auth_code {
  vertical-align: middle;
  width: 50px;
  float: left;
}
.left_form a {
  vertical-align: middle;
  width: 95px;
  height: 30px;
  background-color: #17c2ce;
  display: inline-block;
  line-height: 30px;
  padding-left: 15px;
  box-sizing: border-box;
}

/* 底部业务划分区域 */
.guide {
  height: 120px;
}
.guide_ul {
  float: left;
  margin-left: 10px;
}
.guide_ul li {
  float: left;
  width: 285px;
  height: 76px;
  margin: 20px 0 0 20px;
  cursor: pointer;
}
.guide_ul li:first-child {
  margin-left: 0;
}
.guide_ul li i {
  font-size: 45px;
  color: white;
  margin: 15px 0 0 15px;
  float: left;
}
.guide_ul li p {
  margin-left: 16px;
  height: 76px;
  line-height: 76px;
  /* display: inline-block; */
  font-size: 20px;
  color: #fff;
  float: left;
}

/* .partners{height: 94px;} */

/* 底部轮播图 */
* {
  margin: 0px;
  padding: 0px;
}
#box {
  width: 1200px;
  height: 65px;
  overflow: hidden;
  position: relative;
  background: #f2f2f2;
}
#box ul {
  position: absolute;
  left: 0px;
  right: 0px;
}
#box ul li {
  float: left;
  list-style: none;
  width: 118px;
  height: 58px;
  padding: 10px 0;
  box-sizing: border-box;
}

// 自己加的
.center_content {
  position: relative;
}

.center_content img {
  width: 80px;
  height: 80px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.guide {
  width: 1200px;
}

// .right_bottom {
//   // padding: 10px !important;
// }

.home {
  display: flex;
  flex-direction: column;
}

.no-info {
  padding: 100px 0;
  text-align: center;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  .no-data {
    align-self: center;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.page {
  position: absolute;
  width: 100%;
  top: 470px;
  z-index: 30;
  .dots {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .dot-active {
      display: inline-block;
      width: 15px;
      height: 15px;
      background-color: whitesmoke;
      border-radius: 8px;
      margin-right: 10px;
      cursor: pointer;
    }
    .dot {
      opacity: 0.2;
    }
  }
}

.activity-panel {
  width: 1220px;
  margin: 0 auto;
  .box {
    overflow: hidden;
    position: relative;
    z-index: 0;
    margin-top: 25px;
    box-sizing: border-box;
    // border: 1px solid rgba(0, 0, 0, 0.14);
    border-radius: 8px;
    background: #ededed;
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
  }
  .content {
    float: left;
    position: relative;
    box-sizing: border-box;
    width: 25%;
    height: 200px;
    text-align: center;
  }
  .content ::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    box-sizing: border-box;
    border-left: 1px solid #f2f2f2;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    content: '';
    pointer-events: none;
  }
  .i {
    width: 305px;
    height: 200px;
  }
  .cover-link {
    cursor: pointer;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 4;
    background: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEHAAEALAAAAAABAAEAAAICTAEAOw==)
      repeat;
  }
  a {
    color: #5079d9;
    cursor: pointer;
    transition: all 0.15s ease-out;
    text-decoration: none;
  }
  a:hover {
    // box-shadow: inset 0 0 38px rgba(0, 0, 0, 0.08);
    transition: all 0.15s ease;
  }
}

.banner,
.banner span,
.banner div {
  font-family: 'Microsoft YaHei';
  transition: all 0.3s;
  transition-timing-function: linear;
}

.banner {
  cursor: pointer;
  perspective: 3000px;
  position: relative;
  z-index: 19;
  margin: 0 auto;
  width: 1220px;
}

.bg {
  position: relative;
  width: 1220px;
  height: 500px;
  margin: 20px auto;
  background-size: 100% 100%;
  border-radius: 10px;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  transform: rotateY(0deg) rotateX(0deg);
  & div {
    position: relative;
    height: 100%;
    width: 100%;
  }
}

.img1 {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  border-radius: 10px;
}

.img2 {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 5px;
  left: 0;
  background-size: 95% 100%;
  border-radius: 10px;
}

.img3 {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  border-radius: 10px;
}

.a {
  z-index: 20;
  transform: translateZ(40px);
}

.b {
  z-index: 20;
  transform: translateZ(30px);
}

.c {
  transform: translateZ(0px);
}

.sk_item {
  width: 170px;
  height: 225px;
  padding: 0 14px 0 15px;
  > div {
    width: 100%;
  }
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    &:hover {
      transform: translateY(-5px);
    }
  }
  img {
    width: 130px;
    height: 130px;
    margin: 17px 0;
  }
  .sk_item_name {
    color: #999;
    display: block;
    max-width: 100%;
    _width: 100%;
    overflow: hidden;
    font-size: 12px;
    text-align: left;
    height: 32px;
    line-height: 16px;
    word-wrap: break-word;
    word-break: break-all;
  }
  .sk_item_price {
    padding: 3px 0;
    height: 25px;
  }
  .price_new {
    font-size: 18px;
    font-weight: 700;
    margin-right: 8px;
    color: #f10214;
  }
  .price_origin {
    color: #999;
    font-size: 12px;
  }
}

.box {
  overflow: hidden;
  position: relative;
  z-index: 0;
  margin-top: 29px;
  box-sizing: border-box;
  // border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
}

ul.box {
  display: flex;
  li {
    // flex: 1;
    img {
      display: block;
      width: 305px;
      height: 200px;
    }
  }
}

.mt30 {
  margin-top: 30px;
}

.hot {
  display: flex;
  > div {
    flex: 1;
    width: 25%;
  }
}

.floors {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .imgbanner {
    width: 50%;
    height: 430px;
    .cover-link {
      cursor: pointer;
      display: block;
      position: absolute;
      top: 60px;
      left: 0;
      width: 50%;
      height: 430px;
      z-index: 4;
      background: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEHAAEALAAAAAABAAEAAAICTAEAOw==)
        repeat;
    }
    .cover-link:hover {
      box-shadow: inset 0 0 38px rgba(0, 0, 0, 0.08);
      transition: all 0.15s ease;
    }
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
