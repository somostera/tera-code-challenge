<template>
  <form>
    <div class="form-content">
      <label class="label" for="input-name">Nome:</label>
      <input class="input" id="input-name" type="text" />

      <label class="label" for="input-author">Autor(a):</label>
      <input class="input" id="input-author" type="text" />

      <label class="label" for="input-category">Categoria:</label>
      <input class="input" id="input-category" type="text" />

      <label class="label" for="input-stock">Quantidade em estoque:</label>
      <input class="input" id="input-stock" type="number" />

      <label class="label" for="input-cover">Url da capa:</label>
      <input class="input" id="input-cover" type="text" />

      <label class="label" for="input-description">Descrição:</label>
      <textarea id="input-description" class="input" style="height: 200px">
      </textarea>
    </div>
    <div class="form-footer">
      <button class="button" type="submit">Atualizar</button>
      <button class="button">Deletar</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'FormsComponent'
}
</script>

<style lang="scss">
@import '../assets/sass/main.scss';

form {
  padding: 0px;
  margin: 30px auto;

  max-width: 547px;
}
</style>
