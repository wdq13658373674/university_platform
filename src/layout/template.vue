<template>
  <div class="uni-template">
    <!-- header -->
    <Header/>

    <!-- content -->
    <el-row type="flex" style="height:calc(100% -132px);background:#EAEEF7;">
      <el-col :xl="{span:3}" :lg="{span:4}">
        <Menu/>
      </el-col>

      <el-col :xl="{span:16}" :lg="{span:14}">
        <router-view/>
      </el-col>

      <el-col :xl="{span:5}" :lg="{span:6}">
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
  height:100%
}
</style>
