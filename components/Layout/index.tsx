import React from 'react';

import { Container } from './styles';
import { LayoutType } from './types';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

const Layout = ({ children }: LayoutType) => {
  return (
    <Container>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
