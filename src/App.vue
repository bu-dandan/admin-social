<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  min-width: 1000px;
  /* background: #eff7fe; */
  background: radial-gradient(100% 180% at 0 0, rgba(217, 242, 255, .1) 0, rgba(191, 216, 255, .3) 100%);
}
</style>
