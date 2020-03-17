<template>
  <div>
    <div class="horizontalSelect">
      <span
        v-on:click="selectMode('bomb')"
        :class="{ active: activeMode == 'bomb' }"
        >Bomb</span
      >
      <span
        v-on:click="selectMode('hostage')"
        :class="{ active: activeMode == 'hostage' }"
        >Hostage</span
      >
      <span
        v-on:click="selectMode('secureArea')"
        :class="{ active: activeMode == 'secureArea' }"
        >Secure Area</span
      >
    </div>
    <div class="horizontalSelect">
      <span
        v-on:click="selectSite('attacker')"
        :class="{ active: activeSite == 'attacker' }"
        >Attacker</span
      >
      <span
        v-on:click="selectSite('defender')"
        :class="{ active: activeSite == 'defender' }"
        >Defender</span
      >
    </div>
    <Strat :strat="strat" />
    <button v-on:click="this.getNewStrat">Refresh</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Strat from "@/components/Strat.vue";

import * as API from "@/api/api";

@Component({
  components: {
    Strat
  }
})
export default class StratDisplay extends Vue {
  data() {
    return {
      strat: {},
      activeMode: "",
      activeSite: ""
    };
  }

  created() {
    const stratID = this.getCurrentStratID();
    if (stratID == "") {
      return;
    }

    API.LoadSingleStrat(stratID)
      .then(nStrat => {
        this.$data.strat = nStrat;
        this.$data.activeMode = nStrat.modes[0];
        this.$data.activeSite = nStrat.site;
      })
      .catch(console.log);
  }

  private getCurrentStratID(): string {
    const query = this.$router.currentRoute.query;
    const id = query.id;
    if (id == undefined) {
      return "";
    }

    return id.toString();
  }

  private selectMode(mode: string): void {
    this.$data.activeMode = mode;
  }
  private selectSite(site: string): void {
    this.$data.activeSite = site;
  }

  private getNewStrat(): void {
    API.LoadRandomStrat(this.$data.activeSite, this.$data.activeMode)
      .then(nStrat => {
        const current = this.getCurrentStratID();
        if (current == nStrat.id) {
          this.getNewStrat();
          return;
        }

        this.$router.push({
          path: this.$router.currentRoute.path,
          query: {
            id: nStrat.id
          }
        });

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

.horizontalSelect {
  width: 60vw;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}
.horizontalSelect > span {
  display: flexbox;
  flex: 1 1 auto;
  width: 10vw;
  color: #dddddd;
  background-color: #151515;
  border: solid;
  border-width: 2px;
  border-color: #111111;
  cursor: pointer;
  padding-top: 0.5vh;
  padding-bottom: 0.5vh;
}
.horizontalSelect > span.active {
  background-color: #333333;
}
</style>
