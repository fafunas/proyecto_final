<template>
  <v-app>
    <v-app-bar app color="#6A76AB" dark>
      <v-app-bar-title>Shop</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="600px" min-width="360px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>
        <div>
         <Login :dialog="dialog"/>
        </div>
      </v-dialog>
    </v-app-bar>
    <v-main>
       
      <router-view />
      <v-dialog></v-dialog>
    </v-main>
  </v-app>

  <!-- <router-link to="/">Home</router-link> |
      <router-link to="/admin">Admin</router-link>
      <router-link to="/productlist">Listado</router-link> -->
</template>

<script>
import Login from "./components/Login.vue";

export default {
 
  components: { Login },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

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
