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
        { text: "Costo", value: "costo" },
        {text: "Cantidad", value: "action"}
      ],
    };
  },

 /*  computed: mapState({
    chart : state => state.chart,
    
  }), */

  computed:{
    chart(){
      return this.$store.state.chart;
    }

  },

  mounted(){
    this.chart
    console.log(this.chart)
  }

  
};
</script>

<style lang="scss" scoped></style>
