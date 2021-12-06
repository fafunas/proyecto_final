<template>
  <v-card
    class="mx-auto ma-4"
    max-width="300"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="portada"
    >
      <v-card-title>{{titulo}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      ${{costo}}
    </v-card-subtitle>

    <v-card-text class="text--primary ">
      
      <div>{{descripcion}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Agregar
      </v-btn>
    </v-card-actions>
     
 
  </v-card>
</template>

<script>
export default {
  props: {
    titulo: String,
    portada: String,
    costo: Number,
    descripcion: String,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
