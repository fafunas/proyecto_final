<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="3"
          ><h2>Agregar Producto</h2>
          <v-text-field
            v-model="defaultItem.name"
            label="Nombre"
          ></v-text-field>
          <v-text-field
            v-model="defaultItem.descripcion"
            label="Descripcion"
          ></v-text-field>
          <v-text-field
            v-model.number="defaultItem.costo"
            label="Costo"
            type="number"
          ></v-text-field>
          <v-text-field
            v-model.number="defaultItem.cantidad"
            label="Cantidad"
            type="number"
          ></v-text-field>
          <v-text-field
            v-model="defaultItem.portada"
            label="Portada"
          ></v-text-field>
          <v-btn color="blue" @click="agregarProducto"
            >Agregar Producto</v-btn
          >
        </v-col>
        <v-col>
          <v-data-table
            :headers="headers"
            :items="productos"
            sort-by="calories"
            class="elevation-1"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Tabla de Productos</v-toolbar-title>
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
                        @click="editarProducto()"
                      >
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="cargarEdicion(item.id)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item.id)"> mdi-delete </v-icon>
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
    defaultItem: {
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
    agregarProducto() {
      axios.post(
        "https://61b24f08c8d4640017aaf359.mockapi.io/productos",
        this.defaultItem,
        
      )
      .then((response) => {
          console.table(response.data);
          this.obtenerProductos();
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

    editarProducto() {
      axios
        .put(
          `https://61b24f08c8d4640017aaf359.mockapi.io/productos/${this.editedIndex+1}`, this.editedItem
        )
        .then((response) => {
          console.table(response.data);
        })
        .catch((err) => {
          console.error(`${err}`);
        });
      console.log(this.editedIndex);
      console.log(this.editedItem)
      console.log(this.err);
      this.close()
    },

    cargarEdicion(idProducto) {
      //Recibo el ID del objeto y lo asigno a una variable en la funcion
      this.editedIndex = idProducto -1 ;
      //Asigno el objeto de ese indice a editedItem
      this.editedItem = this.productos[this.editedIndex];
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