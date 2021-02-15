<template>
  <form>
    <div class="form-content">
      <label class="label" for="input-name">Nome:</label>
      <input class="input" id="input-name" type="text" />

      <label class="label" for="input-username">* Nome de usuário:</label>
      <input class="input" id="input-username" type="text" />

      <label class="label" for="input-email">* Email:</label>
      <input class="input" id="input-email" type="email" />

      <label class="label" for="input-password">* Senha:</label>
      <input class="input" id="input-password" type="password" />
    </div>
    <div class="form-footer">
      <button class="button" type="submit">Criar conta</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'RegisterComponent',
  data() {
    return {}
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
