<template>

  <v-card class="ma-1">
    <v-toolbar flat color="#4F4DAF" dark>
      <v-toolbar-title>Admin Panel</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab>
        <v-icon left> mdi-account </v-icon>
        ABM
      </v-tab>
      <v-tab>
        <v-icon left> mdi-file </v-icon>
        Pedidos
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-main>
            <v-row>
              <v-col cols="3">
                <AddProduct />
                 <Alert class="alert"/>
              </v-col>
              <v-col>
                <AdminPanel />
              </v-col>
            </v-row>
          </v-main>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <Orders />
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
 
</template>

<script>
import AdminPanel from "../components/AdminPanel.vue";
import Orders from "../components/Orders.vue";
import AddProduct from "../components/AddProduct.vue";

import Alert from '../components/Alert.vue'

export default {
  components: { AdminPanel, Orders, AddProduct,Alert },
};
</script>
