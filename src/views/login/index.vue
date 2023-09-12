<template>
  <div class="login">
    <div class="login-card">
      <div class="card-style">
        <div class="login-title">Web 登录</div>
        <div class="login-text">海内存知己，天涯若比邻</div>
        <img src="@/assets/illustrations/login-2.svg" alt="">
      </div>
      <div class="login-form">
        <el-tabs v-model="loginType" style="flex:1" v-if="!forgetPwd">
          <el-tab-pane label="密码登录" name="1">
            <div class="form-content" v-if="userForm && loginType == '1'">
              <el-form ref="loginForm" :model="userForm" :rules="loginRules">
                <el-form-item prop="username" class="form-item">
                  <el-input v-model="userForm.username" type="text"
                    auto-complete="off" placeholder="手机号/账号" />
                </el-form-item>
                <el-form-item prop="password" class="form-item more-item">
                  <el-input v-model="userForm.password" class="input-box" :type="showPwd ? 'text' : 'password'"
                    auto-complete="off" placeholder="密码">
                    <img v-show="!showPwd" src="@/assets/illustrations/hidden.svg" class="t-icon" slot="suffix"
                      @click="showPwd = !showPwd" />
                    <img v-show="showPwd" src="@/assets/illustrations/show.svg" class="t-icon" slot="suffix"
                      @click="showPwd = !showPwd" />
                  </el-input>
                </el-form-item>
                <el-form-item label="" prop="code" class="form-item pic-code">
                  <el-input v-model="userForm.code" auto-complete="off" placeholder="图片验证码" />
                  <img :src="codeUrl ? codeUrl : require('@/assets/images/pic_code.png')" @click=""
                    class="pic-code-img" />
                </el-form-item>
                <div class="forget-tip" @click="reSetPwd">忘记密码</div>
              </el-form>
              <div class="agree-login">
                <el-button :loading="loaginLoading" size="medium" type="primary" class="login-btn"
                  @click.native.prevent="handleLogin">
                  登 录
                </el-button>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="验证码登录" name="2">
            <div class="form-content" v-if="phoneForm && loginType == '2'">
              <el-form ref="loginForm" :model="phoneForm" :rules="loginRules">
                <el-form-item prop="phonenumber" class="form-item">
                  <el-input v-model="phoneForm.phonenumber" type="text" auto-complete="off" placeholder="手机号" />
                </el-form-item>
                <el-form-item prop="phonecode" class="form-item more-item">
                  <el-input v-model="phoneForm.phonecode" class="input-box" auto-complete="off" placeholder="短信验证码">
                    <div slot="append" class="append-btn" @click.native.prevent="verifyReport">
                      {{ computeTime > 0 ? `(${computeTime}s)已发送` : "获取验证码" }}
                    </div>
                  </el-input>
                </el-form-item>
              </el-form>
              <div class="agree-login">
                <el-button :loading="loaginLoading" size="medium" type="primary" class="login-btn"
                  @click.native.prevent="handleLogin">
                  确 认
                </el-button>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>

        <div class="form-content" v-if="forgetPwd">
          <div class="form-title">重置密码</div>
          <el-form ref="loginForm" :model="setForm" :rules="loginRules" v-if="setForm">
            <el-form-item prop="phonenumber" class="form-item">
              <el-input v-model="setForm.phonenumber" type="text" auto-complete="off" placeholder="手机号/邮箱地址" />
            </el-form-item>
            <el-form-item prop="phonecode" class="form-item more-item">
              <el-input v-model="setForm.phonecode" class="input-box" auto-complete="off" placeholder="验证码">
                <div slot="append" class="append-btn" @click.native.prevent="verifyReport">
                  {{ computeTime > 0 ? `(${computeTime}s)已发送` : "获取验证码" }}
                </div>
              </el-input>
            </el-form-item>
            <el-form-item prop="password" class="form-item more-item">
              <el-input v-model="setForm.password" class="input-box" :type="showPwd ? 'text' : 'password'"
                auto-complete="off" placeholder="设置密码6-16位数字或符号">
                <img v-show="!showPwd" src="@/assets/illustrations/hidden.svg" class="t-icon" slot="suffix"
                  @click="showPwd = !showPwd" />
                <img v-show="showPwd" src="@/assets/illustrations/show.svg" class="t-icon" slot="suffix"
                  @click="showPwd = !showPwd" />
              </el-input>
            </el-form-item>
          </el-form>
          <div class="agree-login">
            <el-button :loading="loaginLoading" size="medium" type="primary" class="login-btn"
              @click.native.prevent="handleLogin">
              登 录
            </el-button>
            <div class="login-tip"> 我有账号？<span @click="reSetPwd">立即登录</span> </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
