<template>
    <div class="card shadow" id="account-home">
        <div id="account-home-content">
            <h3>Welcome to Rig</h3>
            <p>Please login below to get started.</p>
            <button v-if="!isNewUser" @click="isNewUser=true" class="btn btn-dark rounded">Sign up</button>
            <button v-if="isNewUser" @click="isNewUser=false" class="btn btn-dark rounded">Log In</button>

            <AccountLogin v-if="!isNewUser"/>
            <AccountRegister v-if="isNewUser"/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AccountLogin from "./AccountLogin.vue";
import AccountRegister from "./AccountRegister.vue";

export default defineComponent({
  name: "AccountHome",
  data() {
    return {
        isNewUser: false
    }
  },
  components: {
    AccountLogin,
    AccountRegister
}
});
</script>

<style scoped>
#account-home {
    position:fixed;
    width:100%;
    height: 100%;
    background-color:black;
    border-radius:0%;
    text-align:center;
}

#account-home-content {
    position: fixed;
    left:10%;
    right:10%;
    top:50px;
    text-align: center;
}
</style>
