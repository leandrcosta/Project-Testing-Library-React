import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('Teste o componente <FavoritePokemons.js />', () => {
  test('1- Teste se tem o h2 -Favorite pokémons-, que evidencia se tem pokemons', () => {
    renderWithRouter(<FavoritePokemons />);

    const verifyTitle = /Favorite pokémons/i; // salvando valor em uma variavel
    const textFavoritePokemon = screen.getByText(verifyTitle);
    expect(textFavoritePokemon).toBeInTheDocument();
  });

  test('Teste se é exibido na tela a mensagem -No favorite pokemon found-', () => {
    renderWithRouter(<FavoritePokemons />);

    const textNotFounPokemon = /No favorite pokemon found/i; // salvando valor em uma variavel
    const notFoundPokemon = screen.getByText(textNotFounPokemon);
    expect(notFoundPokemon).toBeInTheDocument();
  });
});
