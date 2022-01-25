<template>
  <v-app>
    <v-app-bar app color="#343298" dark>
      <v-app-bar-title>Food Shop</v-app-bar-title>
      <v-spacer></v-spacer>
      <router-link class="pa-2" to="/"> Home </router-link> |
      <router-link class="pa-2 Cart" to="/Cart">
        <v-badge color="green" :content="totalItems"
          ><v-icon>mdi-cart </v-icon>
        </v-badge></router-link
      >

      <v-btn @click="showDialog()" icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      
      <router-view />
    </v-main>
    <Login/>
  </v-app>
</template>

<script>
import Login from "./components/Login.vue";
import { mapState } from "vuex";

export default {
   components:{Login},

  data() {
    return {
      // dialog: false,
      // totalitems: 0
    };
  },

  methods:{
    showDialog(){
      this.$store.dispatch("dialogs/SET_DIALOG")
      
    }
  },

  computed: {
    ...mapState({
      totalItems: (state) => state.totalItems,
      
    }),
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

.Cart {
  text-decoration: none;
  color: red;
}

.Cart v-icon {
  color: red;
}

.v-application a {
  color: white !important;
}
</style>
