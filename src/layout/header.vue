<template>
  <div class="uni-header">
    <button style="position:absolute;top:0;left:0;z-index:999;color:#000;" @click="changeTheme">切换主题</button>
    <el-row :gutter="20" type="flex" align="middle" style="height:100%;">
      <el-col :xl="{span:16,offset:3}" :lg="{span:16,offset:3}">

        <div class="content">
          <img height='67' src="../assets/images/logo.png" alt="">
          <div class="msg-box">
            <p class="txt">王延川，欢迎您！进入学习网</p>
            <p style="margin-top:9px;">
              <span>当前专业</span>
              <el-select 
              v-model="value" 
              clearable 
              placeholder="请选择"
              default-first-option="true"
              >
              <el-option
                v-for="item in options"
                :key="item.value"
                :value="item.value"
                >
                自学考试-法学-在读
              </el-option>
            </el-select>
            </p>
          </div>
        </div>
        
        </el-col>

      <el-col :xl="{span:5}" :lg="{span:5}">
        <div class="weather-box">
          <p class="date">2020年08月08日</p>
          <div>
            <span class="weathericon"></span>
            <div class="temp">
              <p>重庆市  空气良</p>
              <p>27°~34°</p>
            </div>
          </div>
        </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name: 'Header',
    data(){
      return {
        options: [{
          key: 1,
          value: '自学考试-法学-在读',
        }],
        value: '自学考试-法学-在读'
      }
    },
    methods:{
      changeTheme(){
      document.body.classList.toggle('theme-red');
    }
    }
}
</script>
<style lang="scss">
.uni-header{
  .el-input__inner{
    margin-left:10px;
    background-color: transparent;
    background-image: none;
    border-radius:0;
    border: 1px solid #fff;
    box-sizing: border-box;
    color: #fff;
    height: 29px;
    line-height: 29px;
    width:175px;
  }

  .el-input__icon {
    line-height: 29px;
    vertical-align: middle;
}
.el-select .el-input .el-select__caret{
  color:#fff;
}

.el-select .el-input.is-focus .el-input__inner{
  border-color:#fff;
}
.el-select .el-input__inner:focus {
    border-color: #fff;
}
}
</style>
<style lang="scss" scoped>
@import '@/assets/scss/_mix.scss';
.uni-header{
    height:132px;
    color:$white;
    @include linearGradient(163deg, 'linear-gradient-start', 'linear-gradient-end', url('~@/assets/images/top_bg.png'));

    .content{
      display:flex;
      align-items: center ;
    }

    .msg-box{
        border-left:1px solid $white;
        padding:0 22px;
        margin-left:22px;

        .txt{
          font-size:18px;
          font-weight:bold;
        }
      }

      .weather-box{
        .date{
          font-size:15px;
        }
        .temp{
          font-size:12px;
        }
      }
}
</style>
