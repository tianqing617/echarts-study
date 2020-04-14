<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/echarts/simple">Echarts simple</router-link> |
      <router-link to="/echarts/data-zoom">Echarts dataZoom</router-link> |
      <router-link to="/echarts/data-zoom2">Echarts dataZoom2</router-link> |
      <router-link to="/echarts/event">Echarts event</router-link>
    </div>

    <div class="main-content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.main-content {
  display: flex;
  justify-content: center;
}
</style>
