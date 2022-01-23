<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <v-data-table
            :headers="headers"
            :items="productos"
            sort-by="calories"
            class="elevation-1"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-spacer></v-spacer>
                <v-toolbar-title >Comidas</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                  <v-card>
                    <v-card-text>
                      <v-text-field
                        v-model="editedItem.name"
                        label="Nombre"
                      ></v-text-field>
                      <v-text-field
                        v-model="editedItem.descripcion"
                        label="Descripcion"
                      ></v-text-field>
                      <v-text-field
                        v-model.number="editedItem.costo"
                        label="Costo"
                        type="number"
                      ></v-text-field>
                      <v-text-field
                        v-model.number="editedItem.cantidad"
                        label="Cantidad"
                        type="number"
                      ></v-text-field>
                      <v-text-field
                        v-model="editedItem.portada"
                        label="Portada"
                      ></v-text-field>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="close()">
                        Cancel
                      </v-btn>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="saveEditProd()"
                      >
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon medium color="#30E587" class="mr-2" @click="cargarEdicion(item)">
                mdi-pencil
              </v-icon>
              <v-icon medium color="red" @click="deleteItem(item.id)"> mdi-delete </v-icon>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
   </v-app>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Nombre",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Descripcion", value: "descripcion" },
      { text: "Costo", value: "costo" },
      { text: "Cantidad", value: "cantidad" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    productos: [],
    productoEliminar: 0,

    editedIndex: -1,
    editedItem: {
      name: "",
      costo: 0,
      cantidad: 0,
      descripcion: "",
      portada: "",
    },
    
  }),

 
  methods: {
    obtenerProductos() {
      axios
        .get("https://61b24f08c8d4640017aaf359.mockapi.io/productos")
        .then((data) => {
          this.productos = data.data;
        }).then((response) => {
          console.table(response.data);
        })
        .catch((err) => {
          console.error(`${err}`);
        });
    },
    
    deleteItem(idProducto) {
      this.productoEliminar = idProducto;
      axios.delete(
        `https://61b24f08c8d4640017aaf359.mockapi.io/productos/${this.productoEliminar}`
      )
      .then((response) => {
          console.table(response.data);
          this.obtenerProductos();
        })
        .catch((err) => {
          console.error(`${err}`);
        });
      
    },

    saveEditProd() {
      axios
        .put(
          `https://61b24f08c8d4640017aaf359.mockapi.io/productos/${this.editedIndex}`, this.editedItem
        )
        .then((response) => {
          console.table(response.data);
          this.obtenerProductos()
        })
        .catch((err) => {
          console.error(`${err}`);
        });
     // console.log(this.editedIndex);
      //console.log(this.editedItem)
      console.log(this.err);
      this.close()
      
    },

    cargarEdicion(item) {
      //Recibo el Objeto
      this.editedIndex = item.id ;
      //Asigno el objeto de ese indice a editedItem
      this.editedItem.name = item.name
      this.editedItem.descripcion = item.descripcion
      this.editedItem.costo = item.costo
      this.editedItem.portada = item.portada
      this.editedItem.cantidad = item.cantidad
      this.dialog = true;
      console.log("Edicion", this.editedIndex)
     
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },


  },
  mounted() {
    this.obtenerProductos();
  },
};
</script>

<style lang="scss" scoped>

</style>