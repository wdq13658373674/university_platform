<template>
  <div class="uni-template">
    <!-- header -->
    <Header/>

    <!-- content -->
    <el-row type="flex" style="height:calc(100% -132px);background:#EAEEF7;">
      <el-col :xl="{span:3}" :lg="{span:3}">
        <Menu/>
      </el-col>

      
      <el-col :xl="{span:16}" :lg="{span:16}">
        <router-view/>
        <div class="uni-copy-right">Copyright © 2000 - 2020 www.cjzk.cn All Rights Reserved. 卓培科技有限公司  版权所有 渝ICP备18010001号</div>
      </el-col>

      <el-col :xl="{span:5}" :lg="{span:5}">
        <SideBanner/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Header from './header';
import Menu from './menu';
import SideBanner from './sideBanner';
export default {
  name: 'Template',
  components:{
      Header,
      Menu,
      SideBanner
    }
}
</script>

<style lang="scss" scoped>
.uni-template{
  width:100%;
  height:100%;

  .uni-copy-right{
    height:48px;
    line-height:48px;
    text-align: center;
    font-size:12px;
    color:rgba(127,127,127,1);
  }
}
</style>
