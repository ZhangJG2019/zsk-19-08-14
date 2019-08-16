/* eslint-disable no-debugger */
<template>
  <div class="login v2">
    <div class="wrapper">
      <div
        class="dialog dialog-shadow"
        style="display: block; margin-top: -362px;"
      >
        <div class="title">
          <h4>使用 三济生物 账号 登录官网</h4>
        </div>
        <div v-if="loginPage" class="content">
          <ul class="common-form">
            <li class="username border-1p">
              <div class="input">
                <input
                  type="text"
                  v-model="ruleForm.userName"
                  placeholder="账号"
                />
              </div>
            </li>
            <li>
              <div class="input">
                <input
                  type="password"
                  v-model="ruleForm.userPwd"
                  @keyup.enter="login"
                  placeholder="密码"
                />
                <!-- <el-input
                  placeholder="请输入密码"
                  type="password"
                  v-model="ruleForm.userPwd"
                  @keyup.enter="login"
                  show-password
                ></el-input> -->
              </div>
            </li>

            <li style="text-align: right" class="pr">
              <el-checkbox class="auto-login" v-model="autoLogin"
                >记住密码</el-checkbox
              >
              <a class="register" @click="home">首页</a>
              <a href="javascript:;" class="register" @click="toRegister"
                >注册 三济生物 账号</a
              >
              <a href="javascript:;" class="register" @click="toForgotpwd"
                >忘记密码 ?</a
              >
            </li>
          </ul>
          <!--登陆-->
          <div style="margin-top: 25px">
            <y-button
              :text="logintxt"
              :classStyle="
                ruleForm.userPwd && ruleForm.userName && logintxt === '登录'
                  ? 'main-btn'
                  : 'disabled-btn'
              "
              @btnClick="login"
              style="margin: 0;width: 100%;height: 48px;font-size: 18px;line-height: 48px"
            ></y-button>
          </div>
          <!--返回-->
          <div>
            <y-button
              text="返回"
              @btnClick="login_back"
              style="marginTop: 10px;marginBottom: 15px;width: 100%;height: 48px;font-size: 18px;line-height: 48px"
            >
            </y-button>
          </div>
          <div class="border"></div>
          <div class="footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import YFooter from '/common/footer'
import YButton from '/components/YButton'
import { userLogin } from '/api/index.js'
import { setStore, getStore, removeStore } from '/utils/storage.js'
import 'element-ui'

