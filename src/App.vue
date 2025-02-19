<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Gestão Escolar</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Alunos</v-btn>
      <v-btn text to="/subjects">Matérias</v-btn>
      <v-btn text to="/exams">Provas</v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
