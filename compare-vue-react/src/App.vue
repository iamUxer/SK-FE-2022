<!-- Logic -->

<script>
  import HelloWorld from './components/HelloWorld.vue';

  export default {
    components: { HelloWorld },
    data: () => ({
      message: 'Hello! Vue 3',
    }),
  };
</script>

<!-- HTML Template -->

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld v-bind:msg="message" />
</template>

<!-- CSS Style -->

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
