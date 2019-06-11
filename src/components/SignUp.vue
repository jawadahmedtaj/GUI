<template>
  <div class="SignUp">
    <form>
      <input type="email" placeholder="example@example.com" v-model="email" name="email">
      <input type="password" v-model="password" name="password" placeholder="password">
      <input type="text" placeholder="John Jones" v-model="name" name="name">
      <input type="date" placeholder="DD.MM.YYYY" v-model="date" name="date">
      <input type="text" placeholder="Bauhaus University" v-model="company" name="company">
      <button class="signUp signUpButton">Sign Up</button>
      <input class="signUp signUpBorder" type="reset">
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      name: "",
      date: "",
      company: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*Colors
https://coolors.co/323333-b4adea-fdfff7-209954-ffed65*/
input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}
.signUp{
  width: calc(100% - 50%);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
  position: relative;
}
.signUpBorder{
  border: 1 2 3 4;
  border-color: aqua;
  border-style: solid;
}
.signUpButton{
  background-color: #209954;
  color: white;
}
</style>