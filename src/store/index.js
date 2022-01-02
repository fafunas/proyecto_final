import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos:[],
    chart: [],
    empty:[]
  },
  mutations: {
    PRODUCTOS(state, payload){
      //Lo que venga de Paylod se guarda en productos[]
      state.productos= payload
    },

    //Mutacion para llenar el carrito
    PUSH_CHART(state, payload){
      state.chart.push(payload)
    
    },
    AGREGA_PEDIDO(state,payload){
      state.productos.push(payload)
    },
    RESET_STATE(state) {
      Object.assign(state,this.chart)
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

    //Enviaremos el producto a la mutacion 
    pushChart(context,payload){
      context.commit("PUSH_CHART",payload)
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

    //Total Items Carrito
    totalItems: state => state.chart.length
  },
  modules: {
  }
})
