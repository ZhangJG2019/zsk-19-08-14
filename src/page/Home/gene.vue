/* eslint-disable no-debugger */
<template>
  <div class="taskhall">
    <y-header>
      <div slot="nav"></div>
    </y-header>
    <el-card class="box-card" style="width:76.5rem; margin:0 auto;">
      <div class="tablecontent">
        <div class="content_title">
          <el-row>
            <el-col :span="24"
              ><p
                style="font-size: 3.5625rem;font-family:microsoft yahei;margin-bottom:1.25rem;"
              >
                基因
              </p>
              <p style="text-indent:2em;font-size:1.1rem;">
                基因（遗传因子）是产生一条多肽链或功能RNA所需的全部核苷酸序列。基因支持着生命的基本构造和性能。储存着生命的种族、血型、孕育、生长、凋亡等过程的全部信息。环境和遗传的互相依赖，演绎着生命的繁衍、细胞分裂和蛋白质合成等重要生理过程。生物体的生、长、衰、病、老、死等一切生命现象都与基因有关。它也是决定生命健康的内在因素。因此，基因具有双重属性：物质性（存在方式）和信息性（根本属性）。
              </p>
              <br />
              <p style="text-indent:2em;font-size:1.1rem;">
                带有遗传讯息的DNA片段称为基因，其他的DNA序列，有些直接以自身构造发挥作用，有些则参与调控遗传讯息的表现。组成简单生命最少要265到350个基因。（这涉及到了基因工作组的力量，人类的基因工作组与果蝇的基本相似）
              </p></el-col
            >
          </el-row>
        </div>
      </div>
    </el-card>
    <y-footer></y-footer>
  </div>
</template>
<script>
import YShelf from '/components/shelf'
import YButton from '/components/YButton'
import YHeader from '/common/header'
import YFooter from '/common/footer'
// import $ from 'jquery'
import 'element-ui'
// import axios from 'axios'
export default {
  // 生命周期函数
  created() {
    // this.getTaskHall()
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
  components: {
    YShelf,
    YButton,
    YHeader,
    YFooter
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
</style>
