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

    <v-card-text class="text--primary">
      
      <div>{{descripcion}}</div>
    </v-card-text>

   
      <div class="text-center ma-2">
        <v-btn class="mx-2" fab dark color="indigo">
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>
      </div>
 
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
