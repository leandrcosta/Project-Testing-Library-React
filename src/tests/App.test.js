// Requisito 1
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <App.js />', () => {
  test('1-Test se o topo da aplicação contém um conjunto fixo de links de navegação',
    () => {
      renderWithRouter(<App />);

      const linkHome = screen.getByRole('link', { name: /home/i });
      expect(linkHome).toBeInTheDocument();

      const linkAbout = screen.getByRole('link', { name: /about/i });
      expect(linkAbout).toBeInTheDocument();

      const linkFavoritePokemons = screen.getByRole('link',
        { name: /pokémons/i });
      expect(linkFavoritePokemons).toBeInTheDocument();
    });

  test('2-Teste se a pagina é renderizada para URL / ao clicar em Home', () => {
    const { history } = renderWithRouter(<App />);

    const linkHome = screen.getByRole('link', { name: /home/i });
    expect(linkHome).toBeInTheDocument();
    userEvent.click(linkHome);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  });

  test('3-Teste se a pagina é renderizada para URL /about ao clicar em About', () => {
    const { history } = renderWithRouter(<App />);

    const linkAbout = screen.getByRole('link', { name: /about/i });
    expect(linkAbout).toBeInTheDocument();
    userEvent.click(linkAbout);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/about');
  });

  test(
    '4- Teste se a pagina renderiza para URL /favorites ao clicar em Favoritos ', () => {
      const { history } = renderWithRouter(<App />);

      const linkFavoritePokemons = screen
        .getByRole('link', { name: /favorite pokémons/i });
      expect(linkFavoritePokemons).toBeInTheDocument();
      userEvent.click(linkFavoritePokemons);
      const { location: { pathname } } = history;
      expect(pathname).toBe('/favorites');
    },
  );

  test('5-Teste se pagina renderiza para a pagina Not Found se URL desconhecida', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/xablau');
    const linkNotFound = screen.getByRole('heading', {
      level: 2, name: /page requested not found/i });
    expect(linkNotFound).toBeInTheDocument();
  });
});
