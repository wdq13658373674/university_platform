<template>
  <div class="uni-home">
    <!-- 用户信息 -->
    <div class="item-box user-info">
      <div class="student-info">
        <div class="head-img-box">
          <img src="../../assets/images/login_bg4.png" alt class="img" />
        </div>

        <div class="student-content">
          <p class="name">王延川，欢迎您！</p>
          <ul class="info-list">
            <li class="item w1">
              <span class="tit">报考类别：</span>
              <span class="con">法学</span>
            </li>
            <li class="item w3">
              <span class="tit">学校：</span>
              <span class="con" alt="西南政法大学">西南政法大学</span>
            </li>
            <li class="item w2">
              <span class="tit">层次：</span>
              <span class="con">法学</span>
            </li>
            <li class="item w1">
              <span class="tit">专业：</span>
              <span class="con">法学</span>
            </li>
            <li class="item w3">
              <span class="tit">批次：</span>
              <span class="con">202010</span>
            </li>
            <li class="item w2">
              <span class="tit">身份证：</span>
              <span class="con">500382199877865567</span>
            </li>
          </ul>
          <div>
            <router-link to class="link">查看更多</router-link>
          </div>
        </div>
      </div>

      <div class="teacher-info">
        <div class="teacher-head">
          <el-avatar fit="contain" :size="80" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
        <div class="teacher-content">
          <p class="tit">
            <span>
              班主任信息
              <i class="icon1"></i>
            </span>
            <i class="icon2"></i>
          </p>
          <p class="name">程家旭 老师</p>
          <p class="phone">
            <i class="icon3"></i>
            联系电话：13655897745
          </p>
        </div>
      </div>
    </div>

    <!-- 课程信息 -->
    <el-row :gutter="25">
      <el-col :span="8">
        <div class="item-box">
          <div class="course-content">
            <div>
              <p class="title">已完成学时（分钟）</p>
              <p class="num">837</p>
            </div>
            <p>
              <el-progress 
              percentage="50"
              ></el-progress>
            </p>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="item-box">
          <div class="course-content">
            <div>
              <p class="title">已完成课程（门）</p>
              <p class="num">837</p>
            </div>
            <p>
              <el-progress percentage="50"></el-progress>
            </p>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="item-box">
          <div class="course-content box3">
            <div class="title">
              <span>考试信息</span>
              <router-link class="link" to>更多</router-link>
            </div>

            <div class="article-list">
              <router-link to class="link">
                <span class="tit">
                  <span class="uni-mark">[自考]</span>马克思基本概论
                </span>
                <span class="date">考试时间：2020-08-10</span>
              </router-link>
              <router-link to class="link">
                <span class="tit">马克思基本概论</span>
                <span class="date">考试时间：2020-08-10</span>
              </router-link>
              <router-link to class="link">
                <span class="tit">马克思基本概论</span>
                <span class="date">考试时间：2020-08-10</span>
              </router-link>
              <router-link to class="link">
                <span class="tit">马克思基本概论</span>
                <span class="date">考试时间：2020-08-10</span>
              </router-link>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

