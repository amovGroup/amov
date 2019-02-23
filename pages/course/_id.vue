<template>
  <section class="container">
    <div class="max-width">
      <div class="course-board">
          <div class="course-board-classify">{{courseInfo.course.classify}}</div>
          <div class="course-board-title">{{courseInfo.course.title}}</div>
          <div class="course-board-subtitle">{{courseInfo.course.extraIntro}}</div>
          <div class="course-board-hr"></div>
          <div class="course-board-option">
              <el-row :gutter="50">
                  <el-col :span="12">
                      难度 &nbsp;&nbsp;&nbsp;&nbsp;<span>{{courseInfo.course.difficulty===1?'初级':courseInfo.course.difficulty===2?'中级':'高级'}}</span>
                  </el-col>
                  <el-col :span="12">
                      观看人数 &nbsp;&nbsp;&nbsp;&nbsp;<span>{{courseInfo.courseStatistic.pageView}}</span>
                  </el-col>
              </el-row>
          </div>
          <div class="course-board-intro">{{courseInfo.courseInfo.content}}</div>
          <div class="course-board-price">¥ {{courseInfo.course.price}}</div>
          <div class="course-board-purchase">
              <el-button type="primary" round class="course-board-btn" @click="clickTurn(courseInfo.courseInfo.courseUrl)">立即购买</el-button>
          </div>
      </div>
      <div class="course-detail">
          <el-row :gutter="50">
              <el-col :span=6>
                <div class="course-chapter">
                    <el-card :body-style="{ padding: '0px' }" >
                        <el-menu v-for="item in courseInfo.courseChapterList" :key="item.courseChapterId">
                            <el-menu-item index="1" class="course-banner" @click="partChange(item.courseChapterId,item.number)">
                              <span slot="title">
                                  <el-button type="text">
                                    {{item.title}}
                                  <br/><span style="font-size: 12px">{{item.subtitle}}</span>
                                  </el-button>
                              </span>
                            </el-menu-item>
                        </el-menu>
                    </el-card>
                </div>
              </el-col>
              <el-col :span="18">
                <div class="course-learn">
                    <el-card>
                        <div class="learn-title">我能学到什么?</div>
                        <!--<learn-point :points="points"></learn-point>-->
                      <div v-html="learnPoint" style="text-align: left"></div>
                    </el-card>
                </div>
                <div class="course-period">
                  <el-card>
                    <el-table :data="details" stripe style="width:100%;" height="300" @row-click="clickPeriod">
                      <el-table-column label="课时" prop="name">
                        <template slot-scope="scope">
                          <div class="period-title">第{{scope.row.number}}课时：{{scope.row.title}}</div>
                          <div class="period-content">{{scope.row.content}}</div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-card>
                </div>
              </el-col>
          </el-row>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    async asyncData({$axios,params}){
      const datum = await $axios.$get('/api/course/' + params.id);
      const courseChapterId = datum.body.courseChapterList[0].courseChapterId;
      const details = await $axios.$get('/api/course/chapter/' + courseChapterId);
      return {courseInfo:datum.body,details:details.body,learnPoint:datum.body.courseChapterList[0].learnItem}
    },
    data() {
      return {
        courseInfo:[],
        details:[],
        learnPoint:[]
      }
    },
    methods: {
      clickPeriod(row, event, column) {
        console.log(row)
        console.log(event)
        console.log(column)
        window.open('http://www.baidu.com')
      },
      clickTurn(url){
        window.open('http://' + url);
      },
      partChange(part,num){
        this.learnPoint = this.courseInfo.courseChapterList[num-1].learnItem;
        let datum = axios('/api/course/chapter/' + part)
          .then((data) => {
            this.details = data.data.body;
          })
          .catch(function(error){
            console.log(error)
          });
      }
    },
    components: { }
  }
</script>
