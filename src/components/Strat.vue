<template>
  <transition name="fade" mode="out-in">
    <div class="strat" :key="strat.id">
      <h2>{{ strat.name }}</h2>
      <span>{{ strat.description }}</span>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import { Strat } from "@/api/types";

@Component
export default class StratDisplay extends Vue {
  @Prop({
    required: true
  })
  private strat!: Strat;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.strat {
  width: 60vw;
  color: #dddddd;
  background-color: #181818;
  margin-left: auto;
  margin-right: auto;

  overflow: hidden;
  max-height: 50vh;

  padding: 1vh 2vw;
}

h2 {
  margin-top: 0px;
  font-size: 34px;
}
span {
  font-size: 30px;
}

.fade-enter-active {
  transition: max-height 1s, padding 1s;
}
.fade-leave-active {
  transition: max-height 1s, padding 1s;
}
.fade-enter,
.fade-leave-to {
  max-height: 0px;
  padding: 0px 2vw;
}
</style>
