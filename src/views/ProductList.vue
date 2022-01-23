<template>
  <v-app>
      <!-- <img src="../assets/img/home.jpg" width="100%"> -->
    <v-container fluid>
      <Carrousel/>
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
    <Alert class="alert"/>
    </v-container>
  </v-app>
</template>

<script>
import Listado from "../components/Listado.vue";
import Alert from "../components/Alert.vue"
import Carrousel from "../components/Carrousel.vue"
import {mapGetters} from "vuex"

export default {
  
  components: { Listado, Alert, Carrousel },


  computed:{
    ...mapGetters(["productos"])
  },

  

  mounted(){
    this.$store.dispatch("obtenerProductos")
  }

};
</script>

<style  scoped>


</style>

