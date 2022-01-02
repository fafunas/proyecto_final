<template>
  <v-card class="mx-auto ma-4" max-width="250">
    <v-img :src="productos.portada" height="200px"></v-img>

    <v-card-title class="vtitle">
      {{ productos.name }}
    </v-card-title>

    <v-card-subtitle class="vsubtitle">
      <p >${{ productos.costo }}</p>
      <div>
        <v-btn class="mx-2" fab small dark color="indigo">
          <v-icon  @click="addChart(productos)" dark> mdi-plus </v-icon>
        </v-btn>
      </div>
    </v-card-subtitle>

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
import {mapState} from "vuex";

export default {
  data() {
    return {
      show: false,
    };
  },

  props: {
    productos: [],
  },

  methods: {
    consulta() {
      console.log("Esto deberia ser ", this.productos);
    },
   
    addChart(productos){
      this.$store.dispatch("pushChart", productos)
      //console.log(this.productos)

    }
  },

    computed: mapState({
    chart : state => state.chart
  }),
};
</script>

<style lang="scss" scoped>
.vsubtitle {
  font-size: 20px;
}

.vtitle {
  text-align: center;
  display: block;
}
</style>
