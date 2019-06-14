!<template>
  <div id="chart">
    <form>
      <div v-for="(data,index) in series" :key="index">
        <label>Please enter a name for configuration:&nbsp;</label>
        <input
          type="text"
          placeholder="Name of Configuration"
          v-model="data.name"
          name="configName"
        >
        <br>
        <span v-for="(value, index1) in data.data" :key="index1">
          <input type="number" v-model="data.data[index1]">
        </span>
      </div>
    </form>
    <!-- <form>
      <label>Please enter a name for configuration:&nbsp;</label>
      <input
        type="text"
        placeholder="Name of Configuration"
        v-model="series[0].name"
        name="configName"
      >
      <br>
      {{series[0].data[1]}}
    </form>-->
    <apexchart type="bar" height="350" :options="chartOptions" :series="series"/>
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
  name: "Chart",
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      series: [
        {
          name: "",
          data: [44, 55, 57, 56, 61]
        },
        {
          name: "",
          data: [76, 85, 101, 98, 87]
        },
        {
          name: "",
          data: [35, 41, 36, 26, 45]
        }
      ],
      chartOptions: {
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "50%",
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },

        xaxis: {
          categories: ["CPU", "RAM", "PCI", "Disk", "Network"]
        },
        yaxis: {
          title: {
            text: "Values"
          }
        },
        fill: {
          opacity: 1
        }
      }
    };
  }
};
</script>