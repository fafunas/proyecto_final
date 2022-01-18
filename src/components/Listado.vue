<template>
<div>
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
          v-model="productCart.quantity"
          label="Cantidad"
          required
          type="number"
          min="1"
          :rules="rules"
        ></v-text-field>

        <v-btn class="mx-2" fab small dark color="indigo">
          <v-icon @click="addCart(productos)" dark> mdi-plus </v-icon>
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
 
  </div>
    
</template>

<script>
//import {mapActions} from 'vuex'

export default {
  data() {
    return {
      valid:false,
      show: false,

      productCart: {
        id: "",
        name: "",
        price: 0,
        quantity: 0,
      },
      rules: [
      v => !!v || 'Por favor complete este campo',
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

      //With Local Storage, add items to productCart for LS

    addCart(productos) {
      if (this.valid) {
        this.productCart.id = productos.id;
        this.productCart.name = productos.name;
        this.productCart.price = productos.costo;
        this.setCart();
        this.checkItem(productos.id);
       // console.log(localStorage.getItem("Cart"));
        this.productCart.quantity = "0";
        this.confirmAlert()
        
      }
    },

    confirmAlert(){
      this.$store.dispatch("notification/SET_NOTIFICATION", {
          type: "success",
          text: "Producto Agregado Correctamente"
        });
        //console.log("accionejecutada")
    },

    warningAlert(){
      this.$store.dispatch("notification/SET_NOTIFICATION", {
          type: "warning",
          text: "El producto ya se encuentra en el carrito"
        });
    },

    //Create Cart and push items in LS
    setCart() {
      let Cart = [];
      if (!localStorage.getItem("Cart")) {
        Cart.push(this.productCart);
        localStorage.setItem("Cart", JSON.stringify(Cart));
      } else {
        Cart = JSON.parse(localStorage.getItem("Cart"));
        Cart.push(this.productCart);
        localStorage.setItem("Cart", JSON.stringify(Cart));
      }
    },

    checkItem(IdProducto){
      this.Cart = JSON.parse(localStorage.getItem("Cart"))
      let productoIndex = this.Cart.findIndex(el => el.id == IdProducto)
      console.log(productoIndex)
    },

    //addCart(productos){
    // this.$store.dispatch("pushCart", productos)
    //console.log(this.productos)

    // }
  },

 /*  computed: mapState({
    Cart: (state) => state.Cart,
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
