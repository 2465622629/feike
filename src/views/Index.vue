<template>
  <div class="index">
    <el-scrollbar>
      <!--      采用布局容器-->
      <div class="common-layout" style="height: auto">
        <el-row>
          <el-col>
            <!--    轮播图-->
            <el-carousel height="500px">
              <el-carousel-item v-for="item in proList" :key="item">
                <div>
                  <el-image :src="require(`@/assets/image/img/${item}`)" fit="none"></el-image>
                </div>
              </el-carousel-item>
            </el-carousel>
          </el-col>
        </el-row>
        <el-row justify="center" align="center">
          <el-col span="24">
            <!--    搜索框-->
            <div class="demo-input-size">
              <el-input
                v-model="input1"
                class="w-50 m-2"
                size="large"
                placeholder="Please Input"
              ></el-input>
            </div>
          </el-col>
        </el-row>
        <!--        关于飞克-->
        <el-row>
          <el-col>
            <h1 class="about_font green_font">关于飞克</h1>
          </el-col>
        </el-row>

        <el-row>
          <el-col>
            <h2 style="color: rgb(144,144,144); font-weight: 400">诚信为重 &nbsp; &nbsp; 合作共赢</h2>
          </el-col>
        </el-row>
        <!--        公司简介-->
        <el-row justify="center" gutter="30">
          <el-col span="12">
            <!--            介绍图片-->
            <div class="about-img">
              <img style="width: 100%;height: 30%" src="../assets/image/img/a033.png" alt="">
            </div>
          </el-col>
          <!--            文本描述-->
          <el-col span="48" offset="1" push="1">
            <div>
              <h1 class="green_font" style="text-align: left">飞克泵业</h1>
              <!--              <p style="width: 100%; overflow-wrap: break-word">156</p>-->
              <p class="about-text">
                &nbsp; &nbsp;浙江飞克泵业有限公司是一家专业生产各类水泵及控制设备的水
                处理企业。公司产品主要为城市建设工程、农业灌溉、生活供水、消
                防、矿产、污水处理、园林喷灌及工业用水等行业提供全面的水处理
                解决方案。
              </p>
              <p class="about-text">
                &nbsp; &nbsp; 公司秉承“品质”、“创新” 、“未来” 的经营理念，致力于
                为顾客提供高科技、高品质的产品和服务。公司建立了完善的微机自
                动水泵测试平台，拥有专业的技术研发队伍，拥有精良先进的生产流
                水线，并有多项产品取得国家专利，获得国家质量信用企业称号。
                “克服阻力，”飞越梦想” 努力创新的“飞克人，将继续致力于技术
                的创新、质量的进步和服务的升华，为顾客创造和提供更大的价值。
              </p>
              <div class="green-button" style="text-align: left">
                <button>→</button>
              </div>
            </div>
          </el-col>
        </el-row>
        <!--          热线图片-->
        <el-row class="about-hot-img" align="center" justify="center" gutter="28">
          <el-col span="6" offset="16">
            <div class="gray-box">
              <h3 style="font-size: 1em;color: rgb(109,109,109)">全国热线</h3>
              <div>—</div>
              <h3 style="font-size: 1em;color: rgb(109,109,109)">0576 8068 3000</h3>
            </div>
          </el-col>

          <el-col span="6" offset="16">
            <div class="gray-box">
              <img src="../assets/image/img/a035.png" alt="">
            </div>
          </el-col>
          <el-col span="6" offset="16">
            <div class="gray-box">
              <img src="../assets/image/img/a036.png" alt="">
            </div>
          </el-col>
          <el-col span="6" offset="16">
            <div class="gray-box">
              <img src="../assets/image/img/a037.png" alt="" style="width: 45%;margin: 18px 0">
            </div>
          </el-col>
        </el-row>
        <!--        推荐产品-->
        <el-row>
          <el-col class="graw-font2"><h2>飞克泵业</h2></el-col>
        </el-row>

        <el-row>
          <el-col><h1 class="green_font">为您提供以下产品</h1></el-col>
        </el-row>
        <el-row gutter="20" justify="center">
          <el-col class="recommended-margin" span="6" v-for="item in 5" :key="item">
            <div class="recommended-box">
              <img class="recommended-img" src="../assets/image/img/a038.png" alt="">
            </div>
            <div class="black-font-bold">+ 全不锈钢潜水泵 +</div>
            <div class="pro-model-num-box"> WQD-S QQX-S</div>
            <span class="green-button-look">立 即 查 看</span>
          </el-col>
        </el-row>
        <!--        简单图片-->
        <el-row>
          <el-col>
            <div>
              <el-image style="width: 70%" :src="require('../assets/image/img/a043.png')"></el-image>
              <!--              <img src="../assets/image/img/a043.png" alt="">-->
            </div>
          </el-col>
        </el-row>
        <!--        背景图片-->
        <div class="back-img">
          <el-row class="more-img" gutter="30" justify="center" v-for="item in 4" :key="item">
            <div v-show="item%2===0">
              <el-col :span="6">
                <el-image :src="require('../assets/image/img/a045.png')"></el-image>
              </el-col>
              <el-col :span="6" offset="6">
                <div class="green-font-heavy">型号：WQD-S QDX-S WQ-S</div>
                <div>
                  <span class="graw-font">NO.1</span>
                  <span class="green-font-heavy big-font font-bold">全不锈钢潜水泵</span>
                  <br>
                  <br>
                  <br>
                  <div>
                    <span>特点：</span>
                    <p>特点</p>
                  </div>
                  <div>
                    <span>基本性能：</span>
                    <p>基本性能</p>
                  </div>
                  <div>
                    <span>应用领域：</span>
                    <p>应用领域</p>
                  </div>
                </div>
                <div>
                  <el-image></el-image>
                  <span>耐酸</span>
                  <span>耐碱</span>
                  <span>耐高温</span>
                </div>
              </el-col>
            </div>
          </el-row>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data () {
    return {
      input1: '',
      proList: [
        'banner01.png',
        'banner1.png',
        'banner03.png'
      ]
    }
  }
}
</script>
<!--el样式-->
<style scoped>
/*输入框样式*/
.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

