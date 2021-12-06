<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="portada"
      height="200px"
    ></v-img>

    <v-card-title>
      {{titulo}}
    </v-card-title>

    <v-card-subtitle>
      {{costo}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Descirpcion
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
            {{descripcion}}

        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
 
</template>

<script>

export default {
  data() {
    return {
      show: false,
      props:{
          titulo:String,
          portada: String,
          costo: Number,
          descripcion: String
      }
      
    };
  },
};
</script>

<style lang="scss" scoped></style>
