<template>
  <v-app>
    <v-app-bar app color="blue darkeen-3">
      <h1>Comidas</h1>
    </v-app-bar>
    <v-container class="pt-12 mt-12">
    <v-row>
      
        <Listado v-for="(comida,i) in Comidas" :key=i
       :titulo="comida.titulo"
       :costo="comida.costo"
       :portada="comida.portada"
       :descripcion="comida.descripcion"></Listado>
      
    </v-row>
    </v-container>
       <v-container>
    <Carrito/> 
    </v-container>
  </v-app>
</template>

<script>
import Carrito from './components/Carrito.vue'
//import Login from './components/Login.vue'
import Listado from './components/Listado.vue'
import Comidas from './assets/json/comidas.json'

export default {
  name: 'App',

  props:{
          titulo:String,
          portada: String,
          costo: Number,
          descripcion: String
      },
  data() {
    return {
      Comidas,
            
    }
  },

  components: {
   // Login,
    Carrito,
   Listado,
   
  },
  

  
    
};
</script>
