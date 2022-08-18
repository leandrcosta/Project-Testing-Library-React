import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  test('1.1- Teste se renderiza um card com as informações dos pokemons', () => {
    renderWithRouter(<App />);

    const srcImage = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const altImage = screen.getByAltText(/Pikachu sprite/i);
    expect(altImage.src).toBe(srcImage);
  });

  test('1.2- A imagem do pokemon possui o -alt <name> sprite-', () => {
    renderWithRouter(<App />);

    // Alt é muito massa pra usar, nesses casos
    const altImage = screen.getByAltText(/Pikachu sprite/i);
    expect(altImage).toBeInTheDocument();
  });

  test('2- Testa se existe um icone de estrela nos pokemons favoritos', () => {
    renderWithRouter(<App />);
    // 2.1- Verificando se ten o link 'mais detalhes'
    const moredetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moredetails);

    // 2.2- Pegando o checked favorito
    const checkedFavoritePokemon = screen.getByRole('checkbox');
    userEvent.click(checkedFavoritePokemon);

    // 2.3- https://www.wilbertom.com/post/react-testing-library-testing-a-node-attribute/
    const imagefav = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(imagefav).toHaveAttribute('src', '/star-icon.svg');
  });

  test('3- É exibido na tela um texto com o tipo do pokemon', () => {
    renderWithRouter(<App />);
    // https://github.com/testing-library/jest-dom#tohavetextcontent
    const getText = screen.getByTestId('pokemon-type');
    expect(getText).toHaveTextContent('Electric');
    expect(getText).toBeInTheDocument();
  });
});
