/* eslint-disable no-debugger */
<template>
  <!-- <div class="checkout"> -->
  <div class="taskhall">
    <y-header> <div slot="nav"></div></y-header>
    <div class="activity-panel">
      <ul class="box">
        <!-- 左侧内容区域  start-->
        <li style="margin-right:10px;background-color:#fff;">
          <div class="main_content">
            <div class="task_classify clearfix">
              <ul class="task_class " style="border-bottom:1px solid #ccc">
                <strong class="fl">任务类型 :</strong>
                <li class="fl actived"><strong>全部</strong></li>
                <li class="fl"><strong>词条</strong></li>
                <li class="fl"><strong>药物</strong></li>
                <li class="fl"><strong>疾病</strong></li>
                <li class="fl"><strong>基因</strong></li>
                <li class="fl"><strong>位点</strong></li>
              </ul>
              <ul class="task_power">
                <span class="fl">任务权限 :</span>
                <li class="fl actived">全部</li>
                <li class="fl">完全开放</li>
                <li class="fl">勋章开放</li>
              </ul>
            </div>
            <!-- 左侧具体内容区 1-->
            <div class="slide_center news">
              <ul>
                <!-- 任务搜索框 1-->
                <li>
                  <el-input
                    placeholder="请输入内容"
                    v-model="input3"
                    class="input-with-select"
                  >
                    <el-select
                      v-model="select"
                      slot="prepend"
                      placeholder="请选择"
                    >
                      <el-option label="餐厅名" value="1"></el-option>
                      <el-option label="订单号" value="2"></el-option>
                      <el-option label="用户电话" value="3"></el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search"></el-button>
                  </el-input>
                </li>
                <!-- 任务搜索框 2-->
                <li
                  class="center_content"
                  style="background-color:#fe6181;"
                  @click="gene"
                >
                  <img src="../../../static/images/jiyin.png" alt="" />
                  <a href="" class="title">基因</a>
                  <a class="num" v-text="genenum">123</a>
                </li>
                <li
                  class="center_content"
                  style="background-color:#5fc46d;"
                  @click="gene"
                >
                  <img src="../../../static/images/xianguanyaowu.png" alt="" />
                  <a href="" class="title">药物</a>
                  <!-- <a class="num">456</a> -->
                  <a class="num" v-text="drugnum">456</a>
                </li>
                <li
                  class="center_content"
                  style="background-color:#6661d5;"
                  @click="gene"
                >
                  <!-- <li class="center_content"> -->
                  <img src="../../../static/images/yaowujiyindui.png" alt="" />
                  <a href="" class="title">药物基因对</a>
                  <!-- <a class="num">789</a> -->
                  <a class="num" v-text="drugGenePairnum">789</a>
                </li>
                <li
                  class="center_content"
                  style="background-color:#01c4c3;"
                  @click="gene"
                >
                  <!-- <li class="center_content"> -->
                  <img src="../../../static/images/quanweizhinan.png" alt="" />
                  <a href="" class="title">权威指南</a>
                  <!-- <a class="num">987</a> -->
                  <a class="num" v-text="authoritynum">987</a>
                </li>
                <li
                  class="center_content"
                  style="background-color:#62b6e5;"
                  @click="gene"
                >
                  <!-- <li class="center_content"> -->
                  <img src="../../../static/images/yaowubiaoqian.png" alt="" />
                  <a href="" class="title">药物标签</a>
                  <!-- <a class="num">654</a> -->
                  <a class="num" v-text="drugLabelsnum">654</a>
                </li>
              </ul>
            </div>
            <!-- 左侧具体内容区 1-->
          </div>
        </li>
        <!-- 左侧内容区域  end-->
        <!-- 右侧内容区域 start-->
        <li class="side-left left" style="margin-right:10px;">
          <div class="side_left ">
            <!-- 帮助指南 -->
            <div class=" news " style="width:326px;">
              <h2>
                <a @click="See(columnLinkUrl)"><strong>帮助指南</strong></a>
              </h2>
              <ul class="left_ul left_content">
                <li v-for="(item, key) in topNews" :key="key">
                  <span v-text="item.id"></span>
                  <a
                    @click="See(item.articleLinkUrl)"
                    v-text="item.articleTitle"
                  >
                  </a>
                </li>
              </ul>
            </div>
            <!-- 常见问题 -->
            <div class=" news" style="width:326px;margin-top:18px">
              <h2>
                <a @click="See(columnLinkUrl)"><strong>常见问题</strong></a>
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
        <!-- 右侧内容区域 end-->
      </ul>
    </div>
    <y-footer></y-footer>
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
export default {
  // 生命周期函数
  created() {
    this.getHelp()
    this.getProblems()
    this.getNum()
  },
  // name: 'hello',
  data() {
    return {
      input3: '',
      select: '',
      // 中间八个分类 1
      genenum: '',
      drugnum: '',
      drugGenePairnum: '',
      authoritynum: '',
      drugLabelsnum: '',

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
      // 接收最新事件列表信息
      topNews: [],
      // 接收最新研究内容列表信息
      newContent: []
    }
  },
  mounted() {
    // 点击首页跳转页面 1
    $('.index').click(function() {
      $('a', this)[0].click()
    })
    // 点击首页跳转页面 2
  },
  methods: {
    // 基因
    gene() {
      this.$router.push({
        path: '/gene'
      })
    },
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
      })
    },
    // 帮助指南
    getHelp() {
      // var topNew = '最新事件'
      // var url = '/apis/cms/api/getColumnNewList?title=' + topNew
      var url = 'static/data/home_gethelp.json'
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
    // 常见问题
    getProblems() {
      // var newContent = '常见问题'
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
    // cms页面跳转
    See(e) {
      window.location = e
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
<style lang="scss" rel="stylesheet/scss" scoped>
//中间顶部筛选条件 1
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.task_classify {
  width: 100%;
  background-color: #fafafa;
  height: 100px;
  padding: 15px;
  box-sizing: border-box;
}
.task_classify .task_power {
  margin-top: 10px;
}
.task_classify ul {
  height: 36px;
  line-height: 20px;
}
.task_classify ul li {
  margin: 0 10px;
  padding: 0 20px;
  cursor: pointer;
}
.actived {
  border: 2px solid #13cb6a;
}
.task_classify ul li.fl {
  float: left;
}
//中间顶部筛选条件 2
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
  font: bold 20px 'microsoft yahei';
  height: 56px;
  padding: 0px 24px;
  box-sizing: border-box;
}
.news h2 strong:hover {
  border-bottom: 3px solid #417eec;
  padding-bottom: 14px;
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
  margin-right: 15px;
  width: 10px;
  height: 10px;
}
.slide_center ul {
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
}
.slide_center ul li.center_content {
  width: 870px;
  height: 120px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
}
.slide_center ul li a.title {
  position: absolute;
  bottom: 5px;
  left: 15px;
  font-size: 24px;
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
.guide {
  width: 1200px;
}
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
    margin-top: 15px;
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
// 清除浮动
.clearfix {
  zoom: 1;
} /*==for IE6/7 Maxthon2==*/
.clearfix :after {
  clear: both;
  content: '.';
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
} /*==for FF/chrome/opera/IE8==*/
</style>
