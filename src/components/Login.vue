<template>
  <v-app>
    
        <v-tabs
          v-model="tab"
          show-arrows
          background-color="deep-purple accent-4"
          icons-and-text
          dark
          grow
        >
          <v-tabs-slider color="purple darken-4"></v-tabs-slider>
          <v-tab>
            <v-icon large>mdi-account</v-icon>
            <div class="caption py-1">Login</div>
          </v-tab>
          <v-tab><v-icon large>mdi-account-outline</v-icon>
            <div class="caption py-1">Register</div></v-tab>
          <v-tab-item>
            <v-card class="px-4">
              <v-card-text>
                <v-form ref="loginForm" v-model="valid" lazy-validation>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="loginEmail"
                        :rules="loginEmailRules"
                        label="E-mail"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="loginPassword"
                        :append-icon="show1 ? 'eye' : 'eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        label="Password"
                        counter
                        @click:append="show1 = !show1"
                      ></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6" xsm="12"> </v-col>
                    <v-spacer></v-spacer>
                    <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                      <v-btn
                        x-large
                        block
                        :disabled="!valid"
                        color="success"
                        @click="login()"
                      >
                        Login
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card class="px-4">
              <v-card-text>
                <v-form ref="registerForm" v-model="valid" lazy-validation>
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="defauluser.nombre"
                        :rules="empty"
                        label="Nombre"
                        maxlength="20"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="defauluser.apellido"
                        :rules="empty"
                        label="Apellido"
                        maxlength="20"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="defauluser.email"
                        :rules="loginEmailRules"
                        label="E-mail"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="defauluser.password"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        label="Password"
                        hint="Al menos 8 caracteres"
                        counter
                        @click:append="show1 = !show1"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        block
                        v-model="verify"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, passwordMatch]"
                        :type="show1 ? 'text' : 'password'"
                        label="Confirmar Password"
                        counter
                        @click:append="show1 = !show1"
                      ></v-text-field>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                      <v-btn
                        x-large
                        block
                        :disabled="!valid"
                        color="success"
                        @click="validate()"
                        >Register</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
   
  </v-app>
</template>

<script>
import axios from "axios"
import router from "vue-router"

export default {
  data: () => ({
    dialog: true,
    valid: true,
    tab: 0,
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    verify: "",
    loginPassword: "",
    loginEmail: "",
    loginEmailRules: [(v) => !!v || "Email obligatorio"],
    empty: [(v) => !!v || "El casillero no puede estar vacio"],
    defauluser:{
        nombre:"",
        apellido:"",
        email:"",
        password:""
    },
    usuarios:[],
    router,

    show1: false,
    rules: {
      required: (value) => !!value || "La clave no puede estar en blanco",
      min: (v) => (v && v.length >= 8) || "Min 8 caracteres",
    },
  }),
 
  methods: {
    validate() {
      if (this.$refs.registerForm.validate()) {
        this.addUser()
        this.dialog= false
      }
    },
    login(){
      if (this.$refs.loginForm.validate()){
          this.checkUser()
          console.log(this.usuarios)

          //this.$router.push({ name: 'Admin' })
          //this.dialog= false
          //console.log(this.dialog)
      }  
    },

    checkUser() {
      axios
        .get("https://61b24f08c8d4640017aaf359.mockapi.io/user")
        .then((data) => {
          this.usuarios = data.data;
        }).then((response) => {
          console.table(response.data);
        })
        .catch((err) => {
          console.error(`${err}`);
        });
    },
   
    addUser() {
        axios.post(
        "https://61b24f08c8d4640017aaf359.mockapi.io/user",
        this.defauluser,
        
      );
    
        console.log(this.defauluser)
        
   
    },
  },

  computed: {
    passwordMatch() {
      return () => this.defauluser.password === this.verify || "Password must match";
    },
  },
};
</script>

<style lang="scss" scoped></style>
