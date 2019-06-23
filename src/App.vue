<template>
  <div id="app">
    <div id="nav">
      <Slide>
        <router-link to="/">Login</router-link>
        <router-link to="/TodoList">Hardware Configuration</router-link>
        <router-link to="/barChart">Bar Chart</router-link>
        <router-link to="/boxPlot">Box Plot</router-link>
        <router-link to="/About">About</router-link>
        <router-link to="/SignUp">Sign up</router-link>
        <router-link to="/BackupBar">BackupBar</router-link>
      </Slide>

      <router-view/>
    </div>
  </div>
</template>

<script>
//https://github.com/mbj36/vue-burger-menu
import { Slide } from "vue-burger-menu";
export default {
  components: {
    Slide
  }
};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
body {
  background-color: #eeeeee;
  font-family: "Montserrat", sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}
body,
html {
  margin: 0;
  height: 95%;
}
#app {
  width: 50%;
}
.bm-item-list {
  margin-left: 0% !important;
}
#nav {
  padding: 20px 20px 20px 0;
}
#nav a {
  padding: 10px;
  text-decoration: none;
  border-radius: 3px;
  background-color: #323333;
  color: #687f7f;
  font-weight: bold;
}
</style>