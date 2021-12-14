<template>
  <v-card class="mx-auto ma-2 " max-width="344">
    <v-img
      :src="productos.portada"
      height="200px"
    ></v-img>

    <v-card-title>
      {{ productos.name }}
    </v-card-title>

    <v-card-subtitle> ${{ productos.costo }} </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text> Detalle </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ productos.descripcion }}
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
    };
  },

  props: {
    productos: Array,
  },

  methods: {
    consulta() {
      console.log("Esto deberia ser ", this.productos);
    },
  },
};
</script>

<style lang="scss" scoped></style>
