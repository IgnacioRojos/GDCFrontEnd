// src/routes/__tests__/privateRoutes.test.jsx
import { describe, test, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../privateRoutes';

const renderConRuta = () =>
  render(
    <MemoryRouter initialEntries={['/dashboard']}>
      <Routes>
        <Route path="/" element={<p>Página de login</p>} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <p>Contenido privado</p>
            </PrivateRoute>
          }
        />
      </Routes>
    </MemoryRouter>
  );

describe('PrivateRoute', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('sin token en localStorage, redirige a "/"', () => {
    renderConRuta();
    expect(screen.getByText('Página de login')).toBeInTheDocument();
    expect(screen.queryByText('Contenido privado')).not.toBeInTheDocument();
  });

  test('con token en localStorage, renderiza el contenido protegido', () => {
    localStorage.setItem('token', 'un-token-valido');
    renderConRuta();
    expect(screen.getByText('Contenido privado')).toBeInTheDocument();
  });
});
