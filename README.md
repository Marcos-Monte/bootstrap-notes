# Curso Bootstrap com Vue.js

Este projeto é uma aplicação Vue.js que utiliza Bootstrap e BootstrapVue para criar uma interface de usuário responsiva e estilizada. A aplicação demonstra o uso de componentes do BootstrapVue, como tabelas, grids e navegação, além de integração com o Vue Router para navegação entre páginas. Este projeto é um compilado dos meus estudos nessas tecnologias.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
.gitignore
babel.config.js
jsconfig.json
package.json
README.md
vue.config.js
public/
    favicon.ico
    index.html
src/
    App.vue
    main.js
    assets/
        logo.png
    components/
        Header.vue
        Home.vue
        Table.vue
    data/
        registros.mjs
    router/
        index.js
```

### Descrição dos Arquivos

- **public/index.html**: Arquivo HTML principal que serve como ponto de entrada da aplicação.
- **src/App.vue**: Componente raiz da aplicação.
- **src/main.js**: Arquivo JavaScript principal que inicializa a aplicação Vue.
- **src/components/Header.vue**: Componente de cabeçalho que contém a barra de navegação.
- **src/components/Home.vue**: Componente que demonstra o uso de grid do BootstrapVue.
- **src/components/Table.vue**: Componente que exibe uma tabela com paginação e alternância entre registros ativos e inativos.
- **src/data/registros.mjs**: Arquivo que contém os dados de exemplo para a tabela.
- **src/router/index.js**: Configuração do Vue Router para navegação entre as páginas.

## Configuração do Projeto

### Pré-requisitos

- Node.js
- Yarn (ou npm)

### Instalação

Para instalar as dependências do projeto, execute:

```sh
yarn install
```

### Compilar e recarregar para desenvolvimento

Para iniciar o servidor de desenvolvimento com hot-reload, execute:

```sh
yarn serve
```

### Compilar e minificar para produção

Para compilar o projeto para produção, execute:

```sh
yarn build
```

### Lint e corrigir arquivos

Para executar o linter e corrigir arquivos, execute:

```sh
yarn lint
```


## Dependências Principais

- **Vue.js**: Framework JavaScript progressivo para construção de interfaces de usuário.
- **Bootstrap**: Biblioteca de CSS para desenvolvimento de interfaces responsivas.
- **BootstrapVue**: Integração de componentes do Bootstrap com Vue.js.
- **Vue Router**: Biblioteca de roteamento oficial para Vue.js.

