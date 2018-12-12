<template>
  <section class="container">
    <div class="max-width">
      <div class="course-board">
          <div class="course-board-classify">PIXHAWK高级</div>
          <div class="course-board-title">ROS Mavos开发教程</div>
          <div class="course-board-subtitle">（含开发环境）</div>
          <div class="course-board-hr"></div>
          <div class="course-board-option">
              <el-row :gutter="50">
                  <el-col :span="12">
                      难度 &nbsp;&nbsp;&nbsp;&nbsp;<span>高级</span>
                  </el-col>
                  <el-col :span="12">
                      观看人数&nbsp;&nbsp;
                  </el-col>
              </el-row>
          </div>
          <div class="course-board-intro">
              该款无人车开发平台包含：PIXHAWK控制系统(包含GPS等)，无线数据传输模块(标配)，动力和执行机构(标配可定制)，上位机地面站系统(标配),树莓派协处理器（选配），激光雷达(选配)，英伟达TX2(选配)。帮助大家迅速搭建好一整套的无人车机器视觉开发环境，提供调试到高级开发级别的课程。再利用我们提供的Demo例程上手开发工作，会事半功倍，更加去专注于算法的开发，让研发更高效。
          </div>
          <div class="course-board-price">¥ 998</div>
          <div class="course-board-purchase">
              <el-button type="primary" round class="course-board-btn">立即购买</el-button>
          </div>

      </div>
      <div class="course-detail">
          <el-row :gutter="50">
              <el-col :span=6>
                <div class="course-chapter">
                    <el-card :body-style="{ padding: '0px' }" >
                        <el-menu>
                            <el-menu-item index="1" class="course-banner">
                              <span slot="title">
                                  <el-button type="text">王炸</el-button>
                              </span>
                            </el-menu-item>
                            <el-menu-item index="1" class="course-banner">
                              <span slot="title">
                                  <el-button type="text">不要</el-button>
                              </span>
                            </el-menu-item>
                            <el-menu-item index="1" class="course-banner">
                              <span slot="title">
                                  <el-button type="text">一对三</el-button>
                              </span>
                            </el-menu-item>
                            <el-menu-item index="1" class="course-banner">
                              <span slot="title">
                                  <el-button type="text">我就剩一张牌了</el-button>
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
                        <learn-point :points="points"></learn-point>
                    </el-card>
                </div>
                <div class="course-period">
                    <el-card>
                        <el-table :data="tablePeriod" stripe style="width:100%;" height="300" @row-click="clickPeriod">
                            <el-table-column label="课时" prop="name">
                                <template slot-scope="scope">
                                    <div class="period-title">{{scope.row.title}}</div>
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
import LearnPoint from '@/components/LearnPoint'
export default {
    data() {
        return {
            tablePeriod: [{title:"第1课时", content:"难度：入门"},{title:"第2课时", content:"难度：入门到放弃"},{title:"第3课时", content:"难度：入门到放弃"},{title:"第4课时", content:"难度：入门到放弃"},{title:"第5课时", content:"难度：入门到放弃"},{title:"第6课时", content:"难度：入门到放弃"},{title:"第7课时", content:"难度：入门到放弃"},{title:"第8课时", content:"难度：入门到放弃"},{title:"第9课时", content:"难度：入门到放弃"},{title:"第10课时", content:"难度：入门到放弃"},{title:"第11课时", content:"难度：入门到放弃"},{title:"第12课时", content:"难度：放弃"}],
            points: ['吃瓜吃瓜吃瓜','吃瓜吃瓜吃瓜','吃瓜吃瓜吃瓜','吃瓜吃瓜吃瓜','吃瓜吃瓜吃瓜']
        }
    },
    methods: {
        clickPeriod(row, event, column) {
            console.log(row)
            console.log(event)
            console.log(column)
            window.open('http://www.baidu.com')
        }
    }, 
    components: {
        LearnPoint
    }
}
</script>