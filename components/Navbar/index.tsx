import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { Container, Nav, ThemeMode, Sun, Moon } from './styles';
import { themeState } from 'atoms/themeState';

const Navbar = () => {
  const [themeMode, setThemeMode] = useRecoilState(themeState);

  const router = useRouter();

  useEffect(() => {
    const theme = localStorage.getItem('theme');

    if (theme === 'undefined' || !theme) {
      localStorage.setItem('theme', 'light');
      return;
    }

    setThemeMode(theme);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!themeMode) return;

    document.body.dataset.theme = themeMode;
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  const onModeToggleClick = () => {
    setThemeMode((themeMode) => (themeMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Container>
      <Link href="/">
        <Nav active={router.pathname === '/'}>Home</Nav>
      </Link>
      <Link href="/blog">
        <Nav active={router.pathname === '/blog'}>Blog</Nav>
      </Link>
      <ThemeMode onClick={onModeToggleClick}>
        {themeMode === 'dark' ? <Moon /> : <Sun />}
      </ThemeMode>
    </Container>
  );
};

export default Navbar;
