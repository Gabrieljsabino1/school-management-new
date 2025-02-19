<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h2>Alunos</h2>
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="addStudent">
          <v-text-field
            v-model="newStudent"
            label="Nome do Novo Aluno"
          ></v-text-field>
          <v-btn type="submit" color="primary">Adicionar</v-btn>
        </v-form>
        <v-list>
          <v-list-item
            v-for="student in students"
            :key="student.id"
            class="d-flex justify-space-between"
          >
            <span>{{ student.name }}</span>
            <div>
              <router-link
                :to="{ name: 'StudentDetails', params: { id: student.id } }"
              >
                <v-btn icon>
                  <v-icon>mdi-eye</v-icon>
                </v-btn>
              </router-link>
              <v-btn icon @click="deleteStudent(student.id)">
                <v-icon color="red">mdi-delete</v-icon>
              </v-btn>
            </div>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Students',
  data() {
    return {
      newStudent: '',
      students: [],
    };
  },
  methods: {
    addStudent() {
      if (this.newStudent.trim() === '') return;
      this.students.push({ id: Date.now(), name: this.newStudent });
      this.newStudent = '';
    },
    deleteStudent(id) {
      this.students = this.students.filter((student) => student.id !== id);
    },
  },
};
</script>
