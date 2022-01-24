<template>
  <v-app>
    <v-app-bar app color="#343298" dark>
      <v-app-bar-title>Food Shop</v-app-bar-title>
      <router-link class="pa-2" to="/admin">  Admin  </router-link>
      <v-spacer></v-spacer>
      <router-link class="pa-2" to="/">  Home  </router-link> |
      <router-link class="pa-2 Cart" to="/Cart"> <v-badge color="green" :content="totalitems"><v-icon>mdi-cart </v-icon> </v-badge></router-link>
      <v-dialog v-model="dialog" max-width="600px" min-width="360px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>
        <div>
         <Login/>
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
import {mapState} from "vuex"

export default {
 
  components: { Login },

  data() {
    return {
     // dialog: false,
      totalitems: 0
    };
  },

 
  mounted(){
    if (localStorage.Cart){
      let Cart = JSON.parse(localStorage.getItem('Cart'))
      this.totalitems= Cart.length
    }
  },

  computed:{
    ...mapState('dialogs',['dialog'])
  },

  watch:{
    totalitems(newVal){
      let Cart = JSON.parse(localStorage.getItem('Cart'))
     // this.totalitems= Cart.length
      Cart.length=newVal
    }
  }


};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.Cart{
    text-decoration: none;
    color:red;
}

.Cart v-icon{
  color:red;
}

.v-application a{
  color : white !important;
}

</style>
