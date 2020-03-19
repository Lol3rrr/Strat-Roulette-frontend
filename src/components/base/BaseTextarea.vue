<template>
  <textarea
    v-on:input="updateValue($event.target.value)"
    :placeholder="placeholder"
  ></textarea>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class BaseTextarea extends Vue {
  @Prop() placeholder!: string;

  updateValue(value: string) {
    this.$emit("input", value);
  }
}
</script>

<style lang="scss" scoped>
textarea {
  border: none;
  border-radius: 5px;
  padding: 2px 5px;
  background-color: #222222;
}
</style>
