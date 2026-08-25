// src/routes/__tests__/roleRoutes.test.jsx
import { describe, test, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import RoleRoute from '../roleRoutes';

const renderConRuta = () =>
  render(
    <MemoryRouter initialEntries={['/panel']}>
      <Routes>
        <Route path="/" element={<p>Página de login</p>} />
        <Route path="/unauthorized" element={<p>No autorizado</p>} />
        <Route
          path="/panel"
          element={
            <RoleRoute requiredRole="supervisor">
              <p>Panel de supervisores</p>
            </RoleRoute>
          }
        />
      </Routes>
    </MemoryRouter>
  );

describe('RoleRoute', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('sin token, redirige a "/"', () => {
    renderConRuta();
    expect(screen.getByText('Página de login')).toBeInTheDocument();
  });

  test('con token pero rol distinto al requerido, redirige a "/unauthorized"', () => {
    localStorage.setItem('token', 'un-token');
    localStorage.setItem('role', 'agente');

    renderConRuta();

    expect(screen.getByText('No autorizado')).toBeInTheDocument();
    expect(screen.queryByText('Panel de supervisores')).not.toBeInTheDocument();
  });

  test('con token y el rol requerido, renderiza el contenido', () => {
    localStorage.setItem('token', 'un-token');
    localStorage.setItem('role', 'supervisor');

    renderConRuta();

    expect(screen.getByText('Panel de supervisores')).toBeInTheDocument();
  });
});
