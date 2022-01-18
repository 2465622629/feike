<template>
  <div class="index">
    <el-scrollbar height="500px">
      <!--      采用布局容器-->
      <div class="common-layout" style="height: auto">
        <el-row>
          <el-col>
            <!--    轮播图-->
            <el-carousel height="300px">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3 class="small">{{ item }}</h3>
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
            <h2 style="color: rgb(144,144,144); font-weight: 400">诚信为重 &nbsp; &nbsp; 合作共赢</h2>
          </el-col>
        </el-row>
<!--        公司简介-->
        <el-row>
          <el-col></el-col>
        </el-row>
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
      input1: ''
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
/*关于飞克*/
.green_font {
  color: rgb(0, 119, 46);
}

</style>
