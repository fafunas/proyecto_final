<template>
  <v-app>
    <v-container fluid>
     <v-row>
       
       <v-col v-for="producto in productos" :key="producto.id">
        <Listado
          :productos="producto"/>
          </v-col>
     </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Listado from "../components/Listado.vue";
import axios from "axios";

export default {
  data() {
    return {
        productos: Array
      
    };
  },
 
  components: { Listado },
  mounted() {
    this.obtenerProductos();
  },

  methods: {
    obtenerProductos() {
      axios
        .get("https://61b24f08c8d4640017aaf359.mockapi.io/productos")
        .then((data) => {
          this.productos = data.data;
          console.log("Esto es de la vista",this.productos);
        });
    },
  },
};
</script>

