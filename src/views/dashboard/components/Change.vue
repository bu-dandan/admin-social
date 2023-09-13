<template>
    <div>
        <h1>今日动态转评赞统计</h1>
        <div id="staff" style="width: 100%;height: 120px;"> </div>
    </div>
</template>
  
<script>
import * as echarts from "echarts";
export default {
    name: 'Change',
    props: {
    },
    data() {
        return {
            date: [],
        }
    },
    mounted() {
        this.initChart()
    },
    methods: {
        initChart() {
            let chartDom = document.getElementById('staff');
            let myChart = echarts.init(chartDom);
            let option;
            option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'none'
                    },
                    valueFormatter: (value) => value / 1000
                },
                grid: {
                    left: '0',
                    right: '20',
                    bottom: '0',
                    top: '0',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    splitNumber: 8,
                    axisLabel: {
                        formatter: function (value, index) {
                            let val = value / 1000
                            return val == 0 ? val : val.toFixed(1) + 'k';
                        },
                        color: '#86909C',
                    },
                    splitLine: {
                        // show: false
                        lineStyle: {
                            color: '#E5E8EF',
                        },
                    }
                },
                yAxis: {
                    type: 'category',
                    data: ['点赞量', '评论量', '分享量'],
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        color: '#86909C',
                    },
                    axisTick: {
                        show: false
                    }
                },
                series: [
                    {
                        // name: '2012',
                        type: 'bar',
                        barWidth: "10",
                        itemStyle: {
                            color: '#5385f7',
                            borderRadius: 10,
                        },
                        labelLine: {
                            color: '#86909C',
                            // show: false,
                        },
                        data: [989, 1180, 1620]
                    }
                ]
            };

            option && myChart.setOption(option);
        }
    }
}
</script>
  
<style lang="scss" scoped>
.review-item {
    width: 25%;
}
</style>
  