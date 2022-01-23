<template>
  <v-app>
    <v-row>
      <v-col
        ><h2>Agregar Producto</h2>
        <v-text-field v-model="defaultItem.name" label="Nombre"></v-text-field>
        <v-text-field
          v-model="defaultItem.descripcion"
          label="Descripcion"
        ></v-text-field>
        <v-text-field
          v-model.number="defaultItem.costo"
          label="Costo"
          type="number"
        ></v-text-field>
        <v-text-field
          v-model.number="defaultItem.cantidad"
          label="Cantidad"
          type="number"
        ></v-text-field>
        <v-text-field
          v-model="defaultItem.portada"
          label="Portada"
        ></v-text-field>
        <v-btn color="blue" @click="agregarProducto">Agregar Producto</v-btn>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      defaultItem: {
        name: "",
        costo: 0,
        cantidad: 0,
        descripcion: "",
        portada: "",
      },
    };
  },


  methods:{
      agregarProducto() {
      axios.post(
        "https://61b24f08c8d4640017aaf359.mockapi.io/productos",
        this.defaultItem,
        
      )
      .then((response) => {
          console.table(response.data);
          this.obtenerProductos();
          this.confirmAlert()
        })
        .catch((err) => {
          console.error(`${err}`);
        });
    },

    obtenerProductos() {
      axios
        .get("https://61b24f08c8d4640017aaf359.mockapi.io/productos")
        .then((data) => {
          this.productos = data.data;
        }).then((response) => {
          console.table(response.data);
        })
        .catch((err) => {
          console.error(`${err}`);
        });
    },

    confirmAlert() {
      this.$store.dispatch("notification/SET_NOTIFICATION", {
        type: "success",
        text: "Producto Agregado Correctamente",
      });
      //console.log("accionejecutada")
    },
  }
};
</script>

<style lang="scss" scoped>
</style>