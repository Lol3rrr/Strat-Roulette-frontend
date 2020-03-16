<template>
  <div>
    <div class="strat">
      <h2>{{ strat.name }}</h2>
      <span>{{ strat.description }}</span>
    </div>
    <button v-on:click="this.getNewStrat">Refresh</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import * as API from "@/api/api";

@Component
export default class StratDisplay extends Vue {
  data() {
    return {
      strat: {}
    };
  }

  private getNewStrat(): void {
    API.LoadRandomStrat()
      .then(nStrat => {
        this.$data.strat = nStrat;
      })
      .catch(console.log);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.strat {
  width: 60vw;
  padding: 1vh 2vw 1vh 2vw;
  color: #dddddd;
  background-color: #181818;
  margin-left: auto;
  margin-right: auto;
}

h2 {
  margin-top: 0px;
  font-size: 22px;
}
span {
  font-size: 20px;
}
</style>
