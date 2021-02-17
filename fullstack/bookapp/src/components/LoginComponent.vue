<template>
  <form id="login" @submit="login" method="post">
    <div class="form-content">
      <label class="label" for="input-login">Email:</label>
      <input class="input" id="input-login" type="text" v-model="email" />

      <label class="label" for="input-password">Senha:</label>
      <input
        class="input"
        id="input-password"
        type="password"
        v-model="password"
      />
    </div>
    <div class="form-footer">
      <button class="button" type="submit">Entrar</button>
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
  name: 'LoginComponent',
  data() {
    return {
      email: null,
      password: null,
      errors: []
    }
  },
  methods: {
    login(e) {
      if (this.email && this.password) {
        const { email, password } = this
        this.$store
          .dispatch('loginUser', { email, password })
          .then(() => {
            this.$store.dispatch('getUser')
            this.$router.push('/')
          })
          .catch((error) => {
            this.errors.push(error)
          })
      }

      this.errors = []

      if (!this.email) {
        this.errors.push('Por favor, insira o email')
      }

      if (!this.password) {
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
  padding: 0 0 20px 0;
  margin: 30px auto;

  max-width: 547px;
  height: 273px;
}

.erro-info {
  margin: 20px 0 20px 0;
}
</style>
