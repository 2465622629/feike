<template>
  <div class="call">
    <el-container>
      <el-main>
        <el-scrollbar>
<!--          <el-space :fill="true" :fill-ratio="10" direction="vertical" :size="30">-->
            <el-row>
              <el-col :span="24">
                <!--                <el-image class="start-img" :src="require('@/assets/image/img/banner4.png')"></el-image>-->
                <div class="start-img" :style="{backgroundImage:'url('+startImgUrl+')'}">
                  <el-col class="start-img-font-left">
                    <div>地址:浙江省温岭市大溪镇沈岙机电园区</div>
                    <div>咨询热线: 0576 8068- 3000 (工作日:9:00-18:00)</div>
                  </el-col>
                  <el-col class="start-img-font-right">
                    <div>联系我们</div>
                    <div>联系我们全心全意做好泵</div>
                    <div>查看地图</div>
                  </el-col>
                </div>
              </el-col>
            </el-row>
            <el-row class="call-our-txt">
              <el-col :span="24">联系方式</el-col>
            </el-row>
            <el-row :gutter="10" justify="center">
              <el-col :span="4">
                <div>
                  <div>
                    <el-image :src="require('@/assets/image/img/a018.png')"></el-image>
                    <div>台州市温岭市大溪镇沈岙机电园区</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div>
                  <el-image :src="require('@/assets/image/img/a019.png')"></el-image>
                  <div>台州市温岭市大溪镇沈岙机电园区</div>
                </div>
              </el-col>
              <el-col :span="4">
                <div>
                  <el-image :src="require('@/assets/image/img/a020.png')"></el-image>
                  <div>台州市温岭市大溪镇沈岙机电园区</div>
                </div>
              </el-col>
            </el-row>
            <!--            地图列-->
            <el-row>
              <el-col>
                <div id="allMap"></div>
              </el-col>
            </el-row>
<!--          </el-space>-->
        </el-scrollbar>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'Call',
  data () {
    return {
      startImgUrl: require('@/assets/image/img/banner4.png')
    }
  }
}
</script>

<style scoped lang="sass">
@import "src/assets/sass/callOur"
</style>
