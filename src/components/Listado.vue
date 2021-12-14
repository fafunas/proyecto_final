<template>
  <v-card class="mx-auto ma-4" max-width="300">
    <v-img class="white--text align-end" height="200px">
      <v-card-title>{{ productos.name }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0"> ${{ productos.costo }} </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ productos.descripcion }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn outlined rounded text @click="consulta()"> Agregar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      
    };
  },
  
  props:{
    productos: Array
    
  },

  methods:{
    consulta(){
      console.log("Esto deberia ser ",this.productos)
    }
  }
};

</script>

<style lang="scss" scoped></style>
