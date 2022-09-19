import Navbar from 'components/Navbar';
import React from 'react';
import { Container } from './styles';
import { LayoutType } from './types';

const Layout = ({ children }: LayoutType) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
};

export default Layout;
