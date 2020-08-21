<template>
  <div class="uni-menu">
    <el-menu
      class="uni-menu-list"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#fff"
      :default-openeds="defaultMenuIndex"
      menu-trigger="click"
      >

      <el-menu-item index="1">
        <i class="icon icon1"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="2">
        <template slot="title">
          <i class="icon icon2"></i>
          <span>课程中心</span>
        </template>

        <div class="uni-submenu">
          <div class="tit"><i class="icon icon3"></i>学分认定课程</div>
          <div class="uni-submenu-list">
            <router-link class="link" to="#"><span>我的课程</span></router-link>
            <router-link class="link" to="#"><span>学习测试</span></router-link>
            <router-link class="link" to="#"><span>我的作业</span></router-link>
          </div>
        </div>

        <div class="uni-submenu">
          <div class="tit"><i class="icon icon3"></i>非学分认定课程</div>
          <div class="uni-submenu-list">
            <router-link class="link" to="#"><span>我的课程</span></router-link>
            <router-link class="link" to="#"><span>学习练习</span></router-link>
            <router-link class="link" to="#"><span>我的作业</span></router-link>
          </div>
        </div>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="icon icon4"></i>
          <span>学习记录</span>
        </template>

        <div class="uni-submenu">
          <div class="uni-submenu-list">
            <router-link class="link" to="#"><span>我的课程</span></router-link>
          </div>
        </div>
      </el-submenu>

       <el-submenu index="4">
        <template slot="title">
          <i class="icon icon5"></i>
          <span>练习中心</span>
        </template>
        <div class="uni-submenu">
          <div class="uni-submenu-list">
            <router-link class="link" to="#"><span>章节练习</span></router-link>
            <router-link class="link" to="#"><span>历年真题</span></router-link>
            <router-link class="link" to="#"><span>模拟试卷</span></router-link>
            <router-link class="link" to="#"><span>易错题题库</span></router-link>
            <router-link class="link" to="#"><span>做题记录</span></router-link>
            <router-link class="link" to="#"><span>考前集训</span></router-link>
          </div>
        </div>
      </el-submenu>

       <el-submenu index="5">
        <template slot="title">
          <i class="icon icon10"></i>
          <span>考试中心</span>
        </template>

        <div class="uni-submenu">
          <div class="uni-submenu-list">
            <router-link class="link" to="#"><span>考试报名</span></router-link>
            <router-link class="link" to="#"><span>我的考试</span></router-link>
            <router-link class="link" to="#"><span>考前模拟</span></router-link>
            <router-link class="link" to="#"><span>参与考试</span></router-link>
            <router-link class="link" to="#"><span>线下考试</span></router-link>
          </div>
        </div>
      </el-submenu>

       <el-submenu index="6">
        <template slot="title">
          <i class="icon icon7"></i>
          <span>联系教师</span>
        </template>

        <div class="uni-submenu">
          <div class="uni-submenu-list">
            <router-link class="link" to="#"><span>教师信息</span></router-link>
          </div>
        </div>
      </el-submenu>

       <el-submenu index="7">
        <template slot="title">
          <i class="icon icon6"></i>
          <span>个人中心</span>
        </template>

        <div class="uni-submenu">
          <div class="uni-submenu-list">
            <router-link class="link" to="#"><span>个人信息</span></router-link>
            <router-link class="link" to="#"><span>我的成绩</span></router-link>
            <router-link class="link" to="#"><span>我的证书</span></router-link>
            <router-link class="link" to="#"><span>消息中心</span></router-link>
            <router-link class="link" to="#"><span>班务信息</span></router-link>
            <router-link class="link" to="#"><span>投诉建议</span></router-link>
          </div>
        </div>
      </el-submenu>
    </el-menu>

    <el-button type="primary" class="exit-btn" @click="exit"><i class="icon icon7"></i>退出登录</el-button>
  </div>
</template>

<script>
export default {
    name: 'Menu',
    data(){
      return {
        defaultMenuIndex:['1','2','3','4','5','6','7']
      }
    },
    methods:{
      exit(){
        this.$router.push('/login');
      }
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/_mix.scss';
.uni-menu{
  .el-submenu__title i{
    color:#fff;
  }
  .el-menu-item, .el-submenu__title{
    height:44px;
    line-height:44px;
  }
  .el-menu-item{
    font-size:16px;
  }
  .el-submenu .el-menu-item{
    padding:0 20px;
  }
  .el-menu-item:hover,
  .el-submenu__title:hover{
    @include bgColor('bg-color');
  }
}
</style>

<style lang="scss" scoped>
@import '@/assets/scss/_mix.scss';
.uni-menu{
    height:$mainH;
    @include linearGradient-v('linear-gradient-start', 'linear-gradient-end', url('~@/assets/images/menu_bg.png'));
    overflow: hidden;
    position:relative;
    padding-bottom:48px;

    .icon{
      margin-right:10px;
      height:20px;
      width:20px;
      display:inline-block;
      vertical-align: middle;

      &.icon1{
        background:url('~@/assets/images/01.png') center no-repeat;
      }
      &.icon2{
        background:url('~@/assets/images/02.png') center no-repeat;
      }
      &.icon3{
        @include themeIcon('03');
      }
      &.icon4{
        background:url('~@/assets/images/04.png') center no-repeat;
      }
      &.icon5{
        background:url('~@/assets/images/05.png') center no-repeat;
      }
      &.icon6{
        background:url('~@/assets/images/06.png') center no-repeat;
      }
      &.icon7{
        background:url('~@/assets/images/07.png') center no-repeat;
      }
      &.icon8{
        background:url('~@/assets/images/08.png') center no-repeat;
      }
      &.icon10{
        background:url('~@/assets/images/21.png') center no-repeat;
      }
    }

  .uni-submenu{
    color:#fff;
    padding:10px 20px;
    border-top:1px solid rgba($gray, 0.3);
    border-bottom:1px solid rgba($gray, 0.3);

    .tit{
      margin-bottom:10px;
      @extend %ellipse;
    }

    .uni-submenu-list{
      display: flex;
      flex-wrap: wrap;

      .link{
        display:block;
        width:50%;
        color:#fff;
        margin-bottom:3px;
        font-size:13px;
        @extend %ellipse;

        &:hover{
        color:#fff !important;
      }

        span{
          display:inline-block;
          padding:3px 5px;
          border-radius: 2px;;
        }

        &:hover>span{
          @include bgColor('menu-hover-color');
        }
      }
    }
  }

  .exit-btn{
    width:100%;
    height:48px;
    @include bgColor('bg-color');
    border:none;
    border-radius: 0;
    position:absolute;
    bottom:0;
  }
}
</style>
