<template>
 <div>
      <header class="banner">
        <!-- <img src="../assets/img/logo.png" class="banner-logo" alt="logo"> -->
      </header>
      <div class="center-box">
        <div class="flash-bar danger" v-show="loginErr">Loging Failed {{loginErrMsg}}</div>
        <section class="login-box">
          <div class="login-header">
            <h3>
              Blog Login
            </h3>
          </div>
          <div class="login-body">
            <input type="text" class="form-control top" placeholder="Username" v-model="username">
            <input type="password" class="form-control bottom" placeholder="Password" v-model="password" @keyup.13="login">
          </div>
          <div class="login-footer">
            <div class="login-button-Container">
              <button class="btn btn-save btn-block" @click="login">
                Login
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
</template>

<script>
import {login} from '@/api';
import { mapActions } from 'vuex';
export default {
  data () {
    return {
      username: '',
      password: '',
      loginErr: false,
      loginErrMsg: ''
    }
  },
  methods: {
    ...mapActions(['createToken']),
      async login() {
        try {
            await this.createToken({
              username: this.username,
              password: this.password
            });
        } catch (error) {
           console.log(error)
        }
      }
  }
}
</script>

<style lang="scss" scoped>
@import "./../common/styles/variable";
  .banner{
    padding: 10px 0;
    text-align: center;
    border-bottom:1px solid #EEE;
    margin-bottom: 20px;
    .banner-logo{
      height:  35px;
    }
  }
  .center-box{
    max-width :400px;
    margin: 0 auto;
    padding: 32px 15px;
    .login-box{
      background: #fafafa;
      border-radius: 10px;
      box-shadow: 0 0px 2px #CCC;
      padding: 15px;
      .login-header{
        text-align: center;
        line-height: 1.5;
        margin: 0 0 10px 0;
      }
      .login-button-Container{
        width: 200px;
        margin: 0 auto;
      }
    }
  }
  .flash-bar{
    box-sizing: border-box;
    width: 100%;
    padding: 15px;
    color: #fff;
    border: 1px solid transparent;
    border-radius: 6px;
    margin-bottom: 10px;
    &.success{
      background-color: $blue;
      border-color: $blue;
    }
    &.danger{
      background-color: $red;
      border-color: $red;
    }
    &.info{
      background-color: $dark;
      border-color: $dark;
      text-align: center;
    }
  }
  .btn{
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 3px;
    padding: 6px 10px;
    text-align: center;
    vertical-align: middle;
    outline: 0;
    &.btn-save{
      color: #fff;
      background-color: $purple;
      border-color: $purple;
    }
    &.btn-info{
      color: #fff;
      background-color: $grey;
      border-color: $grey;
    }
    &.btn-border{
      color: $dark;
      background-color: white;
      border-color: $grey;
      &:hover{
        border-color: $purple;
      }
    }
    &.btn-cancel{
      color: #fff;
      background-color: $red;
      border-color: $red;
    }
    &.btn-block{
      width: 100%;
      box-sizing: border-box;
    }
  }
  .form-control{
    color: $black;
    box-sizing: border-box;
    padding: 10px 8px;
    width: 100%;
    height: auto;
    box-shadow: none;
    border: 1px solid $border;
    background-color: #fff;
    outline: 0;
    &.top{
      border-radius: 5px 5px 0 0;
      margin-bottom: 0;
    }
    &.bottom{
      border-radius: 0 0 5px 5px;
      border-top: 0;
      margin-bottom: 20px;
    }
  }
</style>
