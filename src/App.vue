<template>
  <div id="nav">
    <el-scrollbar>
      <router-link to="/">网站首页</router-link>
      |
      <router-link to="/into">走进飞克</router-link>
      |
      <router-link to="/serve">产品服务</router-link>
      |
      <a href="https://www.taobao.com/">淘宝商城</a>
      |
      <router-link to="/onlineRecruitment">在线招聘</router-link>
      |
      <router-link to="/docDownLoad">资料下载</router-link>
      |
      <router-link to="/call">联系我们</router-link>
    </el-scrollbar>
  </div>
  <router-view/>
  <footer-end></footer-end>
</template>
<script>
import end from '@/components/end'

export default {
  name: 'app',
  components: {
    footerEnd: end
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
