<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu default-active="/home" :default-openeds="['/user-manage', '/news-manage', '/product-manage']" class="el-menu-vertical-demo" @select="handleSelect" @open="handleOpen" @close="handleClose">
        <el-menu-item index="/home">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/center">
          <i class="el-icon-user-solid"></i>
          <span slot="title">个人中心</span>
        </el-menu-item>
        <el-submenu index="/user-manage">
          <template slot="title">
            <i class="el-icon-user-solid"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item index="/user-manage/add">添加用户</el-menu-item>
          <el-menu-item index="/user-manage/list">用户列表</el-menu-item>
        </el-submenu>
        <el-submenu index="/news-manage">
          <template slot="title">
            <i class="el-icon-s-management"></i>
            <span>新闻管理</span>
          </template>
          <el-menu-item index="/news-manage/add">创建新闻</el-menu-item>
          <el-menu-item index="/news-manage/list">新闻列表</el-menu-item>
        </el-submenu>
        <el-submenu index="/product-manage">
          <template slot="title">
            <i class="el-icon-s-order"></i>
            <span>产品管理</span>
          </template>
          <el-menu-item index="/product-manage/add">添加产品</el-menu-item>
          <el-menu-item index="/product-manage/list">产品列表</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'CodeProjectAsideMenu',

  data() {
    return {}
  },

  mounted() {},

  methods: {
    handleSelect(index, indexPath) {
      console.log('index', index, 'indexPath', indexPath)
      this.$router.push({ path: index })
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped></style>