export default {
  data() {
    return {
      cart: [],
      loginPage: true,
      ruleForm: {
        userName: 'jockerboby',
        userPwd: '123456',
        errMsg: ''
      },
      registered: {
        userName: '11',
        userPwd: '111',
        errMsg: ''
      },
      autoLogin: false,
      logintxt: '登录',
      statusKey: ''
    }
  },
  computed: {
    count() {
      return this.$store.state.login
    }
  },
  methods: {
    // 提示信息消息框
    open(t, m) {
      this.$notify.info({
        title: t,
        message: m
      })
    },
    messageSuccess() {
      this.$message({
        message: '恭喜您，注册成功！赶紧登录体验吧',
        type: 'success'
      })
    },
    message(m) {
      this.$message.error({
        message: m,
        type: 'error'
      })
    },
    // 获取vuex中登陆的状态
    getRemembered() {
      var judge = getStore('remember')
      if (judge === 'true') {
        this.autoLogin = true
        this.ruleForm.userName = getStore('rusername')
        this.ruleForm.userPwd = getStore('rpassword')
      }
    },
    // 使用vuex保存登录状态
    rememberPass() {
      if (this.autoLogin === true) {
        setStore('remember', 'true')
        setStore('rusername', this.ruleForm.userName)
        setStore('rpassword', this.ruleForm.userPwd)
      } else {
        setStore('remember', 'false')
        removeStore('rusername')
        removeStore('rpassword')
      }
    },
    // 跳转到登录页
    toRegister() {
      this.$router.push({
        path: '/register'
      })
    },
    // 跳转到忘记密码页
    toForgotpwd() {
      window.location.href = '/#/forgetpwd'
      // this.$router.push({
      //   path: '/pwd'
      // })
    },
    // 跳转到首页
    home() {
      window.location.href = '/'
    },
    // 登录返回按钮
    login_back() {
      this.$router.go(-1)
    },
    // 登录
    login() {
      this.logintxt = '登录中...'
      this.rememberPass()
      if (!this.ruleForm.userName || !this.ruleForm.userPwd) {
        // this.ruleForm.errMsg = '账号或者密码不能为空!'
        this.message('账号或者密码不能为空!')
        return false
      }
      let data = new FormData()
      data.append('username', this.ruleForm.userName)
      data.append('password', this.ruleForm.userPwd)
      userLogin(data)
        .then(res => {
          console.log(res)
          console.log(res.data)
          console.log(res.data.user)
          console.log(res.data.user.activeId)
          if (res.data !== null && res.data.user !== null) {
            setStore('token', res.data.token)
            setStore('userId', res.data.user.id)
            setStore('activeId', res.data.user.activeId)
            this.$message({
              message: res.message,
              type: 'success'
            })
            this.logintxt = '登录'
            return this.$router.push({
              path: '/'
            })
          } else {
            this.logintxt = '登录'
            return this.$message.error(res.message)
          }
        })
        .catch(res => {
          // eslint-disable-next-line no-debugger
          if (res.response === null) {
            this.$message.error('用户不存在')
            this.logintxt = '登录'
            return
          } else {
            this.$message.error('用户或密码错误')
            this.logintxt = '登录'
            return
          }
        })
    }
  },
  mounted() {
    this.getRemembered()
    // this.login_addCart()
    // this.init_geetest()
    // this.open('登录提示', '测试体验账号密码：admin | 123456')
  },
  components: {
    YFooter,
    YButton
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
* {
  box-sizing: content-box;
}

.login {
  overflow-x: hidden;
  overflow-y: hidden;
  .input {
    height: 50px;
    display: flex;
    align-items: center;
    input {
      font-size: 16px;
      width: 100%;
      height: 100%;
      padding: 10px 15px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 6px;
    }
  }
  .wrapper {
    background: url(/static/images/bg_9b9dcb65ff.png) repeat;
    background-size: 100px;
    min-height: 800px;
    min-width: 630px;
  }
}

.v2 .dialog {
  width: 450px;
  border: 1px solid #dadada;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  margin-left: -225px;
  position: absolute;
  .title {
    background: linear-gradient(#fff, #f5f5f5);
    height: auto;
    overflow: visible;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    position: relative;
    // background-image: url(/static/images/smartisan_4ada7fecea.png);
    background-image: url(/static/images/smartisan_4ada7fecea.jpg);

    background-size: 140px;
    background-position: top center;
    background-repeat: no-repeat;
    height: 92px;
    margin: 23px 0 50px;
    padding: 75px 0 0;
    box-shadow: none;
    h4 {
      padding: 0;
      text-align: center;
      color: #666;
      border-bottom: 1px solid #dcdcdc;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      font-weight: 700;
      position: absolute;
      bottom: 0;
      width: 100%;
      text-align: center;
      margin: 0;
      padding: 0;
      border-bottom: 0;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      line-height: 1em;
      height: auto;
      color: #333;
      font-weight: 400;
    }
  }
  .content {
    padding: 0 40px 22px;
    height: auto;
    .common-form {
      li {
        clear: both;
        margin-bottom: 15px;
        position: relative;
      }
    }
  }
}

.dialog-shadow,
.v2 .bbs .dialog-shadow,
.v2 .dialog-shadow {
  -webkit-box-shadow: 0 9px 30px -6px rgba(0, 0, 0, 0.2),
    0 18px 20px -10px rgba(0, 0, 0, 0.04), 0 18px 20px -10px rgba(0, 0, 0, 0.04),
    0 10px 20px -10px rgba(0, 0, 0, 0.04);
  -moz-box-shadow: 0 9px 30px -6px rgba(0, 0, 0, 0.2),
    0 18px 20px -10px rgba(0, 0, 0, 0.04), 0 18px 20px -10px rgba(0, 0, 0, 0.04),
    0 10px 20px -10px rgba(0, 0, 0, 0.04);
  box-shadow: 0 9px 30px -6px rgba(0, 0, 0, 0.2),
    0 18px 20px -10px rgba(0, 0, 0, 0.04), 0 18px 20px -10px rgba(0, 0, 0, 0.04),
    0 10px 20px -10px rgba(0, 0, 0, 0.04);
}

@media screen and (min-width: 737px),
  screen and (-webkit-max-device-pixel-ratio: 1.9) and (max-width: 736px) and (min-device-width: 737px) {
  .wrapper {
    background: url(/static/images/con-bg_04f25dbf8e.jpg) repeat-x;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .dialog {
    background: url(/static/images/dialog-gray-bg.png) #fff bottom repeat-x;
    border-radius: 12px;
    display: none;
    margin: -163px 0 0 -218px;
    width: 436px;
    position: fixed;
    left: 50%;
    top: 50%;
  }
  .dialog .title h4 {
    border-bottom: #d1d1d1 solid 1px;
    box-shadow: 0 2px 6px #d1d1d1;
    color: #666;
    font-size: 20px;
    height: 61px;
    line-height: 61px;
    padding: 0 0 0 35px;
  }
  .common-form li {
    clear: both;
    margin-bottom: 15px;
    position: relative;
  }
  .auto-login {
    position: absolute;
    top: 0px;
    left: 2px;
    color: #999;
  }
  .register {
    padding: 1px 10px 0;
    border-right: 1px solid #ccc;
  }
  .border {
    margin-top: 10px;
    border-bottom: 1px solid #ccc;
  }
  .other {
    margin: 20px 5px 0 0;
    width: auto;
    color: #bbb;
    font-size: 12px;
    cursor: default;
    color: #999;
  }
  .footer {
    display: flex;
    flex-direction: row;
  }
  .agree {
    margin-bottom: 30px;
    color: #999;
  }
}

.registered {
  h4 {
    padding: 0;
    text-align: center;
    color: #666;
    border-bottom: 1px solid #dcdcdc;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    font-weight: 700;
    font-size: 20px;
    height: 60px;
    line-height: 60px;
  }
}

#wait {
  text-align: left;
  color: #999;
  margin: 0;
}
</style>
