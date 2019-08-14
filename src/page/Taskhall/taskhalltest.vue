<template>
<div>
<header-top>
<span slot="title" class="name">版本更新</span>
</header-top>
<div class="h_question">
<div v-for="(item,index) in questList" :key="index">
<div class="h_ques" @click="toggle(item)">{{item.title}}
<span style="float:right;" v-if="item.show"><img src="../images/back.png" alt="" class="s_img"></span>
<span style="float:right" v-else><img src="../images/left.png" alt="" class="s_img1"></span>
</div>
<div class="h_answer" v-show="nval==index&&show">
{{item.article}}
</div>
</div>
</div>
</div>
</div>
</template>
<script>
import { get_version } from '@/api/chttp.js'
import HeaderTop from '@/components/HeaderTop'
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)
export default {
  name: 'Version',
  data() {
    return {
      show: false,
      questList: [
        {
          title: '2.0.0版本功能介绍',
          article: '可以实现群聊、发送名片、交换名片、保存到通讯录等功能'
        },
        {
          title: '1.0.0版本功能介绍',
          article: '可以实现群聊、保存到通讯录等功能'
        }
      ]
    }
  },
  components: {
    HeaderTop
  },
  mounted() {
    this.get_questList()
  },
  methods: {
    toggle(index) {
      this.nval = index
      this.show = !this.show
    },
    get_questList() {
      const params = {
        type: 1
      }
      get_version(params).then(res => {
        this.questList = res.data.data
      })
    }
  }
}
</script>
