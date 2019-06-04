<template>
  <div class="SignUp">
    <form>
      <input type="email" placeholder="example@example.com" v-model="email" name="email">
      <input type="password" v-model="password" name="password">
      <input type="text" placeholder="John Jones" v-model="name" name="name">
      <input type="text" placeholder="DD.MM.YYYY" v-model="date" name="date">
      <input type="text" placeholder="Bauhaus University" v-model="company" name="company">
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
input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}
</style>