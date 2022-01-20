<template>
    <div>
        <v-data-table
        :items="orders"
        :headers="headers">
        <template v-slot:item.prod="{ item }">
              
                <tr v-for="food in item.products" :key="food.id" >
                 <td class="table-td">{{food.product}}</td> 
                 <v-spacer></v-spacer>
                 <td class="table-td">{{food.quantity}}</td>
                                 
                </tr>
          
              
            </template>

        </v-data-table>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
    export default {

        data() {
            return {
                headers: [
      {
        text: "Numero de Pedido",
        align: "start",
        sortable: false,
        value: "id",
      },
      {text:"Cliente", value: "customerName"},
      {text:"Direccion", value: "address"},
      {text: "Contacto", value: "tel"},
      {text: "Productos", value: "prod"},
      {text: "Total Venta", value : "totalSell"}
      
    ],
            }
        },
        computed:{
    ...mapGetters(["orders"])
  },

  

  mounted(){
    this.$store.dispatch("pullOrders")
    console.log(this.orders)
  }
    }
</script>

<style scoped>

.table-td{
 padding: 0px 5px;
}

</style>