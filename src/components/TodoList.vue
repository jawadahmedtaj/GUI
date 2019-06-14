<template>
  <div class="TodoList">
    <!--<apexchart type="bar" height="350" :options="chartOptions" :series="series"/>
    <apexchart1 type="line" height="350" :options="chartOptions" :series="series"/>-->
    <div class="holder">
      <!--<form @submit.prevent="addSkill">
        <input
          type="text"
          placeholder="Please enter a skill which you have"
          v-model="skill"
          v-validate="'min:5'"
          name="skill"
        >
        <transition
          name="alert-in"
          enter-active-class="animated flipInX"
          leave-active-class="animated flipOutX"
          <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
        </transition>
      </form>>-->
      <ul>
        <transition-group
          name="list"
          enter-active-class="animated bounceInUp"
          leave-active-class="animated bounceOutDown"
        >
          <li v-for="(data, index) in skills" :key="index">
            {{ index+1 }}. {{ data.skill }}
            <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
          </li>
        </transition-group>
      </ul>
    </div>
  </div>
</template>

<script>
//import VueApexCharts from "vue-apexcharts";
export default {
  name: "TodoList",
  components: {
    //apexchart: VueApexCharts,
    //apexchart1: VueApexCharts
  },
  data() {
    return {
      skill: "",
      skills: [
        { skill: "Vue.js" },
        { skill: "Front-end Developer" },
        { skill: "Graphic Designer" }
      ],
      series: [
        {
          name: "",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
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
  },
  methods: {
    /*
    addSkill() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.skills.push({ skill: this.skill });
          this.skill = "";
        } else {
        }
      });
    },*/
    remove(id) {
      this.skills.splice(id, 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.holder {
  background: #fff;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}
p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}
.container {
  box-shadow: 0px 0px 40px lightgray;
}
input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}
.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -20px;
}
i {
  float: right;
}
/* .alert-in-enter-active {
  animation: bounce-in 0.5s;
}
.alert-in-leave-active {
  animation: bounce-in 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
} */
</style>