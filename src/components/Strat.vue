<template>
  <div class="strat">
    <h2>{{ strat.name }}</h2>
    <span>{{ strat.description }}</span>
    <br />
    <span>{{ strat.site }}</span>
    <br />
    <span>{{ modeString }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

import { Strat } from "@/api/types";

@Component
export default class StratDisplay extends Vue {
  @Prop({
    required: true
  })
  private strat!: Strat;

  data() {
    return {
      modeString: ""
    };
  }

  @Watch("strat")
  onStratChanged() {
    let result = "";

    for (let i = 0; i < this.strat.modes.length; i++) {
      result += this.strat.modes[i];

      if (i != this.strat.modes.length - 1) {
        result += ", ";
      }
    }

    this.$data.modeString = result;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.strat {
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
