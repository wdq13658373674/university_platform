<template>
  <div class="uni-login">
      <div class="login-container">
            <!--login  -->
            <div class="login-content">
                <div class="wx">
                  <span>
                    <img class="img" src="../../assets/images/wx_icon.png" alt="">
                  {{isActive ? '电脑登陆' : '微信登陆'}}
                  </span>
                  <span
                  class="uni-login-type"
                  :class="{'active':isActive}"
                  @click="changeLogin">
                  </span>
                </div>

              <!-- 电脑登陆 -->
              <el-tabs
              v-model="activeName"
              class="uni-tabs"
              v-show="!isActive">
                <!-- 密码登陆 -->
                <el-tab-pane label="密码登陆" name="first">
                  <el-form
                  :model="ruleForm"
                  :rules="rules"
                  ref="ruleForm"
                  >
                  <!-- 身份证 -->
                  <div class="uni-input-group">
                        <span
                        class="uni-label"
                        :class="{'active': isLabelActive == 'name' || ruleForm.name != ''}"
                        @click="inputGroupClick"
                        >身份证</span>

                        <el-form-item prop="name"  class="uni-input">
                            <el-input
                              v-model="ruleForm.name"
                              name="name"
                              @focus="changeLabelFocus"
                              @blur="changeLabelBlur"
                              >
                        </el-input>
                    </el-form-item>
                  </div>

                   <!-- 密码 -->
                  <div class="uni-input-group">
                        <span
                        class="uni-label"
                        :class="{'active': isLabelActive == 'password' || ruleForm.password != ''}"
                        @click="inputGroupClick"
                        >密码</span>

                        <el-form-item
                        prop="password"
                        class="uni-input">
                            <el-input
                              v-model="ruleForm.password"
                              name="password"
                              :type="isOpen"
                              @focus="changeLabelFocus"
                              @blur="changeLabelBlur"
                              ></el-input>
                    </el-form-item>

                    <span
                    class="eyes"
                     @click="showPassword"></span>
                    <!-- <i class="eyes el-icon-view" v-show="isOpen"></i> -->
                  </div>

                    <el-button 
                    type="primary" 
                    class="refer-btn"
                     @click="refer"
                    >登陆</el-button>
                  </el-form>
                </el-tab-pane>

                <!-- 验证码登陆 -->
                <el-tab-pane label="验证码登陆" name="second">
                <el-form
                  :model="codeForm"
                  :rules="codeRules"
                  ref="codeForm"
                  >
                  <!-- 手机号 -->
                  <div class="uni-input-group">
                        <span
                        class="uni-label"
                        :class="{'active': isLabelActive == 'phone' || codeForm.phone != ''}"
                        @click="inputGroupClick"
                        >手机号</span>

                        <el-form-item prop="phone"  class="uni-input">
                            <el-input
                              v-model="codeForm.phone"
                              name="phone"
                              @focus="changeLabelFocus"
                              @blur="changeLabelBlur"
                              >
                        </el-input>
                    </el-form-item>
                  </div>

                   <!-- 验证码 -->
                  <div class="uni-input-group">
                        <span
                        class="uni-label"
                        :class="{'active': isLabelActive == 'code' || codeForm.code != ''}"
                        @click="inputGroupClick"
                        >验证码</span>

                        <el-form-item prop="code" class="uni-input">
                            <el-input
                              v-model="codeForm.code"
                              name="code"
                              @focus="changeLabelFocus"
                              @blur="changeLabelBlur"
                              >
                        </el-input>

                    </el-form-item>

                    <el-button
                    round
                    class="uni-code"
                    @click="getCode(60)"
                    :disabled="isTimer"
                    >
                    {{!isTimer ? '获取验证码' : `${timerCount}s`}}
                    </el-button>
                  </div>

                    <el-button 
                    type="primary" 
                    class="refer-btn"
                    >登陆</el-button>
                  </el-form>
                </el-tab-pane>
              </el-tabs>

              <!-- 微信登陆 -->
              <div class="uni-wx-content" v-show="isActive">
                <div class="tit">微信登陆</div>
                <div class="ew-box">
                  <img
                  width="100%"
                  height="100%"
                  src="../../assets/images/ew_img.jpg" alt="">
                  </div>
                <div class="tips">使用微信扫描二维码登陆</div>
              </div>

              <div class="uni-tips">登陆不成功? <span class="link" @click="concatFunc">联系管理员</span></div>
            </div>

            <img class="unit-bootom-img" src="../../assets/images/login_bg2.png" alt="">
          </div>

          <!-- test 对话框测试 -->
          <ComponentDialog1 
          icon="fail"
          iconPosition="center"
          tips="是否需要查看答案"
          :visible="dialogVisible"
          confirmText="查看答案"
          :showCancelBtn="false"
          @close="closeDialog1"
          @confirm="confirmDialog1"
          ></ComponentDialog1>
  </div>
</template>

<script>
import { phoneReg } from '@/utils/regExp';
// import ComponentDialog from '@/components/componentDialog1';

