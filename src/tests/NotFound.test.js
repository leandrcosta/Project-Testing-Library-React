import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Teste o componente <NotFound />', () => {
  test('Teste se a pagina contem um heading h2 com -Page requested not found', () => {
    renderWithRouter(<NotFound />);

    const textMsgNotFound = /Page requested not found/i;
    const pageNotFoundMsg = screen.getByRole('heading',
      { level: 2, name: textMsgNotFound });
    expect(pageNotFoundMsg).toBeInTheDocument();
  });

  test('teste se a pagina mostra uma imagem com um alt e link especifico', () => {
    renderWithRouter(<NotFound />);
    // https://testing-library.com/docs/queries/byalttext/ material de referencia do -getByAlttext()-
    const imgLink = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const altText = /Pikachu crying because the page/i;
    const altImageNotFound = screen.getByAltText(altText);
    expect(altImageNotFound.src).toBe(imgLink);
  });
});
