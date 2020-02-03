<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'Index' }">index</router-link>
      <span> | </span>
      <router-link :to="{ name: 'Main' }">main</router-link>
      <span> | </span>
      <router-link :to="{ name: 'Authentication' }">Authentication</router-link>
      <span> | </span>
      <router-link :to="{ name: 'Mypage' }">Mypage</router-link>
    </div>
    <router-view />
    <div id="footer">
      <span>hello</span>
    </div>
  </div>
</template>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  z-index:9999;
  position: fixed;
  top: 0;
  background-color: ghostwhite;
  opacity: 90%;
}
#footer {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ghostwhite;
  opacity: 90%;
}
</style>
