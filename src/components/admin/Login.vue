<template>
  <div>
    <h2>Login</h2>
    <div class="inputDiv">
      <span>Username</span>
      <BaseTextInput v-model="username" placeholder="username" />
    </div>
    <div class="inputDiv">
      <span>Password</span>
      <BaseTextInput v-model="password" placeholder="password" />
    </div>
    <BaseButton :clicked="login" text="Login" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import BaseButton from "@/components/base/BaseButton.vue";
import BaseTextInput from "@/components/base/BaseTextInput.vue";

import * as API from "@/api/api";

@Component({
  components: {
    BaseButton,
    BaseTextInput
  }
})
export default class Login extends Vue {
  data() {
    return {
      username: "",
      password: ""
    };
  }

  login(): void {
    API.login(this.$data.username, this.$data.password)
      .then(() => {
        this.$store.commit("setLoginStatus", true);
      })
      .catch(console.log);
  }
}
</script>

<style lang="scss" scoped>
span {
  display: inline-block;
  min-width: 100px;
  font-size: 22px;
  color: #efefef;
}
</style>
