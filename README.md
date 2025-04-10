# Tera Code Challenge - Jean Silva

## Tecnologias Utilizadas

- NEXT 15
- React 19
- Tailwind v4
- TypeScript
- React Testing Library / Jest

## Implementação da Solução

### Rotas de API

- Para realizar o fetch dos dados fornecidos no JSON, criei rotas no NEXT utilizando o arquivo `route.ts`, presente em `app/api/courses/[[...id]]`.
- A rota aceita um parâmetro opcional, sendo este o ID de um curso específico. Ao utilizar o método GET em `/api/courses`, é retornada a listagem de todos os cursos. Já ao utilizar o método GET em `/api/courses/:ID`, é retornado o curso selecionado caso exista; caso contrário, o usuário recebe um erro 404 para indicar que o curso não foi encontrado.

### Rotas de Página

- Na aplicação temos as páginas index - `/`, curso específico - `/courses/:id` e página de erro 404.

### Performance e SEO

- Na página inicial index - `/`, o prerender da listagem de cursos acontece pelo lado do servidor, para garantir boas métricas de SEO.
- As páginas possuem título e descrição dinâmica com base nos dados do curso, para melhorar o ranqueamento através das engines de busca.
- Caso a filtragem de cursos seja feita utilizando parâmetros que não retornam um resultado, o usuário é apresentado com uma UI de fallback para ser avisado que sua busca não lhe trouxe cursos.
- A função que pega os dados do servidor possui um cache com revalidação de uma hora, para melhorar a experiência de carregamento ao usuário.
- Somente os componentes `<CardList/>`, `<Enroll/>`, `<SearchForm/>` e o provider de cursos `<CoursesProvider/>` possuem a diretiva `use client`, marcando estes componentes para serem reidratados no lado do cliente após a renderização inicial, enviando assim a menor quantidade de javascript do servidor ao cliente.
- As imagens da aplicação utilizam o componente `<Image/>` do NEXT. Elas recebem o atributo `priority` como `true`, para que seja realizado o preload do conteúdo da imagem ainda antes da renderização, melhorando as métricas de First Contentful Paint (FCP).
- As imagens também recebem o atributo `width` e `height` explícitos para que o NEXT possa calcular sua proporção (aspect-ratio), evitando assim métricas ruins de Cumulative Layout Shift (CLS).
- As fontes utilizadas na aplicação são disponibilizadas pelo `next/font/google`, para que o NEXT, em tempo de build, compile estes assets estáticos, evitando também métricas ruins de Cumulative Layout Shift (CLS) quando o layout muda de tamanho ao carregar uma fonte externamente pela rede.
- A transição entre a página index - `/` e a página de detalhes do curso `/courses/:id` é realizada utilizando um `loading.tsx`, garantindo assim ao usuário um feedback instantâneo para a troca de página. No arquivo `loading.tsx` é implementado um loading skeleton para que o usuário possa ter um feedback do conteúdo que está sendo carregado.
- Caso o ID de um curso não seja encontrado ao tentar acessar a rota `/courses/:id`, o usuário é redirecionado para a página de erro 404.

### Acessibilidade

- No arquivo `layout.tsx` está presente o componente `<SkipLink/>`, e as tags `main` da aplicação são inseridas através do componente `<MainLandmark/>`. Esta implementação visa trazer para usuários de tecnologias assistivas uma maneira de pular a navegação através dos controles do teclado, proporcionando assim uma experiência mais inclusiva de navegação.
- Os componentes interativos da página, como botões, inputs e formulários, possuem labels que os referenciam, permitindo que leitores de tela possam entender o significado de tais campos.
- Os componentes `<Card/>` implementam feedback visual de foco através da classe utility `focus:` do tailwind, para que usuários de tecnologias assistivas que também realizam a navegação pelo teclado possam ter um feedback de qual item eles estão interagindo.
- Os componentes `<Card/>` possuem uma configuração de animação para reduced motion através da classe utility `motion-reduce:` do tailwind, para remover a animação de hover e foco caso o usuário opte por navegar sem animações configuradas em seu sistema operacional.
- Imagens que possuem significado, como a logo do header, possuem um atributo `alt` para leitores de tela, e imagens que são apenas adereços visuais possuem atributo `alt` como uma string vazia.
- O componente `<Enroll/>`, que realiza a inscrição de um aluno em um curso, possui o atributo `aria-live`, para que, quando o valor seja alterado, leitores de tela também sejam acionados e deem ao usuário um feedback da nova informação.

### Estilização

- Para a configuração de cores foram utilizadas variáveis do tailwind através do `@theme inline`, pensando na possibilidade de alteração de cores com facilidade no futuro, sendo necessário apenas alterar os valores das variáveis.

### Gerenciamento de Estado

- Optei por utilizar uma abordagem baseada na utilização de Context para gerenciar o estado da filtragem de cursos pelo client-side. Optei por esta abordagem por julgar que a manipulação de estado para o requisito proposto era simples o suficiente para não ser necessária a instalação de outra biblioteca no projeto, diminuindo assim a necessidade de gerenciar novas dependências e mantendo o bundle do javascript o menor possível. A implementação se baseia na utilização de dois contextos: um para a injeção de dependência do estado e outro para a injeção de dependência da função dispatch, que realiza alterações neste estado. Essa implementação, separando os dois contextos, permite que seja possível realizar a atualização do estado na tela sem renderizar novamente componentes que apenas chamam a função dispatch, como é o caso do componente `<SearchForm/>` e a listagem com o `<CardList/>`.

### Implementação Adicional

- Realizei a implementação da inicialização dos filtros de busca com base no estado da URL e a alteração destes filtros sem recarregamento de página utilizando `replaceState`. Esta implementação foi pensada no caso em que um usuário quer compartilhar a pesquisa de um determinado curso com outra pessoa, sem que esta outra pessoa precise filtrar novamente a pesquisa com os mesmos parâmetros.

### Ferramentas de Qualidade de Código

- Husky para se integrar aos Git Hooks.
- Para a padronização dos commits do projeto, está configurado o `commitlint`, para impedir mensagens de commit que não sejam adequadas ao padrão estabelecido pela configuração.
- Para validar padrões no código durante o commit, é utilizado o `lint-staged`, que está configurado no arquivo `.lintstagedrc.js`. Ele executa as rotinas de formatação com `prettier`, validação do TypeScript e execução das configurações de `lint` do NEXT.
- A formatação com `prettier` também possui um plugin adicional para o tailwind, garantindo que todas as estilizações com tailwind sigam o mesmo padrão, facilitando assim a leitura e escrita de novos estilos.
- Antes do push, é executada a rotina de testes da aplicação, que foi escrita utilizando React Testing Library e Jest.

## Executando o Projeto

```
git clone https://github.com/JeanSilva999/tera-code-challenge.git
npm install

# Modo de desenvolvimento
npm run dev

# Build de produção
npm run build
npm run start
```
