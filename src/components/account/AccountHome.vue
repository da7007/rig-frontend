<template>
    <div class="card shadow" id="account-home">
        <div id="account-home-content">
            <h3>Welcome to Rig</h3>
            <p>Please login below to get started.</p>
            <button class="btn btn-dark rounded">Sign up</button>

            <AccountLogin />
        </div>
        
    </div>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AccountLogin from "./AccountLogin.vue";

export default defineComponent({
  name: "AccountHome",
  components: {
    AccountLogin
  }
});
</script>

<style scoped>
#account-home {
    position:fixed;
    left:10%;
    width:80%;
    right:10%;
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
