import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos:[],
    chart: []
  },
  mutations: {
    PRODUCTOS(state, paylod){
      //Lo que venga de Paylod se guarda en productos[]
      state.productos= paylod
    },

    //Mutacion para llenar el carrito
    PUSH_CHART(state, payload){
      state.chart.push(payload)
    

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
