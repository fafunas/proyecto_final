<template>
    <v-data-table
    :headers="headers"
    :items="comidas"
    class="elevation-1"
  >
  
  </v-data-table>
</template>


<script>

import comidas from '../assets/json/comidas.json'

    export default {
        data () {
      return {
        headers: [
          {
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Comida', value: 'titulo' },
          {text: 'Costo', value:'costo'},
          { text: 'Cantidad', value: 'cantidad' },
        ],
        comidas
        
      }
    },

  }
        

</script>

<style lang="scss" scoped>

</style>