<template>
  <div class="uni-side-banner">
    <div class="content-box">
      <!-- 公告通知 -->
      <div class="content">
        <p class="title">公告通知</p>
        <div class="article-list">
          <router-link class="link" to="">关于切实做好雷阵雨实做好雷阵雨实做好雷阵雨实做好雷阵雨天气防范应</router-link>
          <router-link class="link" to="">关于切实做好雷阵雨实做好雷阵雨实做好雷阵雨实做好雷阵雨天气防范应</router-link>
          <router-link class="link" to="">关于切实做好雷阵雨实做好雷阵雨实做好雷阵雨实做好雷阵雨天气防范应</router-link>
          <router-link class="link" to="">关于切实做好雷阵雨实做好雷阵雨实做好雷阵雨实做好雷阵雨天气防范应</router-link>
          <router-link class="link" to="">关于切实做好雷阵雨实做好雷阵雨实做好雷阵雨实做好雷阵雨天气防范应</router-link>
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
        <router-link to="" class="img-link"><img src="../assets/images/login_bg4.png" alt="" width='100%' height='132'></router-link>
        <ul class="article-list">
          <li class="row">
            <router-link class="link" to="">关于切实做好雷阵雨实做好雷阵雨实做好雷阵雨实做好雷阵雨天气防范应</router-link>
            <span>李强</span>
          </li>
        </ul>
      </div>

      <!-- 最新课程 -->
      <div class="content">
        <p class="title">最新课程</p>
        <ul class="article-list">
          <li class="row">
            <router-link class="link" to="">关于切实做好雷阵雨实做好雷阵雨实做好雷阵雨实做好雷阵雨天气防范应</router-link>
            <span>08-10</span>
          </li>
           <li class="row">
            <router-link class="link" to="">关于切实做好雷阵雨实做好雷阵雨实做好雷阵雨实做好雷阵雨天气防范应</router-link>
            <span>08-10</span>
          </li>
           <li class="row">
            <router-link class="link" to="">关于切实做好雷阵雨实做好雷阵雨实做好雷阵雨实做好雷阵雨天气防范应</router-link>
            <span>08-10</span>
          </li>
           <li class="row">
            <router-link class="link" to="">关于切实做好雷阵雨</router-link>
            <span>08-10</span>
          </li>
           <li class="row">
            <router-link class="link" to="">关于切实做好雷阵雨实做好雷阵雨实做好雷阵雨实做好雷阵雨天气防范应</router-link>
            <span>08-10</span>
          </li>
        </ul>
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
  .content-box{
    margin:20px;
    padding:0 30px;
    background:#fff;
    min-height:calc(100vh - 132px);
    overflow: hidden;
  }

  .content{
    border-bottom: 1px solid #DDDDDD;
    margin:0 30px;
    padding:30px 0;

    .title{
      font-size:16px;
      font-weight:bold;
    }

    .article-list{
      line-height:24px;

      .row{
        display:flex;
        .link{
          flex: 1;
        }
      }
    }

    .img-link{
      display:block;
      margin:10px 0;
    }

    .link{
      display:block;
      font-size:13px;
      color:$textColor;
      @extend %ellipse;
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
