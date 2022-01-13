<template>
  <v-snackbar @evento="snackbar=$event" v-model="snackbar" :timeout="timeout">
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      text: "",
      timeout: 2000,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>