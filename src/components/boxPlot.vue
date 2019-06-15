!<template>
  <div id="boxPlot">
    <boxPlot type="candlestick" height="350" :options="chartOptions" :series="series"/>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  name: "boxChart",
  components: {
    boxPlot: VueApexCharts
  },
  data() {
    return {
      series: [
        {
          data: [
            {
              x: "CPU - Single Core",
              y: [6629.81, 6650.5, 6623.04, 6633.33]
            },
            {
              x: "CPU - Multi Core",
              y: [6632.01, 6643.59, 6620, 6630.11]
            }
          ]
        }
      ],
      chartOptions: {
        title: {
          text: "Box Plot",
          align: "center"
        },
        xaxis: {
          type: "text"
        },
        tooltip: {
          enabled: true,
          followCursor: true
        }
      }
    };
  }
};
</script>

<style scoped>
</style>