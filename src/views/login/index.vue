<!--  -->
<template>
  <div class="login-container">
    <el-form ref="loginForm" class="login-form" :model="loginForm" :rules="loginRules">
      <div class="login-title"><h3>系统登录</h3></div>

      <el-form-item prop="username">
        <span class="login-icon"><svg-icon icon-class="user" /></span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          name="username"
          type="text"
          placeholder="请输入账号"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="login-icon"><svg-icon icon-class="password" /></span>
        <el-input
          ref="password"
          v-model="loginForm.password"
          name="password"
          type="password"
          placeholder="请输入密码"
        />
      </el-form-item>

      <el-button :loading="loading" class="login-submit" type="primary" @click.native.prevent="handleLogin">登录</el-button>

      <div class="login-tip">
        <div class="login-tip-item">
          <span>账号: admin</span>
          <span>密码: 随便填</span>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      loginForm: {
        username: 'admin',
        password: '123123'
      },
      loginRules: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  methods: {
    handleLogin() {
      this.$refs['loginForm'].validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>

<style scoped lang="scss">
$bg:#2d3a4b;
.login {
  &-container {
    width: 100%;
    min-height: 100%;
    background: $bg url(https://picsum.photos/1920/1080) no-repeat center fixed;
    background-size: cover;
    overflow: hidden;
  }
  &-form {
    position: relative;
    width: 480px;
    max-width: 100%;
    padding: 35px;
    margin: 150px auto;
    color: #333;
    background: rgba(255,255,255,.65);
    border-radius: 5px;
  }
  &-title {
    margin: 0 auto 30px;
    font-size: 26px;
    font-weight: bold;
    text-align: center;
  }
  &-icon {
    display: inline-block;
    vertical-align: middle;
    width: 30px;
    padding: 6px 5px 6px 15px;
  }
  &-submit {
    width:100%;
  }
  &-tip {
    font-size: 14px;
    margin-top: 30px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
}
</style>
<style lang="scss">
/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    width: 85%;
    height: 48px;

    input {
      background: transparent;
      padding: 12px 5px 12px 15px;
      height: 48px;
      border: 0px;
    }
  }

  .el-form-item {
    color: #454545;
    background: rgba(255, 255, 255, 0.85);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
}
</style>
