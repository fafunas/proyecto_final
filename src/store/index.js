import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos:[]
  },
  mutations: {
    PRODUCTOS(state, paylod){
      //Lo que venga de Paylod se guarda en productos[]
      state.productos= paylod
    },
    
    
  },
  actions: {
    obtenerProductos(context){
      axios
        .get("https://61b24f08c8d4640017aaf359.mockapi.io/productos")
        .then((data) => {
          //Enviamos a la mutacion el data, lo que traemos de MockAPI
          context.commit("PRODUCTOS", data.data);
        
        });

    }
  },

  getters:{
    //Traigo todos los productos
    productos: state => state.productos,
    //Traigo las categoria de los productos
    productcat : state => state.productos.filter(function(ele){
      return ele.tipo == "Kids"
    }) 
  },
  modules: {
  }
})
