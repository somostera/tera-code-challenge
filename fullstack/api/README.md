## Setup

Clone manualmente o repo e execute `npm install`.


### Migrações

Execute o seguinte comando para rodar as migrações de inicialização.

```js
node ace migration:run
```

### Seeds

Execute o seguinte comando para rodar as seeds e popular o banco de dados de inicialização.

```js
node ace seed
```


### Servindo

Execute o seguinte comando para rodar o servidor localmente.

```js
npm start
```

> ⚠️ Não foi possível realizar o deploy em um serviço free, pois o banco de dados postgreSQL da Heroku está com problemas. As demais opções são pagas o que torna inviável para esse teste.
