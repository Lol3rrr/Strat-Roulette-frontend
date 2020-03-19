<template>
  <div>
    <h2>Add Strat</h2>
    <div>
      <div>
        <h3>Name</h3>
        <BaseTextInput v-model="stratName" placeholder="Some Name" />
      </div>
      <div>
        <h3>Description</h3>
        <BaseTextarea
          v-model="stratDescription"
          placeholder="Strat Description"
        ></BaseTextarea>
      </div>
      <div>
        <h3>Mode</h3>
        <BaseCheckbox style="width: 20vw;" v-model="stratModes.bomb"
          >Bomb</BaseCheckbox
        >
        <BaseCheckbox style="width: 20vw;" v-model="stratModes.hostage"
          >Hostage</BaseCheckbox
        >
        <BaseCheckbox style="width: 20vw;" v-model="stratModes.secureArea"
          >Secure Area</BaseCheckbox
        >
      </div>
      <div>
        <h3>Site</h3>
        <BaseSelect
          v-model="stratSite"
          :options="[
            { value: 'attacker', text: 'Attacker' },
            { value: 'defender', text: 'Defender' }
          ]"
        />
      </div>
    </div>
    <BaseButton :clicked="addNewStrat" text="Add" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import BaseButton from "@/components/base/BaseButton.vue";
import BaseSelect from "@/components/base/BaseSelect.vue";
import BaseTextarea from "@/components/base/BaseTextarea.vue";
import BaseCheckbox from "@/components/base/BaseCheckbox.vue";
import BaseTextInput from "@/components/base/BaseTextInput.vue";

import * as AdminAPI from "@/api/adminApi";

@Component({
  components: {
    BaseButton,
    BaseSelect,
    BaseTextarea,
    BaseCheckbox,
    BaseTextInput
  }
})
export default class AddStrat extends Vue {
  data() {
    return {
      stratName: "",
      stratDescription: "",
      stratModes: {
        bomb: false,
        hostage: false,
        secureArea: false
      },
      stratSite: ""
    };
  }

  addNewStrat() {
    console.log("Adding new Strat");

    const name = this.$data.stratName;
    const description = this.$data.stratDescription;
    const modes = [];
    for (const entry in this.$data.stratModes) {
      if (this.$data.stratModes[entry]) {
        modes.push(entry);
      }
    }
    const site = this.$data.stratSite;

    AdminAPI.AddStrat(name, description, modes, site)
      .then(() => {
        console.log("Added strat");
      })
      .catch(() => {
        console.log("Didnt work");
      });
  }
}
</script>
