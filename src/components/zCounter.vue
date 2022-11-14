<template>
  <button @click="increase">{{ counter }}</button>
</template>

<script>
export default {
  name: "zCounter",

  data() {
    return {
      counter: 1,
    }
  },

  methods: {
    increase() {
        this.counter++;
    }
  },
};
</script>

<style lang="css" scoped>
button {
  font-size: 2rem;
  width: 100px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0px 8px 8px 1px rgba(0, 0, 0, 0.3);
}
</style>
