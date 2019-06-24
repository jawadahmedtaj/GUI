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
        <span v-for="(featName,ind) in feat" :key="ind">
          <br>
          <input type="checkbox" checked>
          {{featName}}
        </span>
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
      var len = this.series.length;
      console.log(len);
      var entryData = {
        name: json.results.row[0].data[0]._columname + " " + ++len,
        data: [
          json.results.row[len].data[2].__text,
          json.results.row[len].data[3].__text,
          json.results.row[len].data[4].__text,
          json.results.row[len].data[5].__text,
          json.results.row[len].data[6].__text,
          json.results.row[len].data[7].__text,
          json.results.row[len].data[8].__text
        ]
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
      feat: json.results.row[0].data[0].__text.split(","),
      //nameCheck: Object.keys(json.results.row[0].data).length,
      series: [
        {
          name: json.results.row[0].data[0]._columname + " 1",
          data: [
            //json.results.row[0].data[2].__text,
            json.results.row[0].data[3].__text,
            //json.results.row[0].data[4].__text,
            //json.results.row[0].data[5].__text,
            //json.results.row[0].data[6].__text,
            //json.results.row[0].data[7].__text
            // json.results.row[0].data[8].__text
          ]
        },
        {
          name: json.results.row[1].data[0]._columname + " 2",
          data: [
            //json.results.row[1].data[2].__text,
            json.results.row[1].data[3].__text,
            //json.results.row[1].data[4].__text,
            //json.results.row[1].data[5].__text,
            //json.results.row[1].data[6].__text,
            //json.results.row[1].data[7].__text
            //json.results.row[1].data[8].__text
          ]
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
            endingShape: "flat"
          },
          dataLabels: {
            position: "center",
            maxItems: 500,
            hideOverflowingLabels: false
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
            //"PSNR (dB)",
            "Energy (J)",
            //"SSIM",
            //"Time (s)",
            //"Watt (w)",
            //"Speed (mbit/s)"
            // "Size (mbit)"
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