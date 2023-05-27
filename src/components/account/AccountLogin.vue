<template>
  <div id="account-login">
    <div id="account-login-content">
      <h5>Login with your Rig ID</h5>

      <input
        id="username"
        type="text"
        class="form-control"
        placeholder="Email/Username"
      />
      <input
        id="password"
        type="password"
        class="form-control"
        placeholder="Password"
      />
      <button class="btn btn-dark rounded" @click="login()" id="login">
        Login
      </button>
      <button class="btn btn-dark rounded" id="forgot-password">
        Password Reset
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "AccountLogin",
  data() {
    return {
      isAuthenticated: false,
    };
  },
  methods: {
    login() {
      axios.get("http://localhost:3000/login");
    },
  },
});
</script>

<style scoped>
#account-login {
  position: fixed;
  left: 10%;
  width: 80%;
  right: 10%;
  height: 100%;
  background-color: black;
  border-radius: 0%;
  text-align: center;
  top: 200px;
}

#account-login-content {
  position: fixed;
  left: 10%;
  right: 10%;
  top: 200px;
  text-align: center;
}
#username {
  position: fixed;
  text-align: center;
  top: 250px;
  left: 40%;
  width: 20%;
  right: 40%;
}
#password {
  position: fixed;
  text-align: center;
  top: 300px;
  left: 40%;
  width: 20%;
  right: 40%;
}
#login {
  position: fixed;
  text-align: center;
  top: 350px;
  left: 40%;
  width: 10%;
  right: 40%;
  margin: 1px;
}
#forgot-password {
  position: fixed;
  text-align: center;
  top: 350px;
  left: 50%;
  width: 10%;
  right: 40%;
  margin: 1px;
}
</style>
