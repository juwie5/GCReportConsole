<template>
  <div class="container">
    <div>
      <div class="head">
        <img src="../assets/gclogo.svg" alt="">
        <h3>Winners Golden Chance</h3>
      </div>
      <div class="frmgrp">
        <h3>LOGIN</h3>
        <form  id="loginform">
          <label for="Username"></label>
          <input type="email" name="email" placeholder="Username">
          <label for="Password"></label>
          <input type="password" name="password" placeholder="Password">
          <select name="worklist" id="" form="loginform">
            <option ></option>
            <option value="home">Home</option>
            <option value="Office">Office</option>
          </select>
          <input type="submit" value="Login to your account">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
      emai:null,
      password: null,
      feedback: null,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
