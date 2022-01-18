<template>
  <div id="nav">
    <router-link to="/index">网站首页</router-link>
    |
    <router-link to="/into">走进飞克</router-link>
    |
    <router-link to="/serve">产品服务</router-link>
    |
    <router-link to="/onlineRecruitment">在线招聘</router-link>
    |
    <router-link to="/call">联系我们</router-link>
  </div>
  <router-view/>
</template>
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
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
