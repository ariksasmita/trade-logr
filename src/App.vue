<template>
  <header>Header Section</header>
  <nav>Sidebar</nav>
  <router-link to="/add">
    <div>Add</div>
  </router-link>
  <router-link to="/list">
    <div>List</div>
  </router-link>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
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
</style>
