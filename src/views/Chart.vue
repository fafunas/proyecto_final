<template>
  <v-main class="pa-4 ma-4">
    <Carrito />
    <div class="pa-4">
      <v-btn class="ma-2" @click="confirmSell()" color="#ff3c3c"
        >Confirmar</v-btn
      >
      <br />
      <v-btn @click="toHome()" class="btn-continue">Continuar Comprando</v-btn>
    </div>

    <v-dialog v-model="dialog" width="600px">
      <v-card>
        <v-card-title>Resumen</v-card-title>
        <v-card-text>
            <table>
              <thead>
                <tr>
                  <th>Comida</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
                <tbody>
                  <tr v-for="item in chart" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>{{ item.costo }}</td>
                  </tr>
                </tbody>
             </table>
          <v-main>
            
            <v-row>
              <v-col md="6">
                <v-text-field
                  v-model="defaultSell.customerName"
                  label="Nombre"
                ></v-text-field>
              </v-col>
              <v-col md="6">
                <v-text-field
                  v-model="defaultSell.address"
                  label="Direccion"
                ></v-text-field>
              </v-col>
              <v-col md="6">
                <v-text-field
                  v-model="defaultSell.tel"
                  label="Telefono"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-main>
          <v-btn @click="test()">Confirmar</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-main>
</template>

<script>
import Carrito from "../components/Carrito.vue";
import axios from "axios"

export default {
  components: { Carrito },
  data() {
    return {
      dialog: false,
      defaultSell: {
        name: "",
        costo: "",
        cantidad: "",
        customerName: "",
        address: "",
        tel: "",
      },
    };
  },

  methods: {
    toHome() {
      this.$router.push({ name: "Home" });
    },

    assingItems(){
        this.defaultSell = Object.assign({},this.chart)
    },

    test(){
        axios.post("https://61b24f08c8d4640017aaf359.mockapi.io/chart", this.defaultSell)
        console.log("ultimo",this.defaultSell)
    },

    confirmSell() {
      this.dialog = true;
      this.assingItems()

      
      // console.log("thischart", this.productChar)
      //console.log("carrito", this.carrito)
      console.log("chart", this.chart);
      //console.log("name", this.chart["name"]);
    },
  },

  computed: {
    chart() {
      return this.$store.state.chart;
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-continue {
  border: solid 1px #ff3c3c;
  border-radius: 6px;
  color: #ff3c3c;
  font-size: 14px;
  height: 55px;
}
</style>