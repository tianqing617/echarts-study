<template>
  <div id="main" style="width: 600px;height:400px;"></div>
</template>

<script>
import echarts from 'echarts';

export default {
  name: 'EventDemo',
  mounted() {
    // 基于准备好的dom，初始化ECharts实例
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    var option = {
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    // 处理点击事件并且跳转到相应的百度搜索页面
    myChart.on('click', function (params) {
      window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
    });
  }
}
</script>
