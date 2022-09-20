import React from 'react';
import Link from 'next/link';

import { Container, NavList, Nav } from './styles';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <Container>
      <NavList>
        <Link href="/">
          <Nav active={router.pathname === '/'}>Home</Nav>
        </Link>
        <Link href="/blog">
          <Nav active={router.pathname === '/blog'}>Blog</Nav>
        </Link>
      </NavList>
      <Nav
        href="https://holly-monarch-69a.notion.site/e2c53fb57c8c4730a5cd10779137d0c6"
        target="_blank"
        active={true}
      >
        Resume
      </Nav>
    </Container>
  );
};

export default Navbar;
