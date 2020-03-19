<template>
  <input
    type="text"
    v-on:input="updateValue($event.target.value)"
    :placeholder="placeholder"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class BaseTextInput extends Vue {
  @Prop() placeholder!: string;

  updateValue(value: string) {
    this.$emit("input", value);
  }
}
</script>

<style lang="scss" scoped>
input {
  border: none;
  border-radius: 5px;
  padding: 2px 5px;
  font-size: 18px;
  color: #efefef;
  background-color: #222222;
}
</style>
