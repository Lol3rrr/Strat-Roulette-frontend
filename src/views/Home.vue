<template>
  <div class="home">
    <h1>Strat-Roulette</h1>
    <StratDisplay />
  </div>
</template>

<script>
import StratDisplay from "@/components/StratDisplay.vue";

export default {
  name: "Home",
  components: {
    StratDisplay
  }
};
</script>

<style lang="scss">
.home {
  text-align: center;
}

h1 {
  font-size: 40px;
  color: #efefef;
}
</style>
