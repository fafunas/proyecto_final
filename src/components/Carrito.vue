<template>
  <v-data-table 
    :headers="headers"
    :items="chart"
    class="elevation-1"
    hide-default-footer
  >
   
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
        { text: "Cantidad", value: "quantity"}
      ],
      chart:[]
    };
  },


methods:{

  setChart(){
      if(localStorage.getItem('chart')){
        this.chart = JSON.parse(localStorage.getItem('chart'))
      }
    },
},

mounted(){
  this.setChart()
  console.log('este cseria el carrito', this.chart)
}

 

  
};
</script>

<style lang="scss" scoped></style>
