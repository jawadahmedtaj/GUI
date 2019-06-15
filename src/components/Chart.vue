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
          &nbsp;
          <label>{{chartOptions.xaxis.categories[index1]}}:</label>&nbsp;
          <input type="number" v-model="data.data[index1]">
          <span v-if="index1 == 2">
            <br>
          </span>
        </span>
        <button type="button" v-on:click="removeEntry(index)">Remove this entry</button>
      </div>
      <button type="button" v-on:click="addEntry()">Press to add a field</button>
    </form>
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
  methods: {
    addEntry() {
      var len = this.series.length + 1;
      var entryData = {
        name: "Configuration " + len,
        data: [44, 55, 57, 56, 61, 72]
      };
      this.series.push(entryData);
      console.log(entryData);
    },
    removeEntry(id) {
      console.log(id);
      this.series.splice(id, 1);
    }
  },
  data() {
    return {
      series: [
        {
          name: "Configuration 1",
          data: [44, 55, 57, 56, 61, 72]
        },
        {
          name: "Configuration 2",
          data: [76, 85, 101, 98, 87, 72]
        },
        {
          name: "Configuration 3",
          data: [35, 41, 36, 26, 45, 72]
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
        zoom: {
          enabled: true,
          type: "y",
          zoomedArea: {
            fill: {
              color: "#90CAF9",
              opacity: 0.4
            },
            stroke: {
              color: "#0D47A1",
              opacity: 0.4,
              width: 1
            }
          }
        },
        legend: {
          showForNullSeries: false,
          showForZeroSeries: false,
          onItemClick: {
            toggleDataSeries: false
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
          categories: [
            "CPU-SingleCore",
            "CPU-MultiCore",
            "RAM",
            "PCI",
            "Disk",
            "Network"
          ]
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

<style scoped>
button {
  margin-left: 5px;
  margin-top: 5px;
}
</style>