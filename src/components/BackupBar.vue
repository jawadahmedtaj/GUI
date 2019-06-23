!<template>
  <div id="BackupBar">
    <form>
      <div v-for="(data,index) in series" :key="index">
        <label>Configuration name:&nbsp;</label>
        <input
          class="inputName"
          type="text"
          placeholder="Name of Configuration"
          v-model="data.name"
          name="configName"
        >
        <br>
        <span v-for="(value, index1) in data.data" :key="index1">
          <label>{{chartOptions.xaxis.categories[index1]}}:</label>&nbsp;
          <input type="number" v-model="data.data[index1]">&nbsp;
          <!--<span v-if="index1 == 2">
            <br>
          </span>-->
        </span>
        <button type="button" v-on:click="removeEntry(index)">Remove this entry</button>
      </div>
      <button type="button" v-on:click="addEntry()">Press to add a field</button>
    </form>
    <BackupBar type="bar" height="350" :options="chartOptions" :series="series"/>
  </div>
</template>
<!--<script src="https://cdn.jsdelivr.net/npm/vue-apexcharts"></script>-->
<!--<script src="https://cdn.jsdelivr.net/npm/apexcharts@latest"></script>-->
<script>
//https://github.com/apexcharts/vue-apexcharts
//https://stackoverflow.com/questions/51640450/apexcharts-bar-chart-not-appearing-in-vue-js-project
//https://github.com/apexcharts/vue-apexcharts/issues/1
import VueApexCharts from "vue-apexcharts";
import json from "../assets/measurements.json";
export default {
  name: "Chart",
  components: {
    BackupBar: VueApexCharts
  },
  methods: {
    addEntry() {
      var len = this.series.length + 1;
      var entryData = {
        name: "Configuration " + len,
        data: [44, 55, 57, 56, 61, 72]
      };
      this.series.push(entryData);
      //console.log(entryData);
    },
    removeEntry(id) {
      //console.log(id);
      this.series.splice(id, 1);
    }
  },
  data() {
    return {
      myJson: json,
      //nameCheck: Object.keys(json.results.row[0].data).length,
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
        chart: {
          toolbar: {
            show: true,
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true
            }
          }
        },
        title: {
          text: "Bar chart",
          align: "center"
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "50%",
            endingShape: "rounded"
          }
        },
        legend: {
          showForNullSeries: false,
          showForZeroSeries: false,
          onItemClick: {
            toggleDataSeries: true
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
  position: relative;
  margin-top: 5px;
  margin-bottom: 5px;
}
input {
  width: 50px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.inputName {
  width: 150px;
}
.apexcharts-tooltip {
  background: #323333;
  color: orange;
}
</style>