<div class="item-box2 function-content">
<el-row :gutter="50">
        <el-col :span="8">
          <div class="content-box">
            <p class="title">常用功能</p>
            <div class="content">
              <div class="normal-list">
                <p class="item">
                <router-link to="" class="link">练习中心</router-link>
                <router-link to="" class="link">课程中心</router-link>
                </p>
                <p class="item">
                <router-link to="" class="link">考试中心</router-link>
                <router-link to="" class="link">我的成绩</router-link>
                </p>
                
              </div>
            </div>
          </div>
          </el-col>
        <el-col :span="8">
          <div class="content-box">
            <p class="title">增值服务 <router-link to="" class="link">更多</router-link></p>
            <div class="content">
              <ul class="content-list">
                <li class="item">
                  <div class="img-box"> <img class="img" src="../../assets/images/login_bg4.png" alt=""></div>
                  <div class="con-box">
                    <div class="top">
                      <p class="tit">面面试技巧面试技巧面试技巧面试技巧面试技巧面试技巧面试技巧试技巧</p>
                      <p class="teacher">主讲:李永强</p>
                    </div>
                    <router-link to="" class="link">立即学习></router-link>
                  </div>
                </li>
                <li class="item">
                  <div class="img-box"> <img class="img" src="../../assets/images/login_bg4.png" alt=""></div>
                  <div class="con-box">
                    <div class="top">
                      <p class="tit">面试技巧</p>
                      <p class="teacher">主讲:李永强</p>
                    </div>
                    <router-link to="" class="link">立即学习></router-link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          </el-col>
        <el-col :span="8">
          <div class="content-box">
            <p class="title">技术培训 <router-link to="" class="link">更多</router-link></p>
            <div class="content">
              <ul class="content-list">
                <li class="item">
                  <div class="img-box"> <img class="img" src="../../assets/images/login_bg4.png" alt=""></div>
                  <div class="con-box">
                    <div class="top">
                      <p class="tit">面面试技巧面试技巧面试技巧面试技巧面试技巧面试技巧面试技巧试技巧</p>
                      <p class="teacher">主讲:李永强</p>
                    </div>
                    <router-link to="" class="link">立即学习></router-link>
                  </div>
                </li>
                <li class="item">
                  <div class="img-box"> <img class="img" src="../../assets/images/login_bg4.png" alt=""></div>
                  <div class="con-box">
                    <div class="top">
                      <p class="tit">面试技巧</p>
                      <p class="teacher">主讲:李永强</p>
                    </div>
                    <router-link to="" class="link">立即学习></router-link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          </el-col>
      </el-row>
    </div>
    
    <!-- 学习情况 -->
    <el-row  :gutter="20">
      <el-col :span="12">
        <div class="item-box2 study-content">
            <p class="title">最近的学习</p>
            <div class="content-list">
              <div class="content">
                  <p class="date"><i class="icon"></i> <span>2020-08-10</span> <span>17:30</span></p>
                <div class="con">
                  <span>学习至</span>
                  <span class="name">马尔克斯主义</span>
                  <span>已学</span>
                  <span>48.2%</span>
                  <span>用时</span>
                  <span>45分钟</span>
                  <router-link class="link" to="">继续学习</router-link>
                </div>
              </div>

              <div class="content">
                  <p class="date"><i class="icon"></i> <span>2020-08-10</span> <span>17:30</span></p>
                <div class="con">
                  <span>学习至</span>
                  <span class="name">马尔</span>
                  <span>已学</span>
                  <span>48.2%</span>
                  <span>用时</span>
                  <span>45分钟</span>
                  <router-link class="link" to="">继续学习</router-link>
                </div>
              </div>
            </div>
        </div>
        </el-col>
      <el-col :span="12">
        <div class="item-box2 study-content">
            <p class="title">最近的练习</p>
            <div class="content-list">
              <div class="content">
                  <p class="date"><i class="icon"></i> <span>2020-08-10</span> <span>17:30</span></p>
                <div class="con">
                  <span class="name"> <span class="uni-mark">[章节练习]</span>马尔克斯主义</span>
                  <span>单项选择</span>
                  <span>7题/对3/错4</span>
                  <router-link class="link" to="">继续学习</router-link>
                </div>
              </div>

              <div class="content">
                  <p class="date"><i class="icon"></i> <span>2020-08-10</span> <span>17:30</span></p>
                <div class="con">
                  <span class="name"><span class="uni-mark">[章节练习]</span>马尔</span>
                  <span>单项选择</span>
                  <span>7题/对3/错4</span>
                  <router-link class="link" to="">继续学习</router-link>
                </div>
              </div>
            </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mix.scss";
