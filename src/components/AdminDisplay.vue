<template>
  <div>
    <Login v-if="!this.$store.state.loggedIn" />
    <div v-else>
      <AddStrat />
      <h2>Strats</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Login from "@/components/admin/Login.vue";
import AddStrat from "@/components/admin/AddStrat.vue";

@Component({
  components: {
    Login,
    AddStrat
  }
})
export default class AdminDisplay extends Vue {
  created() {
    console.log(document.cookie);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
