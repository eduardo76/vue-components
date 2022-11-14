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
}
</style>
