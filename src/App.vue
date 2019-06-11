<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Hardware Configuration</router-link>
      <router-link to="/Chart">Chart</router-link>
      <router-link to="/About">About</router-link>
      <router-link to="/SignUp">Sign up</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
#nav {
  padding: 20px 20px 20px 0;
}
#nav a {
  padding: 10px;
  text-decoration: none;
  background: #ffffff;
  border-radius: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
}
</style>