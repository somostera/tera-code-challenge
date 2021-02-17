<template>
  <form id="register" @submit="login" method="post">
    <div class="form-content">
      <label class="label" for="input-name">Nome:</label>
      <input class="input" id="input-name" type="text" v-model="data.name" />

      <label class="label" for="input-username">* Nome de usuário:</label>
      <input
        class="input"
        id="input-username"
        type="text"
        v-model="data.username"
      />

      <label class="label" for="input-email">* Email:</label>
      <input class="input" id="input-email" type="email" v-model="data.email" />

      <label class="label" for="input-password">* Senha:</label>
      <input
        class="input"
        id="input-password"
        type="password"
        v-model="data.password"
      />
    </div>
    <div class="form-footer">
      <button class="button" type="submit">Criar conta</button>
    </div>
    <div class="erro-info">
      <div v-for="(error, index) in errors" :key="index">
        {{ error }}
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'RegisterComponent',
  data() {
    return {
      data: {},
      errors: []
    }
  },
  methods: {
    login(e) {
      if (this.data.email && this.data.password && this.data.username) {
        this.$store
          .dispatch('createUser', this.data)
          .then(() => {
            this.$store.dispatch('getUser')
            this.$router.push('/')
          })
          .catch((error) => {
            this.errors.push(error)
          })
      }

      this.errors = []

      if (!this.data.email) {
        this.errors.push('Por favor, insira o email')
      }

      if (!this.data.email) {
        this.errors.push('Por favor, insira o nome de usuário')
      }

      if (!this.data.password) {
        this.errors.push('Por favor, insira a senha')
      }

      e.preventDefault()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';

form {
  padding: 0px;
  margin: 30px auto;

  max-width: 547px;
}
</style>