.uni-home {
  padding-left: 20px;

  a {
    color: $textColor;
  }

  .item-box {
    display: flex;
    background: #fff;
    margin-top: 20px;
  }

  .item-box2 {
    background: #fff;
    margin-top: 20px;
    padding:25px;
  }

  .uni-mark {
            @include fontColor("primary");
          }

  .user-info {
    height: 190px;
    overflow: hidden;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    .student-info {
      flex: 1;
      display: flex;
      align-items: center;

      .head-img-box {
        width: 110px;
        height: 150px;
        border: 1px solid $gray;
        overflow: hidden;

        .img {
          width: 100%;
          height: 100%;
        }
      }

      .student-content {
        height: 110px;
        margin-left: 20px;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;

        .name {
          font-size: 18px;
          font-weight: bold;
          @include fontColor("primary");
        }

        .info-list {
          display: flex;
          flex-wrap: wrap;

          .item {
            // width:30%;
            margin-top: 5px;
            display: flex;
            color: $textGray;

            &.w1 {
              width: 20%;
            }
            &.w2 {
              width: 50%;
            }
            &.w3 {
              width: 30%;
            }

            .tit {
              text-align: justify;
            }
            .con {
              flex: 1;
              @extend %ellipse;
            }
          }
        }

        .link {
          color: $oringe;
          margin-top: 10px;
          display: inline-block;
        }
      }
    }

    .teacher-info {
      flex: 0.4;
      display: flex;
      align-items: center;
      background: $grayBg;
      height: 110px;
      margin-left: 20px;
      padding: 0 20px;

      .teacher-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 20px;
        height: 80px;

        .tit {
          line-height: 30px;
          border-bottom: 1px solid $gray;
        }

        .name {
          color: $textGray;
        }

        .phone {
          color: #666666;
        }
      }
    }
  }

  .course-content {
    flex: 1;
    height: 190px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &.box3 {
      justify-content: start;
    }

    .title {
      font-size: 16px;
      color: $textGray;
    }

    .num {
      font-size: 50px;
    }

    .title {
      display: flex;
      justify-content: space-between;
    }

    .article-list {
      margin-top: 20px;
      .link {
        display: flex;
        justify-content: space-between;
        color: $textColor;
        line-height: 25px;

        .tit {
          flex: 1;
          @extend %ellipse;
        }

        .date {
          color: $textGray;
        }
      }
    }
  }


.function-content{
  .content-box{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title{
      font-size:16px;
      display:flex;
      justify-content: space-between;
      font-weight: bold;

      .link{
        font-weight: normal;
        color:$textGray;
      }
    }

    .content{
      height:170px;
      background: $grayBg;
      margin-top:10px;
      padding:0 25px;
    }

  .normal-list{
    height:90px;
    margin-top: 40px;
    
    .item{
      height:50%;
      display:flex;
      align-items: center;
      justify-content: space-around;
    }

    .link{
      display:block;
      font-size:16px;

      &:hover{
        @include fontColor('primary');
      }
    }
  }

    .content-list{
      .item{
        display: flex;
        margin-top:10px;

        .img-box{
          flex:4;
          height:70px;
          overflow: hidden;
          margin-right:15px;

          .img{
            width:100%;
            height:100%;
          }
        }

        .con-box{
          flex:6;
          display:flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          
          .tit{
           @extend %ellipse;
          }
          .teacher{
            color:$textGray;
            font-size:13px;
          }
        }

        .link{
          @include fontColor('primary');
        }
      }
    }
  }
}
}

.study-content{
  height:233px;

  .title{
      font-size:16px;
      display:flex;
      justify-content: space-between;
      font-weight: bold;
    }

    .content-list{
      .content{
        margin-top:20px;
      }
      .date{
        color:$textGray;
      }

      .con{
        display:flex;
        margin-top:10px;

        .name{
          @extend %ellipse;
        }
        span{
          margin-right:10px;
        }
      }
    }

    .link{
      width:90px;
      height:24px;
      line-height:24px;
      display:block;
      text-align: center;
      color:#fff;
      @include bgColor('primary');
      font-size:12px;
      border-radius: 5px;
      margin-left:10px;
    }
}
</style>
