import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


it('Render page', () => {
    const app = render(<App />);
    expect(app.getByText("Nenhum Pokemon!")).toBeTruthy();
    expect(app.getByText("Buscar")).toBeTruthy();
})