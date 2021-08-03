# livraria-cowboy

## Dependencias para rodar o projeto

- Para subir o projeto é necessário possuir docker e docker-compose no seu computador.
- [Link de instalação do docker](https://docs.docker.com/get-docker/)
- [Link de instalação do docker-compose](https://docs.docker.com/compose/install/)

## Criar imagem docker que será utilizada pelo projeto
Criar imagem docker "myvue:1.0" a partir do arquivo Dockerfile que vai conter nodejs e vue-cli.
```
docker build -t myvue:1.0 ./vuedocker
```

### Instalar dependências
```
docker-compose up deps
```

### Levantar projeto
Será levantado o projeto na porta 8080. Caso essa porta já esteja ocupada, configure uma nova no arquivo docker-compose.yml > services > app > ports, indicando sua porta do lado esquerdo.
```
docker-compose up app
```
