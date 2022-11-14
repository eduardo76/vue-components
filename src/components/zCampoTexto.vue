<template>
    <input type="text" :value="value" @input="$emit('input', $event.target.value)"/>
</template>

<script>
export default {
  name: "zCampoTexto",

  props: {
    value: {
      type: String,
      default: "",
    },
  }
};
</script>

<style lang="css" scoped>
    input {
        border: 2px solid black;
        padding: 10px 15px;
        font-size: 1.5rem;
        border-radius: .5rem;
        width: 500px;
        margin-bottom: 10px;
        display: block;
    }
</style>
