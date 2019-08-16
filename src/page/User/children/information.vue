<template>
  <div>
    <y-shelf title="用户资料">
      <div slot="content">
        <div class="avatar-box">
          <p style="font-size:20px;">姓名:admin <br /><br />性别:男</p>
        </div>
      </div>
    </y-shelf>
  </div>
</template>
<script>
import YButton from '/components/YButton'
import YShelf from '/components/shelf'
import vueCropper from 'vue-cropper'
import { mapState, mapMutations } from 'vuex'
import { getStore } from '/utils/storage'
export default {
  data() {
    return {
      userId: '',
      token: ''
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapMutations(['RECORD_USERINFO']),
    message(m) {
      this.$message(m)
    },
    messageSuccess(m) {
      this.$message({
        message: m,
        type: 'success'
      })
    },
    messageFail(m) {
      this.$message.error({
        message: m
      })
    }
  },
  created() {
    this.userId = getStore('userId')
    this.token = getStore('token')
  },
  components: {
    YButton,
    YShelf,
    vueCropper
  }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/style/mixin';

.avatar-box {
  height: 124px;
  display: flex;
  margin: 0 30px 30px;
  border-bottom: #dadada solid 1px;
  line-height: 30px;
  display: flex;
  align-items: center;
  .img-box {
    @include wh(80px);
    border-radius: 5px;
    overflow: hidden;
  }
  img {
    display: block;
    @include wh(100%);
  }
  .r-box {
    margin-left: 20px;
    h3 {
      font-size: 18px;
      font-weight: 400;
      color: #333;
    }
  }
}

// 修改头像
.edit-avatar {
  z-index: 9999;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  @include wh(100%);
  background-color: rgba(0, 0, 0, 0.5);
  @extend %block-center;
  .content {
    display: flex;
    padding: 45px 100px 0;
  }
  > div {
    box-sizing: content-box;
    @include wh(700px, 500px);
    margin: 0;
  }
  .btn {
    width: 80px;
    height: 30px;
    margin-left: 10px;
    position: relative;
    text-align: center;
    line-height: 30px;
    text-shadow: rgba(255, 255, 255, 0.496094) 0 1px 0;
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    // &:hover {
    // }
    a {
      color: #666;
      display: block;
      @include wh(100%);
    }
  }
  input[type='file'] {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    opacity: 0;
    width: 80px;
    height: 30px;
    cursor: pointer;
    box-sizing: border-box;
    border: 15px solid #000;
    overflow: hidden;
  }
  .edit-l {
    width: 100px;
    text-align: center;
  }
  .edit-r {
    margin-left: 20px;
    flex: 1;
    > div {
      border: 1px solid #ccc;
      width: 320px;
      height: 320px;
    }
  }
}

.image-container {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
}

.close {
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  padding: 0 10px;
  @extend %block-center;
  &:hover {
    svg {
      transition: all 1s;
      transform: rotate(360deg);
      transform-origin: 50% 50%;
    }
    path {
      fill: #8a8a8a;
    }
  }
}

.big {
  display: block;
  width: 320px;
  height: 320px;
}

.bootom-btn {
  padding: 0 15px;
  border-top: 1px solid #e6e6e6;
  bottom: 0;
  height: 60px;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
