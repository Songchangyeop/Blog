import { Container, LogoLink, Logo } from './styles';

const Footer = () => {
  return (
    <Container>
      <LogoLink
        href="https://github.com/Songchangyeop"
        target="_blank"
        rel="noreferrer"
      >
        <Logo />
      </LogoLink>
      © 2022 SongChangYeop All rights reserved
    </Container>
  );
};

export default Footer;
