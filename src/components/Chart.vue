!<template>
  <div id="chart">
    <apexchart type="line" height="350" :options="chartOptions" :series="series"/>
  </div>
</template>
<!--<script src="https://cdn.jsdelivr.net/npm/vue-apexcharts"></script>-->
<!--<script src="https://cdn.jsdelivr.net/npm/apexcharts@latest"></script>-->
<script>
//https://github.com/apexcharts/vue-apexcharts
//https://stackoverflow.com/questions/51640450/apexcharts-bar-chart-not-appearing-in-vue-js-project
//https://github.com/apexcharts/vue-apexcharts/issues/1
import VueApexCharts from "vue-apexcharts";
export default {
  el: "#chart",
  name: "Chart",
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
        {
          name: "Potatoes",
          data: [10, 20, 90, 40, 50, 60]
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight"
        },
        title: {
          text: "Product Trends by Month",
          align: "left"
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep"
          ]
        }
      }
    };
  }
};
</script>
