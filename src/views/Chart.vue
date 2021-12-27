<template>
<v-main class="pa-4 ma-4">
    <Carrito/>
    <div class="pa-4">
        <v-btn class="ma-2" color="#ff3c3c">Confirmar</v-btn>
        <br>
        <v-btn @click="toHome()" class="btn-continue">Continuar Comprando</v-btn>
    </div>
</v-main>

    
</template>

<script>
import Carrito from '../components/Carrito.vue'


    export default {

        components:{Carrito},

        methods:{
            toHome(){
                this.$router.push({ name: 'Home' })
            }
        }

        
        
    }
</script>

<style lang="scss" scoped>


.btn-continue{
    border: solid 1px #ff3c3c;
    border-radius: 6px;
    color: #ff3c3c;
    font-size: 14px;
    height: 55px;
}

</style>