import { access_token, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

export default {
  name: 'login',
  data() {
    return {
      redirect: undefined,

      loginType: '1',
      showPwd: false,
      codeUrl: "",

      computeTime: 0,
      forgetPwd: false,

      loaginLoading: false,

      userForm: {
        username: "admin",
        password: "admin123!",
        code: "9euu",
        type: '1',
      },
      phoneForm: {
        phonenumber: "",
        phonecode: "",
        type: '2'
      },

      setForm: {
        phonenumber: "",
        phonecode: "",
        password: "",
        type: '3',
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "请输入您的账号" },
        ],
        password: [
          { required: true, trigger: "blur", message: "请输入您的密码" },
          {
            validator: (rule, value, callback) => {
              const reg = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,16}/;
              if (reg.test(value)) { callback(); } else {
                callback(new Error());
              }
            },
            message: "必须由数字、字母、特殊字符组合,请输入6-16位密码", trigger: "blur",
          },
        ],
        phonenumber: [
          { required: true, trigger: "blur", message: "请输入手机号" },
        ],
        phonecode: [
          { required: true, trigger: "blur", message: "请输入验证码" },
        ],
        code: [
          { required: true, trigger: "blur", message: "请输入验证码" },
        ],
      },

    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    },
  },
  created() {
    let auth_code = this.$route.query.auth_code

  },
  methods: {
    getAuthToken() {
      let data = {
        "app_id": '1763608681662483',
        "secret": "10e280e38a97178207321559caf72886dd784115",
        "grant_type": "auth_code",
        "auth_code": this.$route.query.auth_code
      }
      // access_token(data).then(res => {
      // console.log(res);
      let user = {
        access_token: '123123123'
      }
      this.$store.dispatch('user/login', user).then(() => {
        this.$router.push({ path: '/bidding' })
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
      // })
    },

    handleLogin() {
      this.loaginLoading = true
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          let user = {
            access_token: '123123123'
          }
          this.$store.dispatch('user/login', user).then(() => {
            this.$router.push({ path: '' })
          }).catch(() => {
          })
        } else {
          console.log('error submit!!')
          this.loaginLoading = false
        }
      })
    },

    reSetPwd() {
      this.forgetPwd = !this.forgetPwd
      this.showPwd = false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/images/bg.png");
  background-size: cover;

  .login-card {
    width: 900px;
    height: 560px;
    box-shadow: 1px 1px 24px rgba(48, 80, 137, 0.15);
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    background: #fff;

    .card-style {
      width: 48%;
      background: #6d74ef;
      min-width: 370px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      img {
        width: 90%;
        height: 380px;
      }

      .login-title {
        width: 80%;
        font-size: 34px;
        letter-spacing: 0.095em;
        font-weight: 700;
      }

      .login-text {
        width: 80%;
        font-size: 14px;
        line-height: 50px;
        letter-spacing: 10px;
      }
    }
  }
}

.login-form {
  flex: 1;
  background: #ffffff;
  height: 400px;
  margin: auto;
  padding: 20px 8% 0;

  ::v-deep .el-tabs,
  ::v-deep .el-tabs__nav {
    width: 100%;
    margin-bottom: 2px;

    .el-tabs__item {
      width: 50%;
      text-align: center;
      font-size: 16px;
      letter-spacing: 1px;
      font-weight: 600;
      padding: 0;
      color: #999;
    }

    .el-tabs__active-bar {
      width: 30px !important;
      height: 3px;
      margin: 0 66px !important;
      border-radius: 4px;
      background-color: #6d74ef;
    }

    .el-tabs__nav-wrap::after {
      display: none;
    }

    .is-active {
      color: #333;
    }
  }

  .form-content {
    width: 100%;
    flex: 1;
    margin-top: 32px;

    .form-item {
      width: 100%;

      ::v-deep .el-input__inner {
        height: 46px;
        border-radius: 6px;
        border: 1px solid #dadbea;
        filter: drop-shadow(0px 0px 5px #f0f1ff);
        padding: 4px 4px 4px 20px;
      }

      ::v-deep .el-input-group--append .el-input__inner {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      ::v-deep .el-input__suffix img {
        width: 16px;
        height: 16px;
        margin: 16px 8px;
      }
    }

    .form-item:last-child {
      margin: 0;
    }

    .forget-tip {
      margin: -10px 0;
      font-size: 12px;
      color: #999;
      text-align: right;
      cursor: pointer;
      float: right;
    }

    .more-item {
      ::v-deep .el-form-item__content {
        display: flex;

        .input-box {
          flex: 1;
        }

        .append-btn {
          cursor: pointer;
        }

        .append-btn:hover {
          color: #333;
        }
      }
    }

    .pic-code {
      ::v-deep .el-form-item__content {
        display: flex;
        align-items: center;
      }

      .pic-code-img {
        width: 100px;
        height: 5vh;
        object-fit: contain;
        min-height: 40px;
        margin-left: 10px;
      }
    }

    .form-title {
      font-size: 16px;
      letter-spacing: 1px;
      font-weight: 600;
      color: #333;
      line-height: 40px;
      text-align: center;
      margin-bottom: 47px;
      margin-top: -32px;
    }
  }

  .agree-login {
    margin-top: 46px;
    font-size: 14px;

    .login-btn {
      width: 100%;
      height: 46px;
      background: #6d74ef;
      border-radius: 6px;
    }

    .login-tip {
      font-size: 12px;
      text-align: center;
      color: #999;
      margin-top: 16px;

      span {
        color: #6d74ef;
        cursor: pointer;
      }
    }
  }
}
</style>