export default {
  name: 'Login',
  components: {
    // ComponentDialog
  },
  data() {
    return {
      dialogVisible: false,//test
      activeName: 'first',
      isActive: false,
      isLabelActive: '',
      timerCount: 60,
      timer: null,
      isTimer: false,
      isOpen: 'password',
      ruleForm: {
        name: '',
        password: '',
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入身份证',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
        ],
      },
      codeForm: {
        phone: '',
        code: '',
      },
      codeRules: {
        phone: [
          {
            required: true,
            message: '请输入手机号',
            trigger: 'blur',
          }, {
            pattern: phoneReg,
            message: '手机号格式不正确',
            trigger: 'blur',
          },
        ],
        code: [
          {
            required: true,
            message: '请输入验证码',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  mounted() {

  },
  methods: {
    // 改变登陆方式
    changeLogin() {
      this.isActive = !this.isActive;
    },
    // label动画
    inputGroupClick(event) {
      const target = event.currentTarget;
      target.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.focus();
    },
    changeLabelFocus(event) {
      const { name } = event.currentTarget;
      this.isLabelActive = name;
    },
    changeLabelBlur() {
      this.isLabelActive = '';
    },
    // 验证码
    getCode(timeCount) {
      this.$refs.codeForm.validateField('phone', (errorMessage) => {
        if (errorMessage === '') {
          if (!this.timer) {
            this.timerCount = timeCount;
            this.isTimer = true;

            this.timer = setInterval(() => {
              if (this.timerCount > 0 && this.timerCount <= timeCount) {
                this.timerCount -= 1;
              } else {
                this.isTimer = false;
                clearInterval(this.timer); // 清除定时器
                this.timer = null;
              }
            }, 1000);
          }
        }
      });
    },
    // 显示隐藏密码
    showPassword() {
      this.isOpen = this.isOpen === 'password' ? 'text' : 'password';
    },
    // 联系管理员
    concatFunc(){
      this.$confirm(
        '400-038-8978', 
        '联系管理员', 
        {
          customClass: 'uni-message-box',
          confirmButtonText: '返回登陆',
          // type: 'warning',
          showCancelButton: false,
          center: true,
        }).then(()=>{}).catch(()=>{})
    },
    // 提交
    refer() {
      // this.dialogVisible = true;
      this.$router.push('/');
    },
    //test
    closeDialog1(val){
      this.dialogVisible = val;
    },
    confirmDialog1(){

    }
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/_mix.scss';
.uni-message-box{
      width:350px !important;
      border-radius: 20px;
      background:url('~@/assets/images/concat_bg.png') center no-repeat;
      background-size:100% auto;

      .el-message-box__title{
        font-size:16px;
        color:$grayDark;
      }

      .el-message-box__content{
        font-size:30px;
        font-weight:bold;
      }

      .el-button{
        width:140px;
        height:48px;
        font-size:16px;
        margin-top:20px;
        border-radius: 8px;
      }
    }
</style>

<style lang="scss">
// elementUi样式覆盖
@import '@/assets/scss/_mix.scss';

.uni-login{
  .el-input__inner{
    border:none;
    border-bottom:1px solid $gray;
    border-radius: 0;
    padding-left:0;
    padding-right:0;
  }
  .uni-tabs{
        padding:0 70px;
        .el-tabs__nav-scroll{
          display:flex;
          justify-content: center;
        }
        .el-tabs__nav-wrap::after{
          background:none;
        }
        .el-tabs__item{
          font-size:18px;
        }
      }
}
</style>
<style lang="scss" scoped>
@import '@/assets/scss/_mix.scss';
  .uni-login{
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:100vh;
    background:url('~@/assets/images/login_bg.png') #eaeef7 center no-repeat;

    .login-container{
      width:1000px;
      height:550px;
      background:$white;
      background:url('~@/assets/images/login_bg5.png') 100px 100px no-repeat
      ,url('~@/assets/images/login_bg4.png') -15px -15px no-repeat;
      position: relative;
      box-shadow: 4px 4px 10px #E2E6EE;
    }

    .login-content{
      width:50%;
      height:100%;
      background:$white;
      float:right;

      .wx{
        height:45px;
        line-height:45px;
        text-align: right;
        color:$primary;
        margin:8px 8px 50px 8px;

        .img{
          margin-right:6px;
        }

        .uni-login-type{
          float:right;
          width:45px;
          height:45px;
          cursor: pointer;
          background: url('~@/assets/images/ew_icon.png') no-repeat;
          background-size: 100% 100%;

          &.active{
          background: url('~@/assets/images/computer_icon.png') center no-repeat;
          background-size: 100% 100%;
          }
        }
      }
    }

    .refer-btn{
      width:100%;
      height:56px;
      border-radius: 28px;
      margin-top:25px;
      font-size:16px;
    }

    .uni-input-group{
      position:relative;
      margin-top:30px;

      .uni-label{
        position:absolute;
        color:$textColor;
        top:50%;
        transform: translateY(-50%);
        color: #999;
        transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        font-size: 16px;
        transform-origin: left top;
        z-index:$zindexTooltip;

        &.active {
          transform: translateY(-120%) scale(0.8);
        }
      }
      .eyes{
        position:absolute;
        right:0;
        top:50%;
        transform: translateY(-50%);
        cursor: pointer;
        display:block;
        width:24px;
        height:26px;
        background:url('~@/assets/images/eyes_icon.png') center no-repeat;
        background-size:100%;
      }
    }

    .uni-tips{
      margin-top:25px;
      text-align: center;
      font-size: 13px;

      .link{
        cursor: pointer;
        color:$primary;
      }
      
    }

    .unit-bootom-img{
      position: absolute;
      bottom:-90px;
      left:-50px;
    }

    .uni-code{
      position:absolute;
        right:0;
        top:50%;
        transform: translateY(-50%);
      width:104px;
      height:36px;
      font-size:12px;
      z-index:$zindexTooltip;
    }

    .uni-wx-content{
      text-align: center;

      .tit{
        font-size:18px;
      }
      .ew-box{
        width:200px;
        height:200px;
        border:1px solid $gray;
        overflow: hidden;
        margin:40px auto 0;
      }

      .tips{
        margin-top:10px;
      }
    }
  }
</style>
