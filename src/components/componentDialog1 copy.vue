
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
        <!--测试题弹窗 content type=1 -->
        <div class="type1-content" v-if="type == 1">
          <i class="icon success" v-if="icon == 'success'"></i>
          <i class="icon fail" v-else-if="icon == 'fail'"></i>
          <div class="title">{{title}}</div>
          <div class="tips" v-html="tips"></div>
          <div class="score-row">
            <span class="score">{{score}}</span>
            分
          </div>
        </div>

        <!--上一章节学习弹窗 content type=2 -->
        <div class="type2-content" v-else-if="type == 2 || type == 3">
          <i class="icon success" v-if="icon == 'success'"></i>
          <i class="icon fail" v-else-if="icon == 'fail'"></i>
          <i class="icon account" v-else-if="icon == 'account'"></i>

          <div class="title">{{title}}</div>
          <div class="tips" v-html="tips"></div>
        </div>
        
        <!-- footer -->
         <div slot="footer" class="dialog-footer">
           <!-- type=1 -->
           <div v-if="footerType == 1">
          <el-button class="btn reset-btn">重做</el-button>
          <el-button 
            type="primary" 
            class="btn refer-btn"
          >提交测试</el-button>
           </div>

          <!-- type=2 -->
          <el-button 
            type="primary" 
            class="confirm-btn"
            :class="footerType==3 ? 'blue' : 'red'"
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
    // 弹框类型（confirm1）
    type:{
      default: 1
    },
    // 显示隐藏
    visible: {
      type: Boolean,
      default: false,
    },
    // 左上方图标类型（1:success通过图标，2：fail未通过图标）
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

    footerType:{
      default: 1
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
  .type1-content{
    .title{
        font-size:26px;
        color:$grayLight;
        text-align: center;
      }

      .tips{
        color:$grayLight;
        text-align: center;
      }

      .icon{
        position:absolute;
        top:-75px;
        left:-60px;
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

  .type2-content{
      .title{
        font-size:30px;
        color:$textColor;
        text-align: center;
        margin-top:20px;
      }

      .tips{
        color:$grayLight;
        text-align: center;
        font-size:20px;
        margin-top:10px;
      }

      .icon{
        margin:0 auto;

        &.account{
          margin-top:-58px;
          width:158px;
          height:158px;
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
}
</style>
