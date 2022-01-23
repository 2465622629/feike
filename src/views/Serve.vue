<template>
  <div class="serve">
    <el-scrollbar>
      <el-container>
        <el-main>
          <el-space :size="45" direction="vertical">
            <el-row>
              <el-col>
                <el-image :src="require('@/assets/image/img/banner6.png')"></el-image>
              </el-col>
            </el-row>
            <el-row>
              <el-col class="green-font-color title-font-size">产品列表</el-col>
            </el-row>
            <!--          产品列表-->
            <el-row justify="center" align="middle">
              <el-space direction="horizontal" wrap :size="20">
                <el-col v-for="item in 3" :key="item">
                  <div class="pro-card">
                    <!--                  <div class="pro-background-img">-->
                    <!--                    <div class="por-type-txt green-font-color">陆上泵系列03</div>-->
                    <!--                    <el-image :src="require('@/assets/image/img/a055.png')"></el-image>-->
                    <!--                  </div>-->
                    <el-card>
                      <el-image :src="require('@/assets/image/img/a061.png')"></el-image>
                      <div class="pro-title" style="text-align: left">123</div>
                      <div class="pro-txt" style="text-align: left">132</div>
                    </el-card>
                  </div>
                </el-col>
              </el-space>
            </el-row>
            <el-row align="middle" justify="center">
              <el-col :span="24">
                <div class="end-img">
                  <el-image :src="require('@/assets/image/img/a070.png')"></el-image>
                  <div class="end-img-txt">
                    <div class="end-img-txt-title">战略中专仓库</div>
                    <div class="end-img-txt-green">广州 、昆明 、南宁 、成都 、杭州 、临沂 、沈阳</div>
                    <div class="end-img-txt-other">以最优质的产品及最真诚的服务获得客户满意</div>
                    <div class="end-img-down-img">
                      <el-image :src="require('@/assets/image/img/a071.png')"></el-image>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col>13</el-col>
            </el-row>
          </el-space>
        </el-main>
      </el-container>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'Serve'
}
</script>

<style scoped>

</style>

<style scoped lang="sass">
@import "src/assets/sass/globa/globa"
@import "src/assets/sass/serve"
</style>
