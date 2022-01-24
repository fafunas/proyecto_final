<template>
  <v-data-table :headers="headers" :items="Cart" class="elevation-1">
    <template v-slot:item.actions="{ item }">
      <v-icon color="red" medium @click="deleteItem(item.id)">
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:item.quantity="{ item }">
      <v-icon color="blue" medium @click="decreaseQuantity(item.id)"
        >mdi-minus-circle
      </v-icon>
      {{ item.quantity }}
      <v-icon color="blue" medium @click="addQuantity(item.id)">
        mdi-plus-circle
      </v-icon>
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
      //   quantity: 0
    };
  },

  methods: {
    setCart() {
      if (localStorage.getItem("Cart")) {
        this.Cart = JSON.parse(localStorage.getItem("Cart"));
      }
    },

    //Delente Item from the Cart in LS
    deleteItem(idProducto) {
      //console.log(idProducto)
      this.Cart = JSON.parse(localStorage.getItem("Cart"));
      //tomamos el Id del producto en el carro
      let productoIndex = this.Cart.findIndex((el) => el.id == idProducto);
      //eliminamos esa linea
      this.Cart.splice(productoIndex, 1);
      let prodArray = JSON.stringify(this.Cart);
      localStorage.setItem("Cart", prodArray);
      this.$store.dispatch("cartItems")
     // console.log("producto", productoIndex, idProducto);
    },

    //increse cart item
    //Buscar otra forma de no hacerlo con reload.
    addQuantity(idProduct) {
      let cart = JSON.parse(localStorage.getItem("Cart"));
      let productoIndex = this.Cart.findIndex((el) => el.id == idProduct);
      cart[productoIndex].quantity++;
     // console.log(cart[productoIndex].quantity);
      localStorage.setItem("Cart", JSON.stringify(cart));
      location.reload()
    },
    //decrease quantity of cart item
    decreaseQuantity(idProduct) {
      let cart = JSON.parse(localStorage.getItem("Cart"));
      let productoIndex = this.Cart.findIndex((el) => el.id == idProduct);
      if (cart[productoIndex].quantity > 0) {
        cart[productoIndex].quantity--;
        location.reload()
      }
//      console.log(cart[productoIndex].quantity);
      localStorage.setItem("Cart", JSON.stringify(cart));
    },
  },

  mounted() {
    this.setCart();
    console.log("este seria el carrito", this.Cart);
  },

  computed: {},
};
</script>

<style lang="scss" scoped></style>
