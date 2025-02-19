<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h2>Provas</h2>
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="addExam">
          <v-text-field v-model="newExam.name" label="Nome da Prova"></v-text-field>
          <v-text-field v-model="newExam.studentId" label="ID do Aluno"></v-text-field>
          <v-text-field v-model="newExam.subjectId" label="ID da Matéria"></v-text-field>
          <v-text-field v-model="newExam.grade" label="Nota"></v-text-field>
          <v-btn type="submit">Adicionar</v-btn>
        </v-form>
        <v-list>
          <v-list-item v-for="exam in exams" :key="exam.id">
            Nome: {{ exam.name }}, Aluno ID: {{ exam.studentId }}, Matéria ID: {{ exam.subjectId }}, Nota: {{ exam.grade }}
            <v-btn icon @click="deleteExam(exam.id)">
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
      newExam: {
        name: '',
        studentId: '',
        subjectId: '',
        grade: '',
      },
      exams: [],
    };
  },
  methods: {
    addExam() {
      this.exams.push({ id: Date.now(), ...this.newExam });
      this.newExam = { name: '', studentId: '', subjectId: '', grade: '' };
    },
    deleteExam(id) {
      this.exams = this.exams.filter(exam => exam.id !== id);
    },
  },
};
</script>
