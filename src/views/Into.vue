<template>
  <div class="into">
    <el-container>
      <el-main>
        <el-scrollbar>
          <el-space direction="vertical" :size="60">
            <!--        头部-->
            <el-row justify="center" align="middle">
              <el-col>
                <div class="header-img">
                  <el-image :src="require('../assets/image/img/banner2.png')"></el-image>
                </div>
              </el-col>
              <el-col>
                <div class="header-img-box">
                  <div class="header-txt">走进飞克</div>
                  <el-image class="header-img-small" :src="require('../assets/image/img/a001.png')"></el-image>
                </div>
              </el-col>
            </el-row>
            <el-row justify="center" align="middle">
              <el-col :span="12">
                <div class="green_font">企业价值观</div>
                <div class="val-box">
                  <div>行为处事——利他、感恩</div>
                  <div>工作态度——激情、敬业</div>
                  <div>团队合作——包容、互信</div>
                </div>
              </el-col>
            </el-row>
            <el-row justify="center" align="middle">
              <el-col :span="12">
                <div>公司简介</div>
                <p class="small-font">
                  &nbsp;&nbsp;浙江飞克泵业有限公司是- -家专 业生产各类水泵及控制设备的水处理企业。公司产品主要为城市建设工程、农业灌溉、生活供水、消防、
                  矿产、污水处理、园林喷灌及工业用水等行业提供全面的水处理解决方案。<br>
                  &nbsp;&nbsp;公司秉承“品质”、“创新” 、“未来” 的经营理念，致力于为顾客提供高科技、高品质的产品和服务。公司建立了完善的微机自动水泵
                  测试平台，拥有专业的技术研发队伍，拥有精良先进的生产流水线，并有多项产品取得国家专利，获得国家质量信用企业称号。<br>
                  &nbsp;&nbsp;“克服阻力，”飞越梦想” 努力创新的飞克人，将继续致力于技术的创新、质量的进步和服务的升华，为顾客创造和提供更大的价值。
                </p>
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <el-image :src="require('@/assets/image/img/a005.png')"></el-image>
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <div class="green_font title-font-size">
                  飞克生产车间
                </div>
                <div class="green_font">FEIKE</div>
                <p class="txt-font-size">全面开创品牌新时代</p>
                <p class="txt-font-size">不忘初心 砥砺前行</p>
              </el-col>
            </el-row>
            <!--        <el-space direction="vertical" size="30">-->
            <el-space direction="vertical" :size="120">
              <el-row justify="center" align="right" gutter="24" v-for="(item,index) in imgList" :key="index">
                <el-space direction="horizontal" :size="60" :wrap="true">
                  <el-col :span="12">
                    <el-card>
                      <el-image :src="require(`@/assets/image/img/${item.imgUrl}`)" fit="none"></el-image>
                      <el-row class="img-card-txt">
                        <el-col :span="12">{{ item.name }}</el-col>
                        <el-col :span="6" :push="6">{{ index + 1 }}</el-col>
                      </el-row>
                    </el-card>
                  </el-col>

                  <el-col :span="12">
                    <el-card>
                      <el-image :src="require(`@/assets/image/img/${item.imgUrl}`)" fit="none"></el-image>
                      <el-row class="img-card-txt">
                        <el-col :span="12">{{ item.name }}</el-col>
                        <el-col :span="6" :push="6">{{ index + 1 }}</el-col>
                      </el-row>
                    </el-card>
                  </el-col>
                </el-space>
              </el-row>
            </el-space>
            <!--        </el-space>-->
            <el-row>
              <el-col>
                <div class="more-button">更多</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <el-image :src="require('@/assets/image/img/a013.png')"></el-image>
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
  name: 'Into',
  data () {
    return {
      imgList: [
        {
          name: '锻造车间',
          imgUrl: 'a006.png'
        },
        {
          name: '精工空间',
          imgUrl: 'a007.png'
        },
        {
          name: '冲压空间',
          imgUrl: 'a008.png'
        },
        {
          name: '安装车间',
          imgUrl: 'a009.png'
        },
        {
          name: '水泵测试中心',
          imgUrl: 'a010.png'
        },
        {
          name: '展会',
          imgUrl: 'a011.png'
        }]
    }
  }
}
</script>

<style scoped>
.header-img {
  position: relative;
}

.header-img-box {
  position: absolute;
  text-align: center;
  width: 300px;
  height: 100px;
  top: 43%;
  left: 39%;
}

.header-txt {
  font-size: 1.5em;
  font-weight: bolder;
  color: white;
}

.header-img-small {
  margin-top: 20px;
  width: 30px;
  height: 40px;
}

.green_font {
  color: #42b983;
}

.val-box {
  width: 100%;
  height: 100px;
  border: 1px solid rgb(239, 239, 239);
  border-bottom: 3px solid rgb(55, 76, 69);
}

.val-box div {
  padding: 5px 0;
  font-weight: bolder;
}

.my-title {
  margin: 10px 0;
}

.small-font {
  font-size: 0.6em;
}
</style>
<style lang="sass" scoped>
@import "src/assets/sass/into"
</style>
