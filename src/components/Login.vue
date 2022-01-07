<template>
  <div class="container">
    <div>
      <div class="head">
        <img src="../assets/gclogo.svg" alt="">
        <h3>Winners Golden Chance</h3>
      </div>
      <div class="frmgrp">
        <h3>LOGIN</h3>
        <form @submit.prevent="login" id="loginform">
          <label for="Username"></label>
          <input type="email" name="email" placeholder="Username" v-model="email">
          <label for="Password"></label>
          <input type="password" name="password" placeholder="Password" v-model="password">
          <select name="worklist" form="loginform" v-model="station">
            <option value="home">Home</option>
            <option value="office">Office</option>
          </select>
          <p>{{feedback}}</p>
          <input type="submit" value="Login to your account">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebaseAuth from '../services/firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
export default {
  name: 'Login',
  data(){
    return{
      email:null,
      password: null,
      feedback: null,
      station: null,
      uid: null
    }
  },
  methods:{
    //Login auth with firebase
    login(){
      if(this.email && this.password){
        signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          this.uid = userCredential.user.uid
           localStorage.setItem('uid', this.uid)
           localStorage.setItem('station', this.station)
          this.$router.push({name: 'Home'})
        }).catch( error => {
          this.feedback = error.message
        })
         this.feedback = null;
      } else {
        this.feedback = 'Please fill on both fields'
      }
    }
  }
}
</script>


