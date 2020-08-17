<template>
  <div class="login">
    <el-button type="primary" @click="refer">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {
  },
  data() {
    return {

    };
  },
  mounted() {

  },
  methods: {
    refer() {
      this.$message({
        message: '成功',
        type: 'success',
      });
    },
  },
};
</script>
<style lang="scss" scoped>

</style>
