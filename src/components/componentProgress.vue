<template>
  <div class="uni-progress">
      <div class="progress-persent" :style="{left:percentage}">{{percentage}}</div>
      <div class="progress" :style="{width:percentage}"></div>
  </div>
</template>

<script>
export default {
  name: 'ComponentProgress',
  props:{
      percentage: {
      type: Number,
      default: 0,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mix.scss";
.uni-progress{
    position: relative;
    width:100%;
    height:15px;
    border-radius: 7px;
    background:#D9DBDC;

    .progress{
        width:0;
        height:100%;
        border-radius: 7px;
        @include themeIcon('progress');
        // @include bgColor('primary');
        background-size:auto 109% !important;
        transition: all .4s;
    }

    .progress-persent{
        position: absolute;
        top:-50px;
        left:0;
        transform: translate(-65%);
        width:40px;
        height:50px;
         @include themeIcon('pro_arrow');
        background-size:100% auto;
        color:#fff;
        font-size:12px;
        text-align: center;
        line-height:40PX;
         transition: all .4s;
    }
}
</style>
