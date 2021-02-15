<template>
  <form>
    <div class="form-content">
      <label class="label" for="input-login">Email ou nome de usuário:</label>
      <input class="input" id="input-login" type="text" />

      <label class="label" for="input-password">Senha:</label>
      <input class="input" id="input-password" type="password" />
    </div>
    <div class="form-footer">
      <button class="button" type="submit">Entrar</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'LoginComponent',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/main.scss';

form {
  padding: 0px;
  margin: 30px auto;

  max-width: 547px;
  height: 273px;
}
</style>
