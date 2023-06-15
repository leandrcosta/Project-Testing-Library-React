# React Testing Library
Projeto consiste na criação de testes para uma aplicação de Pokédex utilizando React Testing Library.

## Projeto

Criação de testes com React Testing Library para uma aplicação.

## Tecnologias

- JavaScript
- React
- React Testing Library

## Habilidades desenvolvidas neste projeto:

- Utilizar os seletores da React Testing Library em testes automatizados;
- Simular eventos com a React-Testing-Library em testes automatizados;
- Testar fluxos lógicos assíncronos com a React Testing Library;
- Testar inputs.

## Rodando o Projeto na sua maquina:

1. Clone o repositório
  * `git clone git@github.com:leandrcosta/Project-Testing-Library-React.git`
  * Entre na pasta do repositório na sua máquina:
    * `cd Project-Testing-Library-React`

2. Instale as dependências
   * `npm install`

3.  Inicialize o projeto
    * Utilize o comando `npm start` dentro da pasta `Project-Testing-Library-React` para rodar o projeto em sua máquina.

4.  Realizar testes
    * Utilize o comando `npm test` para rodar os testes do projeto em sua máquina.

# Requisitos

## 1. Teste o componente `<App.js />`

  > Caminho do componente: `src/App.js`

- <details><summary>Teste se o topo da aplicação contém um conjunto fixo de links de navegação:</summary>

  - O primeiro link deve possuir o texto `Home`;

  - O segundo link deve possuir o texto `About`;

  - O terceiro link deve possuir o texto `Favorite Pokémons`.
</details>

- Teste se a aplicação é redirecionada para a página inicial, na URL `/` ao clicar no link `Home` da barra de navegação;

- Teste se a aplicação é redirecionada para a página de `About`, na URL `/about`, ao clicar no link `About` da barra de navegação;

- Teste se a aplicação é redirecionada para a página de `Pokémons Favoritados`, na URL `/favorites`, ao clicar no link `Favorite Pokémons` da barra de navegação;

- Teste se a aplicação é redirecionada para a página `Not Found` ao entrar em uma URL desconhecida.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Será avaliado se o arquivo teste `App.test.js` contempla 100% dos casos de uso criados pelo Stryker:
    * É exibido na tela um `link` com o texto `Home`
    * É exibido na tela um `link` com o texto `About`
    * É exibido na tela um `link` com o texto `Favorite Pokémons`
</details>

---

## 2. Teste o componente `<About.js />.`

  > Caminho do componente: `src/pages/About.js`

  - Teste se a página contém as informações sobre a Pokédex;

  - Teste se a página contém um heading `h2` com o texto `About Pokédex`;

  - Teste se a página contém dois parágrafos com texto sobre a Pokédex;

  - Teste se a página contém a seguinte imagem de uma Pokédex: `https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png`.

  <details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Será avaliado se o arquivo teste `About.test.js` contempla 100% dos casos de uso criados pelo Stryker:
    * É exibido na tela um `h2` com texto `About Pokédex`
    * O atributo `src` da imagem é `https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png`
  </details>

---

## 3. Teste o componente `<FavoritePokemons.js />`

  > Caminho do componente: `src/pages/FavoritePokemons.js`
  
  - Teste se é exibida na tela a mensagem `No favorite pokemon found`, caso a pessoa não tenha pokémons favoritos;

  - Teste se são exibidos todos os cards de pokémons favoritados.

  <details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Será avaliado se o arquivo teste `FavoritePokemons.test.js` contempla 100% dos casos de uso criados pelo Stryker:
    * É exibido na tela a mensagem `No favorite pokemon found`
  </details>

---

## 4. Teste o componente `<NotFound.js />`

  > Caminho do componente: `src/pages/NotFound.js`

  - Teste se a página contém um heading `h2` com o texto `Page requested not found`;

  - Teste se a página mostra a imagem `https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif`.

  <details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Será avaliado se o arquivo teste `NotFound.test.js` contempla 100% dos casos de uso criados pelo Stryker:
    * É exibido na tela um `h2` com o texto `Page requested not found`
    * Existe uma imagem com o `src` `https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif`
  </details>

---

## 5. Teste o componente `<Pokedex.js />`

  > Caminho do componente: `src/pages/Pokedex.js`

  - Teste se a página contém um heading `h2` com o texto `Encountered pokémons`;

  - <details><summary>Teste se é exibido o próximo pokémon da lista quando o botão <code>Próximo pokémon</code> é clicado:</summary>

    - O botão deve conter o texto `Próximo pokémon`;

    - Os próximos pokémons da lista devem ser mostrados, um a um, ao clicar sucessivamente no botão;

    - O primeiro pokémon da lista deve ser mostrado ao clicar no botão, se estiver no último pokémon da lista.
  </details>

  - Teste se é mostrado apenas um pokémon por vez;

  - <details><summary>Teste se a Pokédex tem os botões de filtro:</summary>

    - Deve existir um botão de filtragem para cada tipo de pokémon, sem repetição;
      - _obs: Os botões devem ser capturados pelo `data-testid=pokemon-type-button`_ 

    - A partir da seleção de um botão de tipo, a Pokédex deve circular somente pelos pokémons daquele tipo;

    - O texto do botão deve corresponder ao `nome do tipo`, ex. `Psychic`;

    - O botão `All` precisa estar **sempre** visível.
  </details>

  - <details><summary>Teste se a Pokédex contém um botão para resetar o filtro:</summary>

    - O texto do botão deve ser `All`;

    - A Pokedéx deverá mostrar os pokémons normalmente (sem filtros) quando o botão `All` for clicado;

    - Ao carregar a página, o filtro selecionado deverá ser `All`.
  </detail>

  <details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Será avaliado se o arquivo teste `Pokedex.test.js` contempla 100% dos casos de uso criados pelo Stryker:
    * Os botões de filtragem por tipo possuem o nome correto
    * Os botões de filtragem por tipo possuem o `data-testid=pokemon-type-button` exceto o botão `All`
    * É possível clicar no botão de filtragem `All`
  </details>

