<template>
  <div class="online">
    <el-container>
      <el-main>
        <el-scrollbar>
          <el-space direction="vertical" :size="30">
            <el-row>
              <el-col>
                <div class="start-img">
                  <el-image :src="require('@/assets/image/img/banner5.png')"></el-image>
                  <div class="start-img-font">
                    <div class="start-img-font-title">更多优质工作就在</div>
                    <div class="start-img-font-title">飞克泵业</div>
                    <div class="start-img-font-small">飞克泵业一”家专业生产各类水泵及控制设备的的水处理企业</div>
                    <div class="start-img-font-buttons">
                      <div class="start-img-button-yes">选择飞克</div>
                      <div class="start-img-button-no">选择未来</div>
                    </div>
                    <div>全国招聘热线: 0576 -8068-3000</div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col>招聘岗位</el-col>
            </el-row>
            <el-row>
              <el-col>人事行政经理</el-col>
            </el-row>
            <el-row justify="center" align="middle">
              <el-col :span="6">招聘单位：人事行政经理</el-col>
              <el-col :span="6">工作地点：人事行政经理</el-col>
              <el-col :span="6">工作经验：人事行政经理</el-col>
              <el-col :span="6">学历要求：人事行政经理</el-col>
            </el-row>
            <el-row>
              <el-col>
                <div>任职资格：</div>
                <ol>
                  <li>40岁以下；</li>
                  <li>熟悉人力资源六大模块相关业务的计划、开展、落实；</li>
                  <li>对行政管理相关的安保、环保、对外关系有一定的工作经验；</li>
                  <li>有亲和力、情商高、接地气；</li>
                </ol>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div class="dir" style="width: 1111px;height: 10px">
                  <el-divider></el-divider>
                </div>
              </el-col>
            </el-row>
            <!--            formPart-->
            <el-row>
              <el-col :span="24">
                <el-form ref="formRef" :model="recruitmentFrom" label-width="120px">
                  <el-form-item label="真实姓名">
                    <el-input v-model:form="recruitmentFrom.userRealName"></el-input>
                  </el-form-item>

                  <el-form-item label="真实姓名">
                    <el-input v-model:form="recruitmentFrom.userRealName"></el-input>
                  </el-form-item>

                  <el-form-item label="真实姓名">
                    <el-input v-model:form="recruitmentFrom.userRealName"></el-input>
                  </el-form-item>

                  <el-form-item label="真实姓名">
                    <el-input v-model:form="recruitmentFrom.userRealName"></el-input>
                  </el-form-item>

                  <el-form-item label="真实姓名">
                    <el-input v-model:form="recruitmentFrom.userRealName"></el-input>
                  </el-form-item>
                </el-form>
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
  name: 'OnlineRecruitment',
  data () {
    return {
      recruitmentFrom: {
        userRealName: '',
        userPhone: '',
        userAge: '',
        userEmail: '',
        userNational: '',
        userNativePlace: '',
        userSchool: '',
        userWorkTime: '',
        userMoneyRequire: '',
        userSelfAssessment: '',
        userFile: ''
      }
    }
  }
}
</script>

<style scoped lang="sass">
@import "src/assets/sass/online.sass"
</style>
