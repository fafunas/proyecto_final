<template>
<v-card class="ma-2">
    <v-toolbar
      flat
      color="primary"
      dark
    >
      <v-toolbar-title>Admin Panel</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab>
        <v-icon left>
          mdi-account
        </v-icon>
        ABM 
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-file
        </v-icon>
        Pedidos
      </v-tab>
    
      <v-tab-item>
        <v-card flat>
          <AdminPanel/>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <Orders/>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>

</template>

<script>

import AdminPanel from "../components/AdminPanel.vue"
import Orders from "../components/Orders.vue"

export default ({
 components:{AdminPanel, Orders}
})
</script>
