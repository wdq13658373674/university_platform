
<template>
<!-- 测试弹窗 -->
  <div class="uni-dialog1">
      <el-dialog 
      :visible.sync="isVisible"
      width="360px"
      custom-class="uni-custom-dialog"
      center
      top="25vh"
      @closed="close"
      >
        <!--content -->
        <div class="content" :class="iconPosition">
          <i class="icon success" v-if="icon == 'success'"></i>
          <i class="icon fail" v-else-if="icon == 'fail'"></i>
          <i class="icon account" v-else-if="icon == 'account'"></i>

          <div class="title" v-if="title">{{title}}</div>
          <div class="tips" v-if="tips" v-html="tips"></div>

          <div class="score-row" v-if="score">
            <span class="score">{{score}}</span>
            分
          </div>
        </div>
        
        <!-- footer -->
         <div slot="footer" class="dialog-footer">
           <!-- footerType=1 -->
           <div v-if="footerType == 1">
              <el-button class="btn reset-btn">重做</el-button>
              <el-button 
                type="primary" 
                class="btn refer-btn"
              >提交测试</el-button>
           </div>

          <!-- footerType=2 -->
          <el-button 
            type="primary" 
            class="confirm-btn"
            :class="footerColor=='blue' ? 'blue' : 'red'"
            v-else-if="footerType == 2 || footerType == 3"
          >我知道了</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ComponentDialog1',
  props:{
    // 显示隐藏
    visible: {
      type: Boolean,
      default: false,
    },
    // 图标类型（success通过图标，fail未通过图标，account账号图标）
    icon:{
      default:'success'
    },
    // titlt下方提示语
    tips:{
      default:''
    },
    // title
    title:{
      default: ''
    },
    // 分数
    score:{
      default:0
    },
    // 底部按钮type，按钮颜色
    footerType:{
      default: 1
    },
    footerColor:{
      default: 'blue'
    },
    // 图标显示位置
    iconPosition:{
      default:'left-Top'
    }
  },
  data(){
    return {
      isVisible: this.visible
    }
  },
  watch:{
    visible:function(val){
      this.isVisible = val;
    }
  },
  methods:{
    close(){
      this.$emit('close',false);
    }
  }
}
</script>

<style lang='scss'>
.uni-dialog1{
.uni-custom-dialog{
  border-radius: 30px;
}

.el-dialog--center .el-dialog__body{
    padding:0px 20px 10px;
  }

  .el-dialog__footer{
    padding-bottom:35px;
    padding-top:20px;
  }
}
</style>
<style lang="scss" scoped>
@import "@/assets/scss/_mix.scss";
.uni-dialog1{
  .content{
    .icon{
      display:block;
      width:138px;
      height:132px;
      background-size:100%;
      background-position: center;
      background-repeat: no-repeat;

      &.success{
        background-image:url('~@/assets/images/14_red.png');
      }

      &.fail{
        background-image:url('~@/assets/images/dialog_icon1.png');
      }

      &.account{
        background-image:url('~@/assets/images/dialog_icon3.png');
      }
    }

        .title{
          text-align: center;
          margin-top:20px;
          color:$textColor;
        }

        .tips{
          text-align: center;
          margin-top:10px;
          color:$grayLight;
        }

      &.left-top{
        .icon{
          position:absolute;
          top:-75px;
          left:-60px;
        }

        .title{
          font-size:26px;
          color:$grayLight;
        }
      }

      &.center{
        .icon{
          width:106px;
          height:106px;
          margin: 0 auto;
        }

        .title{
          font-size:30px;
        }

        .tips{
          font-size:20px;
        }
      }

      &.top-center{
        .icon{
          width:158px;
          height:158px;
          margin: -58px auto 0;
        }

        .title{
          font-size:30px;
        }

        .tips{
          font-size:20px;
        }
      }

      .score-row{
      text-align: center;
      margin-top:20px;

        .score{
          font-size: 70px;
          line-height:70px;
          color:$textColor;
        }
    }
  }

    .btn{
      width:115px;
      height:36px;
    }

    .confirm-btn{
      width:170px;
      height:64px;
      border-radius: 32px;
      font-size:24px;
      border:0;

      &.red{
        background:$red;
      }
    }
}
</style>
