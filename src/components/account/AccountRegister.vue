<template>
    <div id="account-register">
        <div id="account-register-content">
            <h5 id="account-register-heading">Register your Rig ID</h5>

            <input id="email" type="text" class="form-control" placeholder="Email Address" v-model="email" />

            <input id="username" type="text" class="form-control" placeholder="Pick a username" v-model="username" />

            <input id="password" type="password" class="form-control" placeholder="Password" v-model="password" />
            <button class="btn btn-dark rounded" @click="register(email, username, password)" id="login">
                Register
            </button>
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
            username: "" as string,
            password: "" as string,
        };
    },
    methods: {
        async register(email: string, username: string, password: string) {
            interface RegisterRequest {
                email_address: string;
                username: string;
                password: string;
            }

            const request: RegisterRequest = {
                email_address: email,
                username: username,
                password: password,
            };
            if (request.email_address !== "" && request.email_address.includes("@") && request.username !== "" && request.password.length > 10) {
                await axios
                    .post("http://localhost:3000/register", null, { params: request })
                    .then((response) => {
                        if (response.status === 200) {
                            auth.setAuth.loggedIn = true;
                            this.$router.push("/");
                        } else {
                            auth.setAuth.loggedIn = false;
                        }
                    });
            }
            else {
                alert("Email, username must be valid and your password must be greater than 10 characters!")
            }
        },
    },
});
</script>

<style scoped>
#account-register-heading {
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

#email {
    position: fixed;
    text-align: center;
    top: 250px;
    left: 40%;
    width: 20%;
    right: 40%;
}

#username {
    position: fixed;
    text-align: center;
    top: 300px;
    left: 40%;
    width: 20%;
    right: 40%;
}

#password {
    position: fixed;
    text-align: center;
    top: 350px;
    left: 40%;
    width: 20%;
    right: 40%;
}

#login {
    position: fixed;
    text-align: center;
    top: 400px;
    left: 40%;
    width: 20%;
    right: 40%;
    margin: 1px;
}
</style>