/*轮播图样式*/
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
<style scoped lang="css">
h1, h2, h3, h4, p {
  margin: 0;
  padding: 0;
}

.el-row {
  margin: 20px;
}

.graw-font {
  color: rgb(230, 230, 230);
}

.graw-font2 {
  color: rgb(86, 86, 86);
}

/*关于飞克*/
.green_font {
  color: rgb(0, 119, 46);
}

/*描述文本样式*/
.about-text {
  font-size: 0.7em;
  width: 350px;
  height: auto;
  overflow-wrap: break-word;
  text-align: left;
}

/*关于 图片样式*/
.about-img {
  width: 75%;
  height: auto;
}

/*跳转箭头*/
.green-button {
  margin-top: 30px;
  text-align: left;
}

.green-button button {
  text-align: center;
  width: 30px;
  height: 30px;
  border: none;
  line-height: 30px;
  border-radius: 50%;
  background: rgb(11, 114, 52);
  font-size: 1em;
  color: white;
  font-weight: 800;
}

.gray-box {
  background-color: rgb(230, 230, 230);
  width: 200px;
  height: 100px;
}

.gray-box img {
  display: inline-block;
  width: 70%;
  margin: 22px 0;
}

/*热线*/
.about-hot-img .el-col {
  padding: 10px 0;
}

.about-hot-img h3 {
  margin: 0;
  padding: 10px;
}

.recommended-box {
  border-radius: 50%;
  /*width: 100%;*/
  /*height: 100%;*/
  width: 150px;
  height: 150px;
  border: 5px solid rgb(31, 80, 58);
}

.recommended-img {
  width: 40%;
  height: 80%;
  margin: 10px;
}

.black-font-bold {
  font-size: 1em;
  font-weight: 800;
}

.pro-model-num-box {
  width: 150px;
  height: 80px;
  box-sizing: border-box;
  text-align: center;
  padding: 31px 0;
  background-color: rgb(210, 210, 210);
  overflow-wrap: break-word;
}

.green-button-look {
  margin: 20px 0;
  display: inline-block;
  width: 55%;
  color: white;
  cursor: pointer;
  text-align: center;
  background-color: rgb(22, 71, 51);
  border-radius: 10px;
}

.recommended-margin div {
  margin: 20px 0;
}

.back-img {
  width: 100%;
  height: 1500px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('../assets/image/img/a044.png');
}

.more-img {
  padding-top: 123px;
}

.green-font-heavy {
  color: rgb(39, 83, 64);
}

.big-font {
  font-size: 1.6em;
}

.font-bold {
  font-weight: bolder;
}
</style>

<style scoped lang="sass">
@import "src/assets/sass/index"
</style>
