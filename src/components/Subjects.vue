<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h2>Matérias</h2>
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="addSubject">
          <v-text-field v-model="newSubject" label="Nova Matéria"></v-text-field>
          <v-btn type="submit">Adicionar</v-btn>
        </v-form>
        <v-list>
          <v-list-item v-for="subject in subjects" :key="subject.id">
            {{ subject.name }}
            <v-btn icon @click="deleteSubject(subject.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      newSubject: '',
      subjects: [],
    };
  },
  methods: {
    addSubject() {
      if (this.newSubject.trim() === '') return;
      this.subjects.push({ id: Date.now(), name: this.newSubject });
      this.newSubject = '';
    },
    deleteSubject(id) {
      this.subjects = this.subjects.filter(subject => subject.id !== id);
    },
  },
};
</script>
