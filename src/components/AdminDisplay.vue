<template>
  <div>
    <Login v-if="!this.$store.state.loggedIn" />
    <div v-else>
      <BaseButton :clicked="toggleAddStrat" text="Add Class" />
      <AddStrat v-show="addingStrat" />
      <AllStrats />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Login from "@/components/admin/Login.vue";
import AddStrat from "@/components/admin/AddStrat.vue";
import AllStrats from "@/components/admin/AllStrats.vue";

import BaseButton from "@/components/base/BaseButton.vue";

@Component({
  components: {
    Login,
    AddStrat,
    AllStrats,
    BaseButton
  }
})
export default class AdminDisplay extends Vue {
  data() {
    return {
      addingStrat: false
    };
  }

  mounted() {
    const cookie = document.cookie;

    const cookies = cookie.split(";");
    const cookieValues = Array<string>();
    for (const tmpCookie of cookies) {
      const tmpValues = tmpCookie.split("=");

      for (const tmpValue of tmpValues) {
        cookieValues.push(tmpValue);
      }
    }

    for (let i = 0; i < cookieValues.length; i++) {
      if (cookieValues[i] !== "sessionID") {
        continue;
      }

      this.$store.commit("setLoginStatus", true);
      return;
    }
  }

  toggleAddStrat(): void {
    this.$data.addingStrat = !this.$data.addingStrat;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
