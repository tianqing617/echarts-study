<template>
   <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
  <div id="main" style="width: 600px;height:400px;"></div>
</template>

<script>
import echarts from 'echarts';

export default {
  name: 'EchartsSimple',
  computed: {
    tableData() {
      return this.getData();
    }
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption(this.getOptions());
  },
  methods: {
    getData() {
      const data = [];
      for (let i = 1; i < 30; i++) {
        data.push([i, 0]);
      }
      return data;
    },
    getOptions() {
      return {
        xAxis: {
          // show: false,
          type: 'value'
        },
        yAxis: {
          // show: false,
          type: 'value'
        },
        dataZoom: [
          {
            // 这个dataZoom组件，默认控制x轴。
            type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
            // show: false,
            start: 10, // 左边在 10% 的位置。
            end: 60, // 右边在 60% 的位置。
            // labelFormatter: function (value) {
            //   return parseInt(value)
            // },
            labelPrecision: 0
          },
        ],
        series: [
          {
            type: 'scatter', // 这是个『散点图』
            itemStyle: {
              opacity: 1
            },
            symbolSize: function (val) {
              return val[2] * 40;
            },
            data: this.tableData,
          }
        ]
      }
    }
  }
}
</script>
