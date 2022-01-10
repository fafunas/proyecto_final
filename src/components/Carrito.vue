<template>
  <v-data-table :headers="headers" :items="Cart" class="elevation-1">
    <template v-slot:item.actions="{ item }">
      <v-icon medium @click="deleteItem(item.id)"> mdi-delete </v-icon>
    </template>
  </v-data-table>
</template>

<script>
//import {mapState} from "vuex";

export default {
  data() {
    return {
      headers: [
        {
          align: "start",
          sortable: false,
        },
        { text: "Comida", value: "name" },
        { text: "Costo", value: "price" },
        { text: "Cantidad", value: "quantity" },
        { text: "Eliminar", value: "actions" },
      ],
      Cart: [],
    };
  },

  methods: {
    setCart() {
      if (localStorage.getItem("Cart")) {
        this.Cart = JSON.parse(localStorage.getItem("Cart"));
      }
    },

    //Delente Item from the Cart in LS
    deleteItem(idProducto){
      //console.log(idProducto)
      this.Cart = JSON.parse(localStorage.getItem("Cart"))
      let productoIndex = this.Cart.findIndex(el => el.id == idProducto)
      this.Cart.splice(productoIndex,1)
      let prodArray = JSON.stringify(this.Cart)
      localStorage.setItem("Cart", prodArray)
    console.log("producto", productoIndex, idProducto)

    }


  },

  mounted() {
    this.setCart();
    console.log("este seria el carrito", this.Cart);
  },
};
</script>

<style lang="scss" scoped></style>
