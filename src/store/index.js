import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

import notification from './modules/notifications'
import dialogs from './modules/dialogs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos:[],
    Cart: [],
    empty:[],
    orders:[]
   
  },
  mutations: {
    PRODUCTOS(state, payload){
      //Lo que venga de Paylod se guarda en productos[]
      state.productos= payload
    },

    ORDERS(state,payload){
      state.orders=payload
    },

    //Mutacion para llenar el carrito
    PUSH_Cart(state, payload){
      state.Cart.push(payload)
    
    },
    AGREGA_PEDIDO(state,payload){
      state.orders.push(payload)
    },
    RESET_STATE(state) {
      Object.assign(state,this.Cart)
    }
    
    
  },
  actions: {
    obtenerProductos(context){
      axios
        .get("https://61b24f08c8d4640017aaf359.mockapi.io/productos")
        .then((data) => {
          //Enviamos a la mutacion el data, lo que traemos de MockAPI
          context.commit("PRODUCTOS", data.data);
        
        });

    },

    //List of orders
    pullOrders(context){
      axios.get("https://61b24f08c8d4640017aaf359.mockapi.io/pedidos")
      .then((data)=>{
        context.commit("ORDERS",data.data)
      })
    },

    //Enviaremos el producto a la mutacion 
    pushCart(context,payload){
      context.commit("PUSH_Cart",payload)
     // console.log("action")

    },

    resetState({ commit }) {
      commit('RESET_STATE')
    },
    //addToCart ({ state, commit }, item) {
      //

      confirmarPedido(context,payload){
        axios.post(`https://61b24f08c8d4640017aaf359.mockapi.io/pedidos`,payload)
        .then(()=>{
          context.commit("AGREGA_PEDIDO",payload)
        })
        .catch((err)=> {console.error(`${err}`)})
      }
 

   
  },

  getters:{
    //Traigo todos los productos
    productos: state => state.productos,
    //Probando traer la categoria de los productos para armar los filters
    productcat : state => state.productos.filter(function(ele){
      return ele.tipo == "Kids"
    }) ,
    //Traigo productos para el Carrousel
    carrousel: state => state.productos.filter(function(el){
      return el.cantidad > 10
    }),

    orders: state =>state.orders,

    //Total Items Carrito
    totalItems: state => state.Cart.length
  },
  modules: {
    notification, dialogs
  }
})
