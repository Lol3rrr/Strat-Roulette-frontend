<template>
  <label class="checkBoxContainer">
    <span><slot></slot></span>
    <input
      type="checkbox"
      :checked="checked"
      v-on:input="updateValue($event.target.value)"
    />
    <span class="checkmark" />
  </label>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class BaseCheckbox extends Vue {
  @Prop()
  checked!: boolean;

  updateValue(value: boolean) {
    this.$emit("input", value);
  }
}
</script>

<style lang="scss" scoped>
span {
  font-size: 20px;
  color: #dddddd;
}

/* Customize the label (the container) */
.checkBoxContainer {
  display: block;
  position: relative;
  padding-left: 20px;
  cursor: pointer;
  max-width: 90vw;
  text-align: left;

  margin-left: auto;
  margin-right: auto;
}

/* Hide the browser's default checkbox */
.checkBoxContainer input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 2px;
  left: 0;
  height: 17px;
  width: 17px;
  background-color: #222222;

  border-radius: 3px;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkBoxContainer input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkBoxContainer .checkmark:after {
  left: 5px;
  top: 2px;
  width: 4px;
  height: 8px;
  border: solid #fefefe;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
