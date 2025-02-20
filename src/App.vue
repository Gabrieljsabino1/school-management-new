<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Gestão Escolar</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text :class="{ active: $route.path === '/' }" to="/">Alunos</v-btn>
      <v-btn text :class="{ active: $route.path === '/subjects' }" to="/subjects">Matérias</v-btn>
      <v-btn text :class="{ active: $route.path === '/exams' }" to="/exams">Provas</v-btn>
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

<style>
.v-btn.active {
  background-color: #1976d2 !important;
  color: #fff !important;
}

.v-btn:hover {
  background-color: #1565c0 !important;
  color: #fff !important;
}

.v-btn {
  background-color: transparent !important;
  color: #000 !important;
}
</style>
