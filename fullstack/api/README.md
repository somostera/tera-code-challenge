## Setup

Clone manualmente o repo e execute `npm install`.

Criar arquivo .env baseado no .env.example

### Gerando a key

Execute o seguinte comando para gerar a chave da aplicação.

```js
node ace key:generate
```

### Migrações

Execute o seguinte comando para rodar as migrações de inicialização.

```js
node ace migration:run
```


### Servindo

Execute o seguinte comando para rodar o servidor localmente.

```js
npm start
```

> ⚠️ Não foi possível realizar o deploy em um serviço free, pois o banco de dados postgreSQL da Heroku está com problemas. As demais opções são pagas o que torna inviável para esse teste.
