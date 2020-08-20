<template>
  <div class="uni-side-banner">
    <div class="content-box">
      <!-- 公告通知 -->
      <div class="content">
        <p class="title">公告通知</p>
        <div class="article-list" style="margin-top:20px;">
          <router-link class="link" to=""><span class="tit">关于切实做好雷阵雨实做好雷阵雨实做好雷阵雨实做好雷阵雨天气防范应</span></router-link>
          <router-link class="link" to=""><span class="tit">关于切实做好雷阵雨实做好雷阵雨实做好雷阵雨实做好雷阵雨天气防范应</span></router-link>
          <router-link class="link" to=""><span class="tit">关于切实做好雷阵雨实做好雷阵雨实做好雷阵雨实做好雷阵雨天气防范应</span></router-link>
          <router-link class="link" to=""><span class="tit">关于切实做好雷阵雨实做好雷阵雨实做好雷阵雨实做好雷阵雨天气防范应</span></router-link>
          <router-link class="link" to=""><span class="tit">关于切实做好雷阵雨实做好雷阵雨实做好雷阵雨实做好雷阵雨天气防范应</span></router-link>
        </div>
      </div>

      <!-- 客服中心 -->
      <div class="content">
        <p class="title">客服中心</p>
        <div class="phone-box">
          <span class="phone">400-038-8978</span>
        </div>
        <el-button class="answer-btn" type="primary" plain>有问题？咨询技术部</el-button>
      </div>

       <!-- 最新课程 -->
      <div class="content">
        <p class="title">最新学习视频</p>
        <router-link to="" class="img-link">
          <img src="../assets/images/login_bg4.png" alt="" width='100%' height='132'>
          <div class="row">
            <span class="link" to="">关于切实做好雷阵雨实做好雷阵雨实做好雷阵雨实做好雷阵雨天气防范应</span>
            <span>李强</span>
          </div>
        </router-link>
       
      </div>

      <!-- 最新课程 -->
      <div class="content">
        <p class="title">最新课程</p>
        <div class="article-list">
          <router-link to="" class="link">
            <span class="tit">关于切实做好雷阵雨实做好雷阵雨实做好雷阵雨实做好雷阵雨天气防范应</span>
            <span class="date">08-10</span>
          </router-link>
          <router-link to="" class="link">
            <span class="tit">关于切实做好雷阵雨实做好雷阵雨实做好雷阵雨实做好雷阵雨天气防范应</span>
            <span class="date">08-10</span>
          </router-link>
          <router-link to="" class="link">
            <span class="tit">关于切实做好雷阵雨实做好雷阵雨实做好雷阵雨实做好雷阵雨天气防范应</span>
            <span class="date">08-10</span>
          </router-link>
          <router-link to="" class="link">
            <span class="tit">关于切实做好雷阵雨实做好雷阵雨实做好雷阵雨实做好雷阵雨天气防范应</span>
            <span class="date">08-10</span>
          </router-link>
          <router-link to="" class="link">
            <span class="tit">关于切实做好雷阵雨实做好雷阵雨实做好雷阵雨实做好雷阵雨天气防范应</span>
            <span class="date">08-10</span>
          </router-link>
          <router-link to="" class="link">
            <span class="tit">关于切实做好雷阵雨实做好雷阵雨实做好雷阵雨实做好雷阵雨天气防范应</span>
            <span class="date">08-10</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SideBanner',
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mix.scss';
.uni-side-banner{
  height:$mainH;
  overflow: hidden;

  .content-box{
    margin:20px;
    padding:0 30px;
    background:#fff;
    min-height:calc(100vh - 132px);
    overflow: hidden;
  }

  .content{
    border-bottom: 1px solid #DDDDDD;
    // margin:0 30px;
    padding:30px 0;

    .title{
      font-size:16px;
      font-weight:bold;
    }

    .article-list{
      margin-top:10px;
        .link{
          display:flex;
          justify-content: space-between;
          color:$textColor;
          margin-top:6px;

          .tit{
            flex:1;
            @extend %ellipse;
          }

          .date{
            color:$textGray;
          }
        }
      }

    
    .img-link{
      display:block;
      margin:10px 0 0;
      color:$textColor;

      .row{
        display: flex;
        margin-top:5px;
        .link{
          flex:1;
          @extend %ellipse;
        }
      }
    }

  .phone-box{
    margin-top:20px;
    .phone{
          font-size:21px;
          font-weight:bold;
        }
  }
    

    .answer-btn{
      // background:#fff;
      width:100%;
      border-radius:15px;
      padding-top:0;
      padding-bottom:0;
      height:33px;
      line-height:33px;
      margin-top:20px;
    }
  }
}
</style>
