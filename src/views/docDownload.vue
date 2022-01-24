<template xmlns:el-col="http://www.w3.org/1999/html">
  <div class="docDownLoad">
    <el-container>
      <el-main>
        <el-scrollbar>
          <el-space direction="vertical" :size="30">
            <el-row>
              <el-col>
                <div class="start-img">
                  <el-image :src="require('@/assets/image/img/banner3.png')"></el-image>
                  <div class="start-img-font">
                    <div class="start-img-buttons">
                      <div>细节决定成败</div>
                      <div>品质始终如一</div>
                    </div>
                    <div>咨询热线：0576-8068-3000</div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                资料下载
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <div>资料类型</div>
                <div>品牌画册-PDF</div>
              </el-col>
              <el-col :span="8">
                <div>------------------------------------------------</div>
              </el-col>
              <el-col :span="8">
                <div>点击下载</div>
              </el-col>
            </el-row>
          </el-space>
        </el-scrollbar>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'docDownload'
}
</script>

<style scoped lang="sass">
@import "src/assets/sass/docDownload"
</style>
