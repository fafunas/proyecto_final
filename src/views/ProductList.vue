<template>
  <v-app>
      <!-- <img src="../assets/img/home.jpg" width="100%"> -->
    <v-container fluid>
    <v-row>
      <v-col>
        <!-- <FilterBar/> -->
      </v-col>
    </v-row>
      
     <v-row>
       
       <v-col 
        cols="12"
        sm="6"
        md="4"
        lg="3" v-for="producto in productos" :key="producto.id">
        <Listado
          :productos="producto"/>
          </v-col>
     </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Listado from "../components/Listado.vue";
//import FilterBar from "../components/FilterBar.vue"
import {mapGetters} from "vuex"

export default {
  
  components: { Listado },


  computed:{
    ...mapGetters(["productos"])
  },

  mounted(){
    this.$store.dispatch("obtenerProductos")
  }

};
</script>

