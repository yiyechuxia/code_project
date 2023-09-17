<template>
  <div id="login">
    <div class="login-module">
      <p class="sys_name">企业门户网站管理系统</p>
      <div class="msg_form">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="form.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="passWord">
            <el-input type="password" v-model="form.passWord"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%; margin-top: 10px" @click="submitForm('form')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <vue-particles
      class="login-bg"
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="4"
      linesColor="#8DD1FE"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </div>
</template>

<script>
export default {
  name: 'CodeProjectLogin',

  data() {
    return {
      form: {
        userName: '',
        passWord: ''
      },
      rules: {
        userName: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        passWord: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
      }
    }
  },

  mounted() {},

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!')
          localStorage.setItem('token', 'admin')
          this.$router.push({ path: '/layout' })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#login {
  width: 100%;
  height: 100%;
  //color: #cccccc;
  /*如果想做背景图片 可以给标签一个class 直接添加背景图*/
  position: relative;
  .login-module {
    padding: 30px 40px;
    width: 675px;
    // height: 400px;
    background: rgba($color: #000000, $alpha: 0.7);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .sys_name {
      text-align: center;
      font-size: 32px;
      font-weight: 1000;
      color: #fff;
      margin-bottom: 40px;
    }
  }
}
// 如果屎全屏展示
.login-bg {
  width: 100%;
  height: 100%;
  background: #3e3e3e;
}
</style>
