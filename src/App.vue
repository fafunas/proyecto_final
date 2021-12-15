<template>
  <v-app>
    <v-app-bar app color="#6A76AB" dark>
      <v-app-bar-title>Shop</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>

    </v-app-bar>
    <v-content>
<router-view/>
    </v-content>

  </v-app>

      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/admin">Admin</router-link>
      <router-link to="/productlist">Listado</router-link> -->
 
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
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
</style>