---

## 6. Teste o componente `<Pokemon.js />`

  > Caminho do componente: `src/components/Pokemon.js`

  - <details><summary>Teste se é renderizado um card com as informações de determinado pokémon:</summary>

    - O nome correto do pokémon deve ser mostrado na tela;

    - O tipo correto do pokémon deve ser mostrado na tela;

    - O peso médio do pokémon deve ser exibido com um texto no formato `Average weight: <value> <measurementUnit>`; onde `<value>` e `<measurementUnit>` são, respectivamente, o peso médio do pokémon e sua unidade de medida;

    - A imagem do pokémon deve ser exibida. Ela deve conter um atributo `src` com a URL da imagem e um atributo `alt` com o texto `<name> sprite`, onde `<name>` é o nome do pokémon.
  </details>

  - Teste se o card do pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste pokémon. O link deve possuir a URL `/pokemons/<id>`, onde `<id>` é o id do pokémon exibido;

  - Teste se ao clicar no link de navegação do pokémon, é feito o redirecionamento da aplicação para a página de detalhes de pokémon;
  
  - Teste também se a URL exibida no navegador muda para `/pokemon/<id>`, onde `<id>` é o id do pokémon cujos detalhes se deseja ver;

  - <details><summary>Teste se existe um ícone de estrela nos pokémons favoritados:</summary>

    - O ícone deve ser uma imagem com o atributo `src` contendo o caminho `/star-icon.svg`;

    - A imagem deve ter o atributo `alt` igual a `<pokemon> is marked as favorite`, onde `<pokemon>` é o nome do pokémon exibido.
  </details>

  <details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Será avaliado se o arquivo teste `Pokemon.test.js` contempla 100% dos casos de uso criados pelo Stryker:
    * A imagem do pokemon possui o `src` correto
    * A imagem do pokemon possui o `alt` `<name> sprite`
    * A imagem de favorito :star: possui o `src` `/star-icon.svg`
    * A imagem de favorito :star: possui o `alt` `<name> is marked as favorite`
    * É exibido na tela um texto com o tipo do pokemon
    * É exibido na tela um `link` com o `href` `/pokemons/<id>`
  </details>

---

## 7. Teste o componente `<PokemonDetails.js />`

  > Caminho do componente: `src/pages/PokemonDetails.js`

  - <details><summary>Teste se as informações detalhadas do pokémon selecionado são mostradas na tela:</summary>

    - A página deve conter um texto `<name> Details`, onde `<name>` é o nome do pokémon;

    - **Não** deve existir o link de navegação para os detalhes do pokémon selecionado;

    - A seção de detalhes deve conter um heading `h2` com o texto `Summary`;

    - A seção de detalhes deve conter um parágrafo com o resumo do pokémon específico sendo visualizado.
      - _obs: é possível utilizar regex para capturar o parágrafo_
  </details>

  - <details><summary>Teste se existe na página uma seção com os mapas contendo as localizações do pokémon:</summary>

    - Na seção de detalhes deverá existir um heading `h2` com o texto `Game Locations of <name>`; onde `<name>` é o nome do pokémon exibido;

    - Todas as localizações do pokémon devem ser mostradas na seção de detalhes;

    - Devem ser exibidos o nome da localização e uma imagem do mapa em cada localização;

    - A imagem da localização deve ter um atributo `src` com a URL da localização;

    - A imagem da localização deve ter um atributo `alt` com o texto `<name> location`, onde `<name>` é o nome do pokémon.
  </details>

  - <details><summary>Teste se o usuário pode favoritar um pokémon através da página de detalhes:</summary>

    - A página deve exibir um `checkbox` que permite favoritar o pokémon;

    - Cliques alternados no `checkbox` devem adicionar e remover respectivamente o pokémon da lista de favoritos;

    - O `label` do `checkbox` deve conter o texto `Pokémon favoritado?`.
  </details>
  
  <details>
  <summary><strong>O que será verificado</strong></summary><br />

  * Será avaliado se o arquivo teste `PokemonDetails.test.js` contempla 100% dos casos de uso criados pelo Stryker:
    * É exibido na tela um `h2` com o texto `<name> Details`
    * É exibido na tela um `h2` com o texto `Summary`
    * É exibido na tela um texto contendo `<summary>`
    * É exibido na tela um `h2` com o texto `Game Locations of <name>`
    * São exibidas na tela imagens de localização com o `src` correto
    * É exibido na tela uma `label` com o texto `Pokémon favoritado?`
  </details>

---