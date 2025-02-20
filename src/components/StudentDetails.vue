<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h2>Detalhes do Aluno</h2>
      </v-card-title>
      <v-card-text>
        <p>ID: {{ student.id }}</p>
        <p>Nome: {{ student.name }}</p>
        <v-list>
          <v-list-item v-for="exam in studentExams" :key="exam.id">
            Prova: {{ exam.name }}, Matéria: {{ getSubjectName(exam.subjectId) }}, Nota: {{ exam.grade }}
          </v-list-item>
        </v-list>
        <p>Média: {{ averageGrade }}</p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      student: {},
      exams: [],
      subjects: [],
    };
  },
  computed: {
    studentExams() {
      return this.exams.filter(exam => exam.studentId === this.student.id);
    },
    averageGrade() {
      const grades = this.studentExams.map(exam => parseFloat(exam.grade));
      return grades.length ? (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(2) : 'N/A';
    },
  },
  created() {
    this.student = { id: this.$route.params.id, name: 'Nome do Aluno' };
    this.exams = [];
    this.subjects = [];
  },
  methods: {
    getSubjectName(id) {
      const subject = this.subjects.find(subject => subject.id === id);
      return subject ? subject.name : 'Desconhecido';
    },
  },
};
</script>
