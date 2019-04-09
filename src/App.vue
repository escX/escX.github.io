<template>
  <div id="app">
    <intro-side></intro-side>
    <list-side></list-side>
  </div>
</template>

<script>
import IntroSide from './components/IntroSide';
import ListSide from './components/ListSide';

export default {
  components: {
    'intro-side': IntroSide,
    'list-side': ListSide
  }
};
</script>

<style lang="less">
#app {
  height: 100%;
  min-width: 1000px;
  overflow: hidden;
}
</style>
