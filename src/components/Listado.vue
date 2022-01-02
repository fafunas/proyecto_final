<template>
  <v-card class="mx-auto ma-4" max-width="250">
    <v-img :src="productos.portada" height="200px"></v-img>

    <v-card-title class="vtitle">
      {{ productos.name }}
    </v-card-title>

    <v-card-subtitle class="vsubtitle">
      <p>${{ productos.costo }}</p>
      <div>
        <v-form v-model="valid">
        <v-text-field
          v-model="productChart.quantity"
          label="Cantidad"
          required
          type="number"
          min="1"
          :rules="rules"
        ></v-text-field>

        <v-btn class="mx-2" fab small dark color="indigo">
          <v-icon @click="addChart(productos)" dark> mdi-plus </v-icon>
        </v-btn>
        </v-form>
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
//import { mapState } from "vuex";

export default {
  data() {
    return {
      valid:false,
      show: false,
      productChart: {
        id: "",
        name: "",
        price: 0,
        quantity: 0,
      },
      rules: [
      v => !!v || 'Por favor complete este campo',
      v => v > 0 || 'Este campo debe ser mayor a 0',
    ],
    };
  },

  props: {
    productos: [],
  },

  methods: {
    consulta() {
      console.log("Esto deberia ser ", this.productos);
    },

    //With Local Storage, add items to productChart for LS

    addChart(productos) {
      if (this.valid) {
        this.productChart.id = productos.id;
        this.productChart.name = productos.name;
        this.productChart.price = productos.costo;
        this.setChart();
        console.log(localStorage.getItem("chart"));
        this.productChart.quantity = "0";
      }
    },

    //Create Chart and push items in LS
    setChart() {
      let chart = [];
      if (!localStorage.getItem("chart")) {
        chart.push(this.productChart);
        localStorage.setItem("chart", JSON.stringify(chart));
      } else {
        chart = JSON.parse(localStorage.getItem("chart"));
        chart.push(this.productChart);
        localStorage.setItem("chart", JSON.stringify(chart));
      }
    },

    //addChart(productos){
    // this.$store.dispatch("pushChart", productos)
    //console.log(this.productos)

    // }
  },

 /*  computed: mapState({
    chart: (state) => state.chart,
  }), */
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
