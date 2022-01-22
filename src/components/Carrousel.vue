<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="i in carrousel" :key="i.id"
    >
      <v-sheet
        
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <v-img :src="i.portada" height="400px"></v-img>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>

import {mapGetters} from "vuex"

  export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },

    computed:{
        ...mapGetters(["carrousel"])
    },

    
  }
</script>

<style lang="scss" scoped>

</style>