<template>
    <div>
        <v-data-table
        :items="orders"
        :headers="headers">

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
      
    ],
            }
        },
        computed:{
    ...mapGetters(["orders"])
  },

  

  mounted(){
    this.$store.dispatch("pullOrders")
  }
    }
</script>

<style lang="scss" scoped>

</style>