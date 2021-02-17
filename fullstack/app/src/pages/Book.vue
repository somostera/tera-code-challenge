  <template>
  <v-container>
    <nav id="history-nav">
      <router-link to="/"> Voltar </router-link>
    </nav>
    <v-form ref="form" @submit.prevent="save">
      <v-text-field
        id="name"
        v-model="model.name"
        :counter="100"
        label="Nome"
        :rules="rules"
        required
      ></v-text-field>

      <v-text-field
        id="author"
        v-model="model.author"
        :counter="100"
        :rules="rules"
        label="Autor(a)"
        required
      ></v-text-field>

      <v-text-field
        id="category"
        v-model="model.category"
        :counter="100"
        :rules="rules"
        label="Categoria"
        required
      ></v-text-field>

      <v-text-field
        id="category"
        v-model="model.stock"
        :counter="10"
        :rules="rules"
        label="Quantidade em estoque"
        required
      ></v-text-field>

      <v-text-field
        id="cover"
        v-model="model.cover_picture"
        :counter="500"
        :rules="rules"
        label="URL da Capa"
        required
      ></v-text-field>

      <v-textarea
        required
        v-model="model.description"
        :counter="1000"
        :rules="rules"
        id="description"
      >
        <template v-slot:label>
          <div>Descrição</div>
        </template>
      </v-textarea>

      <div class="form-footer">
        <v-btn @click="remove">Deletar</v-btn>

        <v-btn type="submit">
          {{ model.id ? "Atualizar" : "Adicionar" }}
        </v-btn>
      </div>
    </v-form>
  </v-container>
</template>
<script>
import { books } from "@/services/api.js";

export default {
  name: "Book",
  data: function () {
    return {
      model: {
        stock: 0,
      },
      rules: [
        (value) => {
          return value == "0" || !!value || "Campo Obrigatório.";
        },
      ],
    };
  },
  mounted() {
    
    if (this.$route.params && this.$route.params.id) {
    this.init();
    }
  },
  methods: {
    async init() {
  let result = await books.get(this.$route.params.id);
      this.model = result.data;
    },
    async save() {
      if (this.hasInvalid()) return;
      await books.create(this.model);
      this.goToList();
    },
    hasInvalid() {
      this.$refs.form.validate();
      return (
        !this.model.name ||
        !this.model.author ||
        !this.model.description ||
        !this.model.cover_picture ||
        !this.model.category ||
        (!this.model.stock && this.model.stock != 0)
      );
    },
    remove() {
      books.delete(this.model.key);
      this.goToList();
    },
    goToList() {
      this.$router.push({ name: "books" });
    },
  },
};
</script>
