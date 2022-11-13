<template>
  <div id="app">
    <GroupLinks msg="Вяжем для наших"/>
    <GroupLinks msg="Шьем для наших"/>
    <GroupLinks msg="Военторг"/>
  </div>
</template>

<script>
import GroupLinks from './components/GroupLinks.vue'

export default {
  name: 'App',
  components: {
    GroupLinks
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo-1 {
  width: 300px;
  height: 300px;
}


</style>
