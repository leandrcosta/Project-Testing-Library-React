// Requisito 2
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('Teste o componente <About />', () => {
  test('1 e 2-Teste se a pagina contem um  heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);

    const verifyTextPokedex = screen.getByRole('heading',
      { level: 2, name: /About pokédex/i });
    expect(verifyTextPokedex).toBeInTheDocument();
  });

  test('3-Teste se a pagina contem dois paragrafos sobre a Pokédex', () => {
    renderWithRouter(<About />);
    // Poderia colocar a frase em uma variavel e botar a variavel no getByText
    const firstParagraph = screen.getByText(/This application simulates a Pokédex/i);
    expect(firstParagraph).toBeInTheDocument();
    // Poderia colocar a frase em uma variavel e botar a variavel no getByText
    const secondParagraph = screen.getByText(/Pokémons by type/i);
    expect(secondParagraph).toBeInTheDocument();
  });

  test('4-Teste se a pagina contem a seguinte imagem de uma Pokédex', () => {
    renderWithRouter(<About />);

    const imgPokedex = screen.getByRole('img', { alt: /pokedex/i });
    const srcImage = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    expect(imgPokedex.src).toBe(srcImage);
  });
});
