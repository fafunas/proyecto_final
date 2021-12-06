<template>
  <v-app>
    <v-app-bar app color="blue darkeen-3">
      <h1>Comidas</h1>
    </v-app-bar>
    <v-container class="pt-12 mt-12">
    <v-row>
      
        <Listado v-for="(comida,i) in Comidas" :key=i
       :titulo="comida.titulo"></Listado>
      
    </v-row>
      <!-- <Carrito/> -->
    </v-container>
  </v-app>
</template>

<script>
//import Carrito from './components/Carrito.vue'
//import Login from './components/Login.vue'
import Listado from './components/Listado.vue'
import Comidas from './assets/json/comidas.json'

export default {
  name: 'App',

  data() {
    return {
      Comidas,
      props:{
          titulo:String,
          portada: String,
          costo: Number,
          descripcion: String
      }
      
    }
  },

  components: {
   // Login,
   // Carrito
   Listado,
   
  },
  

  
    
};
</script>
