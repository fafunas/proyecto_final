<template>
   <v-main background-color="primary">
    <v-tabs
    v-model="tab"
    background-color="transparent"
    color="basil"
    grow>
    <v-tab v-for="item in items" :key="item">
        {{item}}
    </v-tab>

    </v-tabs>
    </v-main>
</template>

<script>
    export default {

        
    }
</script>

<style lang="scss" scoped>

</style>