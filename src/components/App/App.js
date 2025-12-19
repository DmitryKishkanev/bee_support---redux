import { Routes, Route, Navigate } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import { LoginPage, DashboardPage } from 'pages';
import Layout from 'components/Layout';
import { Container } from 'components/App/App.styled';

export default function App() {
  return (
    <>
      {/* Оставляет место с правой стороны под скрол, что бы не дёргался экран  */}
      <Global
        styles={css`
          html {
            overflow-y: scroll;
            scrollbar-gutter: stable;
          }
        `}
      />
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}
