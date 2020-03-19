<template>
  <select v-on:input="updateValue($event.target.value)">
    <option
      v-for="opt in options"
      :key="opt.value"
      :value="opt.value"
      >{{ opt.text }}</option
    >
  </select>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class BaseSelect extends Vue {
  @Prop({
    required: true
  })
  options!: {
    value: string;
    text: string;
  }[];

  updateValue(value: string) {
    this.$emit("input", value);
  }
}
</script>

<style lang="scss" scoped>
select,
option {
  border: none;
  border-radius: 5px;
  padding: 2px 5px;
  font-size: var(--text-font-size);
  color: var(--text-color, #efefef);
  background-color: var(--secondary-background, #222222);
}
</style>
