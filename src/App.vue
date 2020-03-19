<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav_a" to="/">Home</router-link> |
      <router-link class="nav_a" to="/admin">Admin</router-link> |
      <router-link class="nav_a" to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
:root {
  --text-color: #efefef;
  --secondary-background: #222222;

  --text-font-size: 16px;
}

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

span {
  font-size: var(--text-font-size);
  color: var(--text-color, #efefef);
}
</style>
