<template>
  <v-app>
    <v-app-bar app color="#6A76AB" dark>
      <v-app-bar-title>Shop</v-app-bar-title>
      <router-link class="pa-2" to="/admin">  Admin  </router-link>
      <v-spacer></v-spacer>
      <router-link class="pa-2" to="/">  Home  </router-link> |
      <router-link class="pa-2 chart" to="/chart"><v-icon>mdi-cart </v-icon> {{totalItems}}</router-link>
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

  
</template>

<script>
import Login from "./components/Login.vue";
import {mapGetters} from "vuex"

export default {
 
  components: { Login },

  computed:{
    ...mapGetters(["totalItems"])
  },
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

.chart{
    text-decoration: none;
    color:red;
}

.chart v-icon{
  color:red;
}

.v-application a{
  color : white !important;
}

</style>
