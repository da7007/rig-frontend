<template>
  <div id="account-login">
    <div id="account-login-content">
      <h5>Login with your Rig ID</h5>
      <input id="username" type="text" class="form-control" placeholder="Email Address" v-model="email" />
      <input id="password" type="password" class="form-control" placeholder="Password" v-model="password" />
      <button class="btn btn-dark rounded" @click="login(email, password)" id="login">Login</button>
      <button class="btn btn-dark rounded" id="forgot-password">Password Reset</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import auth from "@/auth/auth";

export default defineComponent({
  name: "AccountLogin",
  data() {
    return {
      email: "" as string,
      password: "" as string,
    };
  },
  methods: {
    async login(email: string, password: string) {
      interface LoginRequest {
        email_address: string;
        password: string;
      }

      const request: LoginRequest = {
        email_address: email,
        password: password,
      };

      await axios
        .post("http://localhost:3000/login", null, { params: request })
        .then((response) => {
          if (response.status === 200) {
            auth.setAuth.loggedIn = true;
            this.$router.push("/");
          } else {
            auth.setAuth.loggedIn = false;
          }
        });
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
  width: 9.75%;
  right:50.25%;
}

#forgot-password {
  position: fixed;
  text-align: center;
  top: 350px;
  width: 9.75%;
  left: 50.25%;
  right: 40%;
}
</style>
