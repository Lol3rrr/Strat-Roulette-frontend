<template>
  <div>
    <h2>Strats</h2>
    <table>
      <thead>
        <th>Name</th>
        <th>Description</th>
        <th>Modes</th>
        <th>Site</th>
      </thead>
      <tbody>
        <tr v-for="strat in this.$store.state.allStrats" :key="strat.id">
          <td>{{ strat.name }}</td>
          <td>{{ strat.description }}</td>
          <td>{{ strat.modes.toString() }}</td>
          <td>{{ strat.site }}</td>
          <td class="removeEntry">
            <BaseButton :clicked="() => removeStrat(strat.id)" text="Remove" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import BaseButton from "@/components/base/BaseButton.vue";

@Component({
  components: {
    BaseButton
  }
})
export default class AllStrats extends Vue {
  mounted() {
    this.$store.dispatch("loadAllStrats");
  }

  removeStrat(id: string) {
    this.$store.dispatch("deleteStrat", id);
  }
}
</script>

<style lang="scss" scoped>
table {
  width: 75vw;
  margin-left: auto;
  margin-right: auto;
}
th {
  font-size: calc(var(--text-font-size) * 1.25);
  color: var(--text-color);
}
td {
  font-size: var(--text-font-size);
  color: var(--text-color);
  text-align: left;
  padding-left: 5px;
}

.removeEntry {
  padding-left: 0px;
  padding-right: 0px;
  text-align: center;
}

table,
th,
td {
  border: solid;
  border-width: 1px;
  border-color: #333333;
  border-collapse: collapse;
}
</style>
