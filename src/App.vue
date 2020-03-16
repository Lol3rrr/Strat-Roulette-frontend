<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav_a" to="/">Home</router-link> |
      <router-link class="nav_a" to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
html {
  background: #111111;
}

#nav {
  width: 100%;
  text-align: center;
  font-size: 26px;
  color: #dddddd;
}
.nav_a {
  font-size: inherit;
  color: inherit;
  text-decoration: none;
}
</style>
