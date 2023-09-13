<template>
    <div>
        <h2>{{ title }}</h2>
        <div :id="id" style="width: 100%;height: 120px;"></div>
    </div>
</template>
  
<script>
import * as echarts from "echarts";
export default {
    name: 'MinChart',
    props: {
        title: '',
        id: '',
        type: ''
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
            let that = this
            let chartDom = document.getElementById(this.id);
            let myChart = echarts.init(chartDom);
            let option;
            option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'line',
                        lineStyle: {
                            type: 'solid',
                            color: '#BBBBBB'
                        }
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
                    type: 'category',
                    axisLabel: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        color: '#86909C',
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                },
                series: [
                    {
                        // name: '2012',
                        type: that.type,
                        smooth: true,
                        showSymbol: false,
                        barWidth: "10",
                        itemStyle: {
                            color: '#5385f7',
                            borderRadius: 10,
                        },
                        select: {
                            itemStyle: {
                                color: '#333'
                            }
                        },
                        labelLine: {
                            color: '#86909C',
                            // show: false,
                        },
                        data: [1.2, 2.3, 2.8, 2.9, 3.5, 3.2, 4, 5, 4.5, 6]
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
  