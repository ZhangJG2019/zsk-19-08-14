<template>
  <div class="footer">
    <div class="container">
      <div class="footer">
        <p class="links">
          <a href="http://www.3gbio.com.cn/html/about/intro/">关于公司</a> |
          <a href="http://www.3gbio.com.cn/html/privacy/">隐私条款</a> |
          <a href="http://www.3gbio.com.cn/html/Legal-Notices/">法律声明</a> |
          <a href="http://www.3gbio.com.cn/html/mail/">企业邮箱</a> |
          <a href="https://www.cnzz.com/stat/website.php?web_id=4698979"
            >站长统计</a
          >
          |
        </p>
        <p class="copyright">
          <a href="http://www.miibeian.gov.cn/">湘ICP备18007563号-1</a>
          长沙三济生物科技有限公司 copyright 2012 © 版权所有
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import YButton from '/components/YButton'
export default {
  data() {
    return {}
  },
  methods: {},
  components: {
    YButton
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.footer {
  padding: 15px 0px;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  width: 1220px;
}

.siteinfo {
  height: 100px;
  padding: 50px 0 130px;
  border-bottom: 1px solid #e6e6e6;
  position: relative;
}

.c0 {
  width: 149px;
  line-height: 1;
  float: left;
}

.c1 {
  color: #646464;
  font-size: 12px;
  padding: 0 0 14px;
}

.c2 {
  color: #c3c3c3;
  font-size: 12px;
  padding: 6px 0;
}

.c3 {
  color: #969696;
}

.c4 {
  position: absolute;
  right: 0;
  overflow: hidden;
  line-height: 34px;
}

.tel {
  font-size: 30px;
  line-height: 1;
  color: #646464;
  top: -2px;
  position: relative;
}

.c5 {
  color: #646464;
  right: -70px;
  position: relative;
}

.time {
  margin-top: 5px;
  right: -4px;
  position: relative;
  clear: both;
  width: 241px;
  font-size: 12px;
  line-height: 18px;
  color: #c3c3c3;
  text-align: right;
}

.online {
  clear: both;
  width: 241px;
  font-size: 12px;
  line-height: 18px;
  color: #c3c3c3;
  text-align: right;
}

.button {
  width: 130px;
  height: 34px;
  font-size: 14px;
  color: #5079d9;
  border: 1px solid #dcdcdc;
  margin-top: 8px;
}

.copyright {
  color: #434d55;
  font-size: 12px;
  padding: 20px 0 0;
  display: flex;
  align-items: left;
}

.privacy {
  float: left;
  margin: 0 0 0 12px;
}

.content-c0 {
  color: #5079d9;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #3a5fcd;
  }
}

.content-c1 {
  float: left;
  line-height: 12px;
  padding: 1px 10px 0;
  border-left: 1px solid #ccc;
}

.content-c2 {
  float: left;
  height: 15px;
  line-height: 15px;
  color: #757575;
}

.cop {
  clear: both;
  padding: 10px 0 0;
  height: 15px;
}

.content-c3 {
  margin-right: 20px;
  color: #bdbdbd;
  font-size: 12px;
  height: 12px;
  line-height: 1;
}
</style>
