import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokedex />', () => {
  test('1-Teste se a pagina contem um heading h2 com -Encountered pokémons', () => {
    renderWithRouter(<App />);

    const textSubtitle = /Encountered pokémons/i;
    const secondTitle = screen.getByRole('heading',
      { level: 2, name: textSubtitle });
    expect(secondTitle).toBeInTheDocument();
  });

  test('Teste se é exibido o próximo pokemon da lista quando o botão é clicado', () => {
    renderWithRouter(<App />);

    const buttonNextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(buttonNextPokemon).toBeInTheDocument();

    const imagePokemon = screen.getAllByRole('img');
    const nextButton = screen.getByTestId('next-pokemon', { name: /próximo pokémon/i });
    userEvent.click(nextButton);
    expect(imagePokemon).toHaveLength(1);
  });

  test('Teste se a pokedex possui os botões de filtro e se funcionam', () => {
    renderWithRouter(<App />);

    const btnAll = screen.getByRole('button', { name: /All/i });
    userEvent.click(btnAll);
    expect(btnAll).toBeInTheDocument();

    const pokemonTypes = screen.getAllByTestId('pokemon-type-button');
    const filterFirtPokemon = screen.getByRole('button', { name: /electric/i });
    expect(filterFirtPokemon).toBeInTheDocument();

    pokemonTypes.forEach((arrayTypes) => {
      expect(arrayTypes).toBeInTheDocument();
    });
    expect(btnAll).toBeInTheDocument();
  });

  test('Testa se a pokedex contem um botão para resetar o filtro', () => {
    renderWithRouter(<App />);

    const allbttn = screen.getByRole('button', { name: 'All' });
    userEvent.click(allbttn);
    expect(allbttn).toBeInTheDocument();
  });
});
