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
              <el-col class="green-font-color title-font-size">招聘岗位</el-col>
            </el-row>
            <el-row>
              <el-col class="green-font-color" style="font-size: 1.3em">人事行政经理</el-col>
            </el-row>
            <el-row justify="center" align="middle" gutter="30" class="font-weight-box">
              <el-col :span="10"><span>招聘单位：</span>人事行政经理</el-col>
              <el-col :span="10"><span>工作地点：</span>台州温县</el-col>
              <el-col :span="10"><span>工作经验：</span>两年以上</el-col>
              <el-col :span="10"><span>学历要求：</span>大专以上</el-col>
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
                  <el-space direction="vertical" :size="30" alignment="start">
                    <el-row align="middle" justify="start" class="my-form">
                      <el-col :span="12">
                        <el-form-item label="真实姓名">
                          <el-input v-model:form="recruitmentFrom.userRealName"></el-input>
                        </el-form-item>
                      </el-col>

                      <el-col :span="12">
                        <el-form-item label="手机号码">
                          <el-input v-model:form="recruitmentFrom.userPhone"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>

                    <el-row>
                      <el-col :span="12">
                        <el-form-item label="年龄">
                          <el-input v-model:form="recruitmentFrom.userAge"></el-input>
                        </el-form-item>
                      </el-col>

                      <el-col :span="12">
                        <el-form-item label="邮箱地址">
                          <el-input v-model:form="recruitmentFrom.userEmail"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>

                    <el-row>
                      <el-col :span="12">
                        <el-form-item label="民族">
                          <el-input v-model:form="recruitmentFrom.userNational"></el-input>
                        </el-form-item>
                      </el-col>

                      <el-col :span="12">
                        <el-form-item label="籍贯">
                          <el-input v-model:form="recruitmentFrom.userNativePlace"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-form-item label="毕业院校">
                          <el-input v-model:form="recruitmentFrom.userSchool"></el-input>
                        </el-form-item>
                      </el-col>

                      <el-col :span="12">
                        <el-form-item label="工作年限">
                          <el-input v-model:form="recruitmentFrom.userWorkTime"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="24">
                        <el-form-item label="薪资要求">
                          <el-input v-model:form="recruitmentFrom.userMoneyRequire"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="24">
                        <el-form-item label="自我评价">
                          <el-input type="textarea" v-model:form="recruitmentFrom.userSelfAssessment"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col>
                        <el-upload
                          class="upload-demo"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :on-preview="handlePreview"
                          :on-remove="handleRemove"
                          :before-remove="beforeRemove"
                          multiple
                          :limit="3"
                          :on-exceed="handleExceed"
                          :file-list="fileList"
                        >
                          <el-button type="primary">简历上传</el-button>
                          <template #tip>
                            <div class="el-upload__tip">
                              jpg/png files with a size less than 500kb
                            </div>
                          </template>
                        </el-upload>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col>
                        <el-form-item>
                          <el-button type="primary">提交</el-button>
                          <el-button>Cancel</el-button>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </el-space>
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
