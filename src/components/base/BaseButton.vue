<template>
  <button v-on:click="clicked">{{ text }}</button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class BaseButton extends Vue {
  @Prop() private text!: string;
  @Prop() private clicked!: () => void;
}
</script>

<style lang="scss" scoped>
button {
  border: none;
  border-radius: 5px;
  padding: 2px 5px;
  font-size: 18px;
  color: #dddddd;
  background-color: #333333;
}
</style>
