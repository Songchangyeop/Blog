import React from 'react';
import Link from 'next/link';

import { Container, Nav } from './styles';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <Container>
      <Link href="/blog">
        <Nav active={router.pathname === '/blog'}>Blog</Nav>
      </Link>
      <Link href="/resume">
        <Nav active={router.pathname === '/resume'}>Resume</Nav>
      </Link>
    </Container>
  );
};

export default Navbar;
