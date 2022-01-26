<template>
  <div class="end">
    <el-container>
      <el-main>
        <el-row align="top" justify="center">
          <el-space direction="horizontal" :size="50">
            <el-col>
              <div class="end-txt">
                <span><router-link to="/">网站首页</router-link></span>
                <el-divider direction="vertical"></el-divider>

                <span><router-link to="/into">走进飞克</router-link></span>
                <el-divider direction="vertical"></el-divider>

                <span><router-link to="/serve">产品服务</router-link></span>
                <el-divider direction="vertical"></el-divider>
                <span><a href="https://www.taobao.com/">淘宝商城</a></span>
                <el-divider direction="vertical"></el-divider>

                <span><router-link to="/onlineRecruitment">在线招聘</router-link></span>
                <el-divider direction="vertical"></el-divider>

                <span><router-link to="/docDownLoad">资料下载</router-link></span>
                <el-divider direction="vertical"></el-divider>

                <span><router-link to="/call">联系我们</router-link></span>
                <el-divider direction="vertical"></el-divider>

              </div>
              <div>Copyright。2021版权所有: FLYKE PUMP备案 号:漸000000000号</div>
            </el-col>
            <el-col>
              <div class="countries-img">
                <span><el-image :src="require('@/assets/image/img/a002.png')"></el-image></span>
                <span><el-image :src="require('@/assets/image/img/a003.png')"></el-image></span>
                <span><el-image :src="require('@/assets/image/img/a004.png')"></el-image></span>
              </div>
            </el-col>
            <el-col>
              <div>
                <el-image :src="require('@/assets/image/img/a014.png')"></el-image>
              </div>
            </el-col>
          </el-space>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'end'
}
</script>

<style scoped lang="sass">
.end-txt
  margin: 10px 0

.el-main
  color: white
  font-size: 0.8em
  background-color: rgb(51, 51, 51)

.countries-img
  span
    .el-image
      display: inline-block
      margin: 0 3px

.end a
  font-weight: bold
  color: white
  text-decoration: none

.end a.router-link-exact-active
  color: #42b983

</style>
