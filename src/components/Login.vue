!<template>
  <div id="Login">
    <input type="email" placeholder="example@example.com" v-model="email" name="email">
    <input type="password" v-model="password" name="password" placeholder="password">
    <button type="button" v-on:click="Login()">Login</button>
    <button class="reset" type="button" v-on:click="reset()">Reset</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    Login() {
      if (this.email == "jawad" && this.password == "123") {
        alert("Logged in, welcome! " + this.email);
        window.open("http://localhost:8080/#/TodoList", "_self");
      } else {
        alert("Incorrect info, try again!");
      }
    },
    reset() {
      this.email = "";
      this.password = "";
    }
  }
};
</script>

<style scoped>
input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}
button {
  width: calc(100% - 50%);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #209954;
  color: white;
}
.reset {
  background-color: #323333;
  color: #687f7f;
}
</style>
