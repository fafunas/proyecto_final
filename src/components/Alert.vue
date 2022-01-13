<template>
  <v-alert v-model="visible" outlined shaped text :type="type">{{text}}</v-alert>
</template>



<script>

import {mapState} from 'vuex'

export default {
   
computed:{
    ...mapState('notification',['text','type','visible'])
}

};
</script>

<style lang="scss" scoped>
